"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { CheckCircle2, Loader2, Send, X } from "lucide-react";

const subsidiaries = [
  "SHATHI Group — Corporate",
  "CORTEXIO Softsolutions",
  "SHIS Fashion",
  "XEROXII Luxury Watches and Jewellery",
  "CE R A VO Building Materials",
  "VELORIX Motors",
] as const;

const inquiryCategories = [
  "Bulk / Wholesale Order",
  "Strategic Partnership",
  "Dealership / Distribution",
  "Corporate Procurement",
  "Careers / Talent Acquisition",
  "General Inquiry",
] as const;

export type InquiryCategory = (typeof inquiryCategories)[number];
type SubmissionStatus = "idle" | "submitting" | "success" | "error";

interface InquiryForm {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  targetSubsidiary: string;
  inquiryCategory: InquiryCategory;
  message: string;
}

interface SubmissionResponse {
  success: boolean;
  message: string;
}

export interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubsidiary?: string;
  defaultCategory?: InquiryCategory;
}

const fieldClass =
  "w-full rounded-xl border border-slate-700/80 bg-slate-950/60 px-3.5 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 hover:border-slate-600 focus:border-gold-400/80 focus:ring-2 focus:ring-gold-400/20 disabled:cursor-not-allowed disabled:opacity-60";

function createInitialForm(
  defaultSubsidiary?: string,
  defaultCategory?: InquiryCategory
): InquiryForm {
  return {
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    targetSubsidiary: subsidiaries.includes(
      defaultSubsidiary as (typeof subsidiaries)[number]
    )
      ? defaultSubsidiary ?? ""
      : "",
    inquiryCategory: inquiryCategories.includes(
      defaultCategory as InquiryCategory
    )
      ? defaultCategory ?? "General Inquiry"
      : "General Inquiry",
    message: "",
  };
}

/** A reusable B2B inquiry dialog for SHATHI Group and its subsidiaries. */
export function InquiryModal({
  isOpen,
  onClose,
  defaultSubsidiary,
  defaultCategory,
}: InquiryModalProps) {
  const [form, setForm] = useState<InquiryForm>(() =>
    createInitialForm(defaultSubsidiary, defaultCategory)
  );
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof InquiryForm, string>>
  >({});
  const fullNameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    setForm(createInitialForm(defaultSubsidiary, defaultCategory));
    setStatus("idle");
    setErrorMessage(null);
    setFieldErrors({});

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => fullNameInputRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [defaultCategory, defaultSubsidiary, isOpen, onClose]);

  if (!isOpen) return null;

  function updateField<K extends keyof InquiryForm>(
    key: K,
    value: InquiryForm[K]
  ) {
    setForm((current) => ({ ...current, [key]: value }));
    if (fieldErrors[key]) {
      setFieldErrors((current) => ({ ...current, [key]: undefined }));
    }
    if (status === "error") setStatus("idle");
  }

  function validate(): Partial<Record<keyof InquiryForm, string>> {
    const errors: Partial<Record<keyof InquiryForm, string>> = {};

    if (!form.fullName.trim()) errors.fullName = "Please enter your full name.";
    if (!form.email.trim()) {
      errors.email = "Please enter your corporate email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      errors.message = "Please describe your requirements or specifications.";
    }

    return errors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    setErrorMessage(null);

    if (Object.keys(errors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          companyName: form.companyName.trim(),
          targetSubsidiary: form.targetSubsidiary,
          inquiryCategory: form.inquiryCategory,
          message: form.message.trim(),
        }),
      });
      const payload: SubmissionResponse = await response.json().catch(() => ({
        success: false,
        message: "We could not process the server response. Please try again.",
      }));

      if (!response.ok || !payload.success) {
        setErrorMessage(
          payload.message || "Your inquiry could not be sent. Please try again."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage(
        "We could not reach our server. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  const inputErrorClass = (field: keyof InquiryForm) =>
    fieldErrors[field]
      ? "border-rose-400 focus:border-rose-400 focus:ring-rose-400/20"
      : "";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-modal-title"
        className="relative max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700/60 bg-slate-900/95 shadow-2xl shadow-black/40"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-400 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          aria-label="Close inquiry form"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {status === "success" ? (
          <div className="flex min-h-[27rem] flex-col items-center justify-center px-6 py-12 text-center sm:px-12">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-300/30">
              <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
            </span>
            <h2
              id="inquiry-modal-title"
              className="mt-6 font-serif text-2xl font-bold uppercase tracking-[0.14em] text-white"
            >
              Inquiry received
            </h2>
            <p className="mt-3 max-w-md font-sans text-sm md:text-[15px] font-normal leading-6 text-slate-300">
              Our corporate team will reach out shortly to discuss your requirements.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-xl bg-gold-400 px-5 py-3 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <header className="border-b border-slate-700/60 px-6 py-6 pr-16 sm:px-8">
              <p className="font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                SHATHI Group
              </p>
              <h2
                id="inquiry-modal-title"
                className="mt-2 font-serif text-2xl font-bold uppercase tracking-[0.14em] text-white"
              >
                Corporate Inquiry
              </h2>
              <p className="mt-2 font-sans text-sm md:text-[15px] font-normal leading-relaxed text-slate-400">
                Tell us how our group can support your next business opportunity.
              </p>
            </header>

            <form
              className="space-y-5 px-6 py-6 sm:px-8 sm:py-8"
              onSubmit={handleSubmit}
              noValidate
            >
              {errorMessage && (
                <p
                  role="alert"
                  className="rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-100"
                >
                  {errorMessage}
                </p>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  required
                  error={fieldErrors.fullName}
                  htmlFor="inquiry-full-name"
                >
                  <input
                    ref={fullNameInputRef}
                    id="inquiry-full-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(event) => updateField("fullName", event.target.value)}
                    className={`${fieldClass} ${inputErrorClass("fullName")}`}
                    aria-invalid={Boolean(fieldErrors.fullName)}
                    aria-describedby={
                      fieldErrors.fullName ? "inquiry-full-name-error" : undefined
                    }
                  />
                </Field>
                <Field
                  label="Corporate Email"
                  required
                  error={fieldErrors.email}
                  htmlFor="inquiry-email"
                >
                  <input
                    id="inquiry-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    className={`${fieldClass} ${inputErrorClass("email")}`}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "inquiry-email-error" : undefined}
                  />
                </Field>
                <Field label="Phone / WhatsApp" htmlFor="inquiry-phone">
                  <input
                    id="inquiry-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    className={fieldClass}
                    placeholder="+880 …"
                  />
                </Field>
                <Field label="Company Name" htmlFor="inquiry-company">
                  <input
                    id="inquiry-company"
                    name="companyName"
                    type="text"
                    autoComplete="organization"
                    value={form.companyName}
                    onChange={(event) => updateField("companyName", event.target.value)}
                    className={fieldClass}
                  />
                </Field>
                <Field label="Target Subsidiary" htmlFor="inquiry-subsidiary">
                  <select
                    id="inquiry-subsidiary"
                    name="targetSubsidiary"
                    value={form.targetSubsidiary}
                    onChange={(event) =>
                      updateField("targetSubsidiary", event.target.value)
                    }
                    className={fieldClass}
                  >
                    <option value="">Select a subsidiary</option>
                    {subsidiaries.map((subsidiary) => (
                      <option key={subsidiary} value={subsidiary}>
                        {subsidiary}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Inquiry Category" htmlFor="inquiry-category">
                  <select
                    id="inquiry-category"
                    name="inquiryCategory"
                    value={form.inquiryCategory}
                    onChange={(event) =>
                      updateField(
                        "inquiryCategory",
                        event.target.value as InquiryCategory
                      )
                    }
                    className={fieldClass}
                  >
                    {inquiryCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field
                label="Message / Specifications"
                required
                error={fieldErrors.message}
                htmlFor="inquiry-message"
              >
                <textarea
                  id="inquiry-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className={`${fieldClass} min-h-32 resize-y ${inputErrorClass(
                    "message"
                  )}`}
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={
                    fieldErrors.message ? "inquiry-message-error" : undefined
                  }
                  placeholder="Please include quantities, timelines, specifications, or other relevant details."
                />
              </Field>

<button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-400 px-5 py-3.5 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending inquiry…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send corporate inquiry
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}

function Field({
  children,
  error,
  htmlFor,
  label,
  required = false,
}: {
  children: ReactNode;
  error?: string;
  htmlFor: string;
  label: string;
  required?: boolean;
}) {
  const errorId = `${htmlFor}-error`;

  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
        {label}
        {required && <span className="ml-1 text-gold-400">*</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} className="mt-2 text-xs font-medium text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}
