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
    service: "",
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
          service: "",
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
  <FieldLabel htmlFor="service">Service</FieldLabel>

  <select
    id="service"
    name="service"
    value={form.service}
    onChange={handleChange}
    required
    className="w-full border rounded-md px-3 py-2"
  >
    <option value="">Select a Service</option>

    <option value="web-development">Web Development</option>
    <option value="frontend-development">Frontend Development</option>
    <option value="backend-development">Backend Development</option>
    <option value="fullstack-development">Full Stack Development</option>

    <option value="mobile-app-development">Mobile App Development</option>
    <option value="android-development">Android App Development</option>
    <option value="ios-development">iOS App Development</option>

    <option value="software-development">Custom Software Development</option>
    <option value="saas-development">SaaS Development</option>
    <option value="api-development">API Development</option>

    <option value="ui-ux-design">UI / UX Design</option>
    <option value="testing-qa">Software Testing & QA</option>

    <option value="maintenance-support">Maintenance & Support</option>
  </select>
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
