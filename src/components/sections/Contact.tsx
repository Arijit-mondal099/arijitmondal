"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Send,
  Instagram,
  Phone,
} from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useFadeIn, useSlideIn } from "@/components/animations/gsap-hooks";
import Image from "next/image";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  mail: Mail,
  phone: Phone,
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const titleRef = useFadeIn();
  const formRef = useSlideIn("left");
  const contactInfoRef = useSlideIn("right");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission
      // In a real application, you would send this to an API endpoint
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <Image
        src={"/app_images/grid.png"}
        alt="contact-grid-image"
        fill
        className="object-cover -z-10"
      />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="sticky top-20">
            <Card ref={formRef as React.RefObject<HTMLDivElement>}>
              <CardHeader>
                <CardTitle className="text-2xl lg:text-3xl">
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      {...register("name")}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      {...register("subject")}
                      aria-invalid={errors.subject ? "true" : "false"}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      className="min-h-32"
                      rows={10}
                      {...register("message")}
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-sm text-destructive">
                      Failed to send message. Please try again.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div
            ref={contactInfoRef as React.RefObject<HTMLDivElement>}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Connect with me through these platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = iconMap[link.icon];
                  return Icon ? (
                    <a
                      key={link.name}
                      href={link.url}
                      target={
                        link.icon === "email" || link.icon === "phone"
                          ? undefined
                          : "_blank"
                      }
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors group"
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <div>
                        <p className="font-medium">{link.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {link.url.replace(
                            /(https?:\/\/)|(mailto:)|(tel:)/g,
                            "",
                          )}
                        </p>
                      </div>
                    </a>
                  ) : null;
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Let&apos;s Collaborate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I&apos;m always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, feel free to reach out!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
