"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send, X, Building2 } from "lucide-react";
import { companies } from "@/data/companies";

const inputBase =
  "block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-white border-slate-300 hover:border-slate-400 focus:border-gold-500 focus:ring-gold-500/40";

const inputError =
  "border-rose-400 focus:border-rose-500 focus:ring-rose-500/30";

const selectBase =
  "block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-white border-slate-300 hover:border-slate-400 focus:border-gold-500 focus:ring-gold-500/40";

type InquiryType = "Bulk Order" | "Partnership" | "General";

interface FormState {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  message: string;
  inquiryType: InquiryType;
  concern: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  companyName: "",
  message: "",
  inquiryType: "General",
  concern: "shathi-group",
};

type InquiryListener = (data: { company?: { id: string; name: string } | null }) => void;

const listeners = new Set<InquiryListener>();

export function openInquiry(company?: { id: string; name: string } | null) {
  listeners.forEach((fn) => fn({ company }));
}

export function closeInquiry() {
  listeners.forEach((fn) => fn({ company: null }));
}

export function InquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedCompany, setPreselectedCompany] = useState<{ id: string; name: string } | null>(null);
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  useEffect(() => {
    const handler: InquiryListener = ({ company }) => {
      if (company) {
        setPreselectedCompany(company);
        setValues((prev) => ({ ...prev, concern: company.id }));
      } else {
        setPreselectedCompany(null);
        setValues((prev) => ({ ...prev, concern: "shathi-group" }));
      }
      setIsOpen(true);
    };

    listeners.add(handler);
    return () => {
      listeners.delete(handler);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setPreselectedCompany(null);
      }
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

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

  function validate(): Record<string, string> {
    const next: Record<string, string> = {};

    if (!values.name.trim()) {
      next.name = "Please enter your full name.";
    } else if (values.name.trim().length < 2) {
      next.name = "Name must be at least 2 characters.";
    }

    if (!values.email.trim()) {
      next.email = "Please enter your corporate email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (!values.companyName.trim()) {
      next.companyName = "Please enter your company name.";
    }

    if (!values.message.trim()) {
      next.message = "Please add a brief message about your inquiry.";
    } else if (values.message.trim().length < 10) {
      next.message = "Message must be at least 10 characters.";
    }

    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerMessage(null);

    const nextErrors = validate();
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
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          companyName: values.companyName.trim(),
          message: values.message.trim(),
          inquiryType: values.inquiryType,
          concern: values.concern,
        }),
      });

      const payload: { success: boolean; message: string } = await res
        .json()
        .catch(() => ({
          success: false,
          message: "Unexpected response from server.",
        }));

      if (!res.ok || !payload.success) {
        setServerMessage(payload.message ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues(initialState);
    } catch {
      setServerMessage(
        "Network error. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  const selectedLabel = preselectedCompany
    ? preselectedCompany.name
    : companies.find((c) => c.id === values.concern)?.name ?? "SHATHI Group";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={() => {
        setIsOpen(false);
        setPreselectedCompany(null);
      }}
    >
      <aside
        role="dialog"
        aria-modal="true"
        className="relative mb-4 w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between px-6 py-5 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-navy-900">
              Corporate Inquiry
            </h2>
            <p className="text-sm text-slate-600">
              {preselectedCompany
                ? `Direct line to ${selectedLabel}`
                : `Submit a B2B inquiry to ${selectedLabel}`}
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              setPreselectedCompany(null);
            }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            aria-label="Close inquiry form"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="inq-name"
                className="mb-1.5 block text-sm font-medium text-slate-800"
              >
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="inq-name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "inq-name-error" : undefined}
                className={`${inputBase} ${errors.name ? inputError : ""}`}
                placeholder="Jane Doe"
              />
              {errors.name && (
                <p
                  id="inq-name-error"
                  className="mt-1.5 text-xs font-medium text-rose-600"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="inq-company"
                className="mb-1.5 block text-sm font-medium text-slate-800"
              >
                Company Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="inq-company"
                name="companyName"
                type="text"
                autoComplete="organization"
                value={values.companyName}
                onChange={(e) => update("companyName", e.target.value)}
                aria-invalid={Boolean(errors.companyName)}
                aria-describedby={
                  errors.companyName ? "inq-company-error" : undefined
                }
                className={`${inputBase} ${errors.companyName ? inputError : ""}`}
                placeholder="Acme Corp"
              />
              {errors.companyName && (
                <p
                  id="inq-company-error"
                  className="mt-1.5 text-xs font-medium text-rose-600"
                >
                  {errors.companyName}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="inq-email"
                className="mb-1.5 block text-sm font-medium text-slate-800"
              >
                Corporate Email <span className="text-rose-500">*</span>
              </label>
              <input
                id="inq-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "inq-email-error" : undefined}
                className={`${inputBase} ${errors.email ? inputError : ""}`}
                placeholder="jane@acme.com"
              />
              {errors.email && (
                <p
                  id="inq-email-error"
                  className="mt-1.5 text-xs font-medium text-rose-600"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="inq-phone"
                className="mb-1.5 block text-sm font-medium text-slate-800"
              >
                Phone / WhatsApp
              </label>
              <input
                id="inq-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={`${inputBase}`}
                placeholder="+91 00000 00000"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="inq-subsidiary"
                className="mb-1.5 block text-sm font-medium text-slate-800"
              >
                Selected Subsidiary
              </label>
              <div className="relative">
                <select
                  id="inq-subsidiary"
                  name="concern"
                  value={values.concern}
                  onChange={(e) => update("concern", e.target.value)}
                  className={`${selectBase} pr-10 appearance-none`}
                >
                  <option value="shathi-group">SHATHI Group (Corporate)</option>
                  {companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
                </select>
                <Building2
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="inq-type"
                className="mb-1.5 block text-sm font-medium text-slate-800"
              >
                Inquiry Type
              </label>
              <div className="relative">
                <select
                  id="inq-type"
                  name="inquiryType"
                  value={values.inquiryType}
                  onChange={(e) =>
                    update("inquiryType", e.target.value as InquiryType)
                  }
                  className={`${selectBase} pr-10 appearance-none`}
                >
                  <option value="General">General</option>
                  <option value="Bulk Order">Bulk Order</option>
                  <option value="Partnership">Partnership</option>
                </select>
                <Building2
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="inq-message"
              className="mb-1.5 block text-sm font-medium text-slate-800"
            >
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="inq-message"
              name="message"
              rows={4}
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? "inq-message-error" : undefined
              }
              className={`${inputBase} resize-y ${
                errors.message ? inputError : ""
              }`}
              placeholder="Tell us about your requirements, timeline, and volumes…"
            />
            {errors.message && (
              <p
                id="inq-message-error"
                className="mt-1.5 text-xs font-medium text-rose-600"
              >
                {errors.message}
              </p>
            )}
          </div>

          {status === "success" && (
            <div className="rounded-lg bg-emerald-50 p-4">
              <p
                role="status"
                className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700"
              >
                <CheckCircle2 className="h-4 w-4" aria-hidden />
                Inquiry received. Our team will reach out within one business day.
              </p>
            </div>
          )}

          {status === "error" && serverMessage && (
            <p role="alert" className="text-sm text-rose-600">
              {serverMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white shadow-corporate transition hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Submitting…
              </>
            ) : (
              <>
                Send Inquiry
                <Send className="h-4 w-4" aria-hidden />
              </>
            )}
          </button>
        </form>
      </aside>
    </div>
  );
}
