"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { companies } from "@/data/companies";
import { directContacts } from "@/data/contact";
import { SlideIn } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  concern: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  concern?: string;
  message?: string;
}

const initial: FormState = {
  name: "",
  email: "",
  concern: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  else if (values.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";

  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!emailPattern.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";

  if (!values.concern) errors.concern = "Please choose a concern.";

  if (!values.message.trim()) errors.message = "Please add a brief message.";
  else if (values.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";

  return errors;
}

const inputBase =
  "w-full bg-[#FAFAFA] border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-neutral-950 focus:outline-none transition-colors duration-200 rounded-none";

const inputIdle =
  "border-neutral-200 hover:border-neutral-400 focus:border-neutral-950";
const inputError =
  "border-rose-500 focus:border-rose-400";

export function ContactSection() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerMessage(null);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.name.trim(),
          email: values.email.trim(),
          targetSubsidiary: values.concern,
          message: values.message.trim(),
        }),
      });

      const payload: {
        success: boolean;
        message: string;
        errors?: Record<string, string>;
      } = await res.json().catch(() => ({
        success: false,
        message: "Unexpected response from server.",
      }));

      if (!res.ok || !payload.success) {
        if (payload.errors) setErrors(payload.errors);
        setServerMessage(payload.message ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues(initial);
    } catch {
      setServerMessage(
        "Network error. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  return (
    <section
      aria-labelledby="contact-heading"
      id="contact"
      className="bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <SlideIn direction="left" className="lg:col-span-4">
            <aside>
            <div className="border border-neutral-200 bg-white p-8 md:p-10 rounded-none">
              <p className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase mb-2 block">
                Communication Desk
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-neutral-950 tracking-tight font-normal mb-4">
                Let&apos;s start a conversation.
              </h2>
              <p className="text-xs md:text-sm text-neutral-600 font-sans leading-relaxed mb-8">
                Reach out for partnerships, media inquiries, or to learn more about
                any of our businesses. We typically respond within one business day.
              </p>

              <div className="space-y-6 pt-6 border-t border-neutral-200">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-neutral-900 mt-0.5 shrink-0" aria-hidden />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-1">
                      Address
                    </p>
                    <p className="text-sm font-medium text-neutral-950 leading-snug">
                      SHATHI Tower, Corporate Park,
                      <br />
                      Main Business District,
                      <br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-neutral-900 mt-0.5 shrink-0" aria-hidden />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-1">
                      Direct Email
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href={directContacts.corporate.href}
                        className="inline-flex min-h-11 items-center font-mono text-xs text-neutral-800 underline underline-offset-4 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:text-sm"
                      >
                        {directContacts.corporate.email}
                      </a>
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400">
                          {directContacts.cortex.label}
                        </span>
                        <a
                          href={directContacts.cortex.href}
                          aria-label={`Email ${directContacts.cortex.label}`}
                          className="inline-flex items-center font-mono text-xs text-neutral-800 underline underline-offset-4 transition-colors hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:text-sm"
                        >
                          {directContacts.cortex.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-neutral-900 mt-0.5 shrink-0" aria-hidden />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-1">
                      Direct Line
                    </p>
                    <a
                      href="tel:+8801979614216"
                      className="text-sm font-medium text-neutral-950 leading-snug hover:text-neutral-600 transition-colors"
                    >
                       +880 1979614216
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </aside>
          </SlideIn>

          <SlideIn direction="right" delay={0.12} className="lg:col-span-8">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="border border-neutral-200 bg-white p-8 md:p-10 rounded-none"
              aria-label="Contact form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-[11px] font-mono tracking-[0.15em] text-neutral-500 uppercase mb-2 block"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`${inputBase} ${errors.name ? inputError : inputIdle}`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-1.5 text-xs font-medium text-rose-600"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-[11px] font-mono tracking-[0.15em] text-neutral-500 uppercase mb-2 block"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`${inputBase} ${errors.email ? inputError : inputIdle}`}
                    placeholder="jane@company.com"
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1.5 text-xs font-medium text-rose-600"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-concern"
                    className="text-[11px] font-mono tracking-[0.15em] text-neutral-500 uppercase mb-2 block"
                  >
                    Select Concern
                  </label>
                  <select
                    id="contact-concern"
                    name="concern"
                    value={values.concern}
                    onChange={(e) => update("concern", e.target.value)}
                    aria-invalid={Boolean(errors.concern)}
                    aria-describedby={
                      errors.concern ? "concern-error" : undefined
                    }
                    className={`${inputBase} ${errors.concern ? inputError : inputIdle} ${
                      values.concern === "" ? "text-neutral-400" : "text-neutral-900"
                    }`}
                  >
                    <option value="" disabled>
                      Choose a company or department…
                    </option>
                    <option value="corporate">Corporate / General Inquiry</option>
                    {companies.map((company) => (
                      <option key={company.id} value={company.id}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                  {errors.concern && (
                    <p
                      id="concern-error"
                      className="mt-1.5 text-xs font-medium text-rose-600"
                    >
                      {errors.concern}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="text-[11px] font-mono tracking-[0.15em] text-neutral-500 uppercase mb-2 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={(e) => update("message", e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className={`${inputBase} resize-y ${errors.message ? inputError : inputIdle}`}
                    placeholder="Tell us a little about how we can help…"
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1.5 text-xs font-medium text-rose-600"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="sm:mb-0">
                  {status === "success" ? (
                    <p
                      role="status"
                      className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700"
                    >
                      <CheckCircle2 className="h-4 w-4" aria-hidden />
                      Thanks — your message has been received.
                    </p>
                  ) : (
                    <p className="text-xs text-neutral-500">
                      By submitting, you agree to our privacy policy.
                    </p>
                  )}
                  {status === "error" && serverMessage ? (
                    <p role="alert" className="mt-2 text-sm text-rose-600">
                      {serverMessage}
                    </p>
                  ) : null}
                </div>

<Button
                   variant="primary"
                   type="submit"
                   disabled={status === "submitting"}
                   className="mt-2"
                 >
                   {status === "submitting" ? (
                     <>
                       <span
                         className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                         aria-hidden="true"
                       />
                       Sending…
                     </>
                   ) : (
                     <>
                       Send Transmission
                       <Send className="h-4 w-4" aria-hidden />
                     </>
                   )}
                 </Button>
              </div>
            </form>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
