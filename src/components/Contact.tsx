"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { siteConfig, ventures } from "@/data/shathigroup";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

interface InquiryValues {
  readonly name: string;
  readonly email: string;
  readonly venture: string;
  readonly message: string;
}

type InquiryErrors = Partial<Record<keyof InquiryValues, string>>;

const initialValues: InquiryValues = {
  name: "",
  email: "",
  venture: "",
  message: "",
};

const inputClassName =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 text-sm text-luxury-50 outline-none transition placeholder:text-luxury-500 hover:border-white/[0.16] focus:border-[#d4af37]/70 focus:bg-white/[0.06] focus:ring-4 focus:ring-[#d4af37]/10";

function validate(values: InquiryValues): InquiryErrors {
  const errors: InquiryErrors = {};

  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.venture) errors.venture = "Please select a venture or department.";
  if (values.message.trim().length < 10) {
    errors.message = "Please add a message of at least 10 characters.";
  }

  return errors;
}

export function Contact() {
  const [values, setValues] = useState<InquiryValues>(initialValues);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [serverMessage, setServerMessage] = useState<string>();
  const { contact } = siteConfig;

  const updateValue = <Key extends keyof InquiryValues>(key: Key, value: InquiryValues[Key]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const submitInquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setServerMessage(undefined);

    if (Object.values(nextErrors).some(Boolean)) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.name.trim(),
          email: values.email.trim(),
          targetSubsidiary: values.venture,
          message: values.message.trim(),
        }),
      });
      const payload: { success?: boolean; message?: string } = await response.json();

      if (!response.ok || !payload.success) {
        setStatus("error");
        setServerMessage(payload.message ?? "We could not send your inquiry. Please try again.");
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setServerMessage("A network error occurred. Please try again or contact us directly.");
    }
  };

  const contactDetails = [
    { icon: MapPin, label: "Headquarters", value: contact.address, href: undefined },
    { icon: Mail, label: contact.email.label, value: contact.email.value, href: contact.email.href },
    { icon: Phone, label: contact.phone.label, value: contact.phone.value, href: contact.phone.href },
    {
      icon: Clock3,
      label: contact.operationalHours.label,
      value: contact.operationalHours.value,
      href: undefined,
    },
  ] as const;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden bg-luxury-charcoal py-20 sm:py-28">
      <div aria-hidden="true" className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-[120px]" />
      <div className="container-corporate relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="font-sans text-[10px] font-semibold uppercase tracking-luxury text-[#c5a880]">Corporate inquiry</p>
            <h2 id="contact-heading" className="mt-5 max-w-md font-serif text-4xl leading-[0.95] tracking-[-0.04em] text-luxury-50 sm:text-5xl">
              Start a considered conversation.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-luxury-300 sm:text-base">
              Speak with the SHATHI Group corporate desk about partnerships, projects, media enquiries, or a specific venture.
            </p>

            <dl className="mt-10 space-y-3">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 transition hover:border-[#d4af37]/30 hover:bg-white/[0.05]">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]" aria-hidden />
                  <div className="min-w-0">
                    <dt className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#c5a880]">{label}</dt>
                    {href ? (
                      <dd>
                        <a href={href} className="mt-1 block break-words text-sm leading-relaxed text-luxury-100 transition hover:text-[#f4d77a]">
                          {value}
                        </a>
                      </dd>
                    ) : (
                      <dd className="mt-1 text-sm leading-relaxed text-luxury-100">{value}</dd>
                    )}
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-6 border-l border-[#d4af37]/50 pl-4">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c5a880]">Additional desk</p>
              {contact.secondaryContacts.map((detail) => (
                <a key={detail.href} href={detail.href} className="mt-2 block text-sm text-luxury-300 transition hover:text-[#f4d77a]">
                  <span className="text-luxury-500">{detail.label}: </span>
                  {detail.value}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            noValidate
            onSubmit={submitInquiry}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/[0.08] bg-[#141418]/80 p-6 shadow-luxury backdrop-blur-md sm:p-8 lg:col-span-7"
          >
            <div className="flex flex-col justify-between gap-3 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="font-sans text-[10px] font-semibold uppercase tracking-luxury text-[#c5a880]">Inquiry form</p>
                <h3 className="mt-2 font-serif text-3xl tracking-[-0.03em] text-luxury-50">How can we help?</h3>
              </div>
              <p className="text-xs text-luxury-500">Fields marked with * are required.</p>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <FormField label="Name" error={errors.name} htmlFor="inquiry-name">
                <input id="inquiry-name" name="name" autoComplete="name" value={values.name} onChange={(event) => updateValue("name", event.target.value)} className={inputClassName} placeholder="Your full name" aria-invalid={Boolean(errors.name)} />
              </FormField>
              <FormField label="Email" error={errors.email} htmlFor="inquiry-email">
                <input id="inquiry-email" name="email" type="email" autoComplete="email" value={values.email} onChange={(event) => updateValue("email", event.target.value)} className={inputClassName} placeholder="you@company.com" aria-invalid={Boolean(errors.email)} />
              </FormField>
              <FormField label="Business venture" error={errors.venture} htmlFor="inquiry-venture" className="sm:col-span-2">
                <select id="inquiry-venture" name="venture" value={values.venture} onChange={(event) => updateValue("venture", event.target.value)} className={`${inputClassName} appearance-none ${values.venture ? "text-luxury-50" : "text-luxury-500"}`} aria-invalid={Boolean(errors.venture)}>
                  <option value="" disabled>Choose a venture or department</option>
                  <option value="Corporate / General Inquiry">Corporate / General Inquiry</option>
                  {ventures.map((venture) => <option key={venture.id} value={venture.name}>{venture.name}</option>)}
                </select>
              </FormField>
              <FormField label="Message" error={errors.message} htmlFor="inquiry-message" className="sm:col-span-2">
                <textarea id="inquiry-message" name="message" rows={6} value={values.message} onChange={(event) => updateValue("message", event.target.value)} className={`${inputClassName} resize-y`} placeholder="Tell us about your enquiry, project, or partnership idea." aria-invalid={Boolean(errors.message)} />
              </FormField>
            </div>

            <div className="mt-7 flex flex-col-reverse gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div aria-live="polite">
                {status === "success" ? (
                  <p className="inline-flex items-center gap-2 text-sm text-emerald-300"><CheckCircle2 className="h-4 w-4" aria-hidden />Your inquiry has been received.</p>
                ) : serverMessage ? (
                  <p className="text-sm text-rose-300">{serverMessage}</p>
                ) : (
                  <p className="text-xs leading-relaxed text-luxury-500">By submitting, you agree to the site&apos;s privacy terms.</p>
                )}
              </div>
              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#d4af37]/75 bg-[#d4af37]/10 px-6 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f4d77a] shadow-luxury-gold transition hover:bg-[#d4af37] hover:text-[#070708] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending" : "Send inquiry"}
                <Send className="h-4 w-4" aria-hidden />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function FormField({
  children,
  className,
  error,
  htmlFor,
  label,
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly error?: string;
  readonly htmlFor: string;
  readonly label: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d8c7a5]">
        {label} <span className="text-[#d4af37]">*</span>
      </label>
      {children}
      {error ? <p className="mt-2 text-xs text-rose-300">{error}</p> : null}
    </div>
  );
}
