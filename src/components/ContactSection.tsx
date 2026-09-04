"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { companies } from "@/data/companies";

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
  "block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-white";

const inputIdle =
  "border-slate-300 hover:border-slate-400 focus:border-neutral-500 focus:ring-neutral-500/40";
const inputError =
  "border-rose-400 focus:border-rose-500 focus:ring-rose-500/30";

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
      className="bg-transparent py-20 sm:py-24"
    >
      <div className="container-corporate">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] text-neutral-900 sm:text-4xl text-balance"
          >
            Let&apos;s start a conversation.
          </h2>
          <p className="mt-4 font-sans text-sm md:text-[15px] font-normal text-neutral-600 leading-relaxed text-balance">
            Reach out for partnerships, media inquiries, or to learn more about
            any of our businesses. We typically respond within one business day.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <aside className="lg:col-span-2">
            <div className="rounded-2xl bg-[#F1F3F5] p-7 text-neutral-900 shadow-corporate-lg sm:p-8 border border-slate-300/80">
              <h3 className="font-serif text-xl font-bold uppercase tracking-[0.14em]">
                Corporate Office
              </h3>
              <p className="mt-2 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-neutral-600">
                Visit, call, or write to us — our team is here to help.
              </p>

              <ul role="list" className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-200 text-neutral-600">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      Address
                    </p>
                     <p className="mt-1 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-neutral-600">
                      SHATHI Tower, Corporate Park,
                      <br />
                      Main Business District,
                      <br />
                      India
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-200 text-neutral-600">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                     <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                       Email
                     </p>
                      <a
                        href="mailto:info@shathigroup.com"
                        className="mt-1 block font-sans text-sm md:text-[15px] font-normal text-neutral-600 transition hover:text-neutral-900"
                     >
                      info@shathigroup.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-200 text-neutral-600">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                     <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                       Phone
                     </p>
                      <a
                        href="tel:+910000000000"
                        className="mt-1 block font-sans text-sm md:text-[15px] font-normal text-neutral-600 transition hover:text-neutral-900"
                     >
                      +91 00000 00000
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-200 text-neutral-600">
                    <Clock className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      Working Hours
                    </p>
                     <p className="mt-1 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-neutral-600">
                      Mon – Fri: 9:00 AM – 6:00 PM
                      <br />
                      Sat: 10:00 AM – 2:00 PM
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-300/80 bg-white/70 backdrop-blur-sm p-7 shadow-corporate sm:p-8"
              aria-label="Contact form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block font-sans text-sm font-medium text-neutral-800"
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
                    className="mb-1.5 block font-sans text-sm font-medium text-neutral-800"
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
                    className="mb-1.5 block font-sans text-sm font-medium text-neutral-800"
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
                    className="mb-1.5 block font-sans text-sm font-medium text-neutral-800"
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

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-corporate transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 disabled:cursor-not-allowed disabled:opacity-60"
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
                      Send Message
                      <Send className="h-4 w-4" aria-hidden />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
