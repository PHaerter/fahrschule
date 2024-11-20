"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "../ui/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { sendMail } from "@/lib/send-mail";
import { toast } from "sonner";
import Link from "next/link";

// Schema: Jetzt mit firstName, lastName und subject
const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "Please enter your first name" }),
  lastName: z.string().min(2, { message: "Please enter your last name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Please enter a subject" }),
  message: z.string().min(10, {
    message: "Please make sure your message is at least 10 characters long.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Name: ${values.firstName} ${values.lastName}\nEmail: ${values.email}\nBetreff: ${values.subject}\nNachricht: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: values.subject,
      text: mailText,
    });
    if (response?.messageId) {
      toast.success("Nachricht erfolgreich gesendet.");
    } else {
      toast.error("Senden der Nachricht fehlgeschlagen.");
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Kontaktiert uns</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <Form {...form}>
          <form
            className="space-y-4 flex-grow"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* First Name and Last Name fields side by side */}
            <div className="flex space-x-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Vorname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Nachname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="E-Mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Subject field */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Betreff" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea {...field} placeholder="Nachricht" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CardFooter className="flex flex-col space-y-4">
              <button
                className="w-full btn btn-accent text-white"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Wird gesendet....." : "Absenden"}
              </button>

              {/* Datenschutzhinweise */}
              <p className="text-sm text-gray-500">
                Wir verwenden Ihre Angaben zur Beantwortung Ihrer Anfrage.
                Weitere Informationen finden Sie in unseren{" "}
                <Link href="/datenschutz" passHref legacyBehavior>
                  <a target="_blank" className="text-blue-500 hover:underline">
                    Datenschutzhinweisen
                  </a>
                </Link>
                .
              </p>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
