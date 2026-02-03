"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useSubmitContactForm } from "@/app/features/contact/hook/useContact";
import toast from "react-hot-toast";

export function ContactForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const submitMutation = useSubmitContactForm();
  const [form, setForm] = useState({
    type: "General",
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  // Handle On Change Inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitMutation.mutate(form, {
      onSuccess: () => {
        console.log("Form submitted successfully.");
        toast.success("Form submitted successfully.");
        setForm({
          type: "General",
          name: "",
          email: "",
          phone: "",
          message: "",
          subject: "",
        });
      },
      onError: (err: unknown) => {
        const errorMessage =
          (err as { response?: { data?: { message?: string } } })?.response
            ?.data?.message || "Something went wrong. Try again";

        toast.error(errorMessage);
        console.log(errorMessage);
      },
    });
  };

  return (
    <div
      className={cn("flex flex-col gap-6 min-w-auto md:min-w-lg", className)}
      {...props}
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Get in touch</CardTitle>
          <CardDescription>Get in touch description</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Fill form text
              </FieldSeparator>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="full name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="fullname">Phone</FieldLabel>
                <Input
                  id="fullname"
                  type="text"
                  placeholder="1234567890"
                  min={10}
                  max={10}
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Input
                  id="message"
                  type="text"
                  placeholder="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <Button type="submit" disabled={submitMutation.isPaused}>
                  {submitMutation.isPending ? "Submitting" : "Get in touch"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center hid">
        Our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
