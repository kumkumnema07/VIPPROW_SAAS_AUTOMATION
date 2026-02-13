"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "../ui/form/contactForm";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { AppConfig } from "@/types/app-config";

export default function ContactSection() {

    const appConfig = useSelector(
    (state: RootState) => state.appConfig.data as AppConfig | null,
  );


  return (
    <section className="relative pb-28 px-6">
      <div className="mx-auto flex flex-col-reverse md:flex-row justify-between gap-40 md:gap-4 max-w-6xl">
        {/* LEFT CONTENT */}
        <div>
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Contact
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white font-heading">
            Let’s talk about your next move
          </h2>

          <p className="mt-4 max-w-xl text-sm text-neutral-600 dark:text-neutral-400 font-heading">
           Whether you’re scaling a SaaS, automating workflows, or exploring ideas, we’re ready to help. We usually reply within 24 hours
          </p>

          {/* INFO */}
          <div className="mt-10 space-y-6">
            <InfoItem
              icon={<Mail />}
              title="Email"
              value={`${appConfig?.email}`}
            />
            <InfoItem icon={<Phone />} title="Phone" value={`${appConfig?.phoneNumber}`} />
            <InfoItem
              icon={<MapPin />}
              title="Location"
              value={`${appConfig?.companyAddress[0]?.address}`}
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

/* ---------------- UI Pieces ---------------- */

function InfoItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-500">{title}</p>
        <p className="text-base font-semibold text-neutral-900 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

function Input({
  type = "text",
  placeholder,
}: {
  type?: string;
  placeholder: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-primary dark:border-white/10 dark:bg-neutral-800 dark:text-white"
    />
  );
}

function Textarea({ placeholder }: { placeholder: string }) {
  return (
    <textarea
      rows={5}
      placeholder={placeholder}
      className="w-full resize-none rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-primary dark:border-white/10 dark:bg-neutral-800 dark:text-white"
    />
  );
}
