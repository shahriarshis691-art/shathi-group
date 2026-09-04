"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, Send, X } from "lucide-react";
import { type Company } from "@/data/companies";

const inputBase =
  "block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-white border-slate-300 hover:border-slate-400 focus:border-gold-500 focus:ring-gold-500/40";

const inputError =
  "border-rose-400 focus:border-rose-500 focus:ring-rose-500/30";

interface ContactModalProps {
  company: Company | null;
  onClose: () => void;
}

export function ContactModal({ company, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!company) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [company, onClose]);

  if (!company) return null;
  const companyId = company.id;

  function validate() {
    const next: Record<string, string> = {};

    if (!name.trim()) {
      next.name = "Please enter your full name.";
    } else if (name.trim().length < 2) {
      next.name = "Name must be at least 2 characters.";
    }

    if (!email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      next.message = "Please add a brief message.";
    } else if (message.trim().length < 10) {
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
          name: name.trim(),
          email: email.trim(),
          concern: companyId,
          message: message.trim(),
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
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch {
      setServerMessage(
        "Network error. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
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
              Direct Inquiry
            </h2>
            <p className="text-sm text-slate-600">
              Schedule a meeting with {company.name}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            aria-label="Close inquiry form"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4" noValidate>
          <div>
            <label
              htmlFor="cm-name"
              className="mb-1.5 block text-sm font-medium text-slate-800"
            >
              Full Name
            </label>
            <input
              id="cm-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "cm-name-error" : undefined}
              className={`${inputBase} ${errors.name ? inputError : ""}`}
              placeholder="Jane Doe"
            />
            {errors.name && (
              <p
                id="cm-name-error"
                className="mt-1.5 text-xs font-medium text-rose-600"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="cm-email"
              className="mb-1.5 block text-sm font-medium text-slate-800"
            >
              Email Address
            </label>
            <input
              id="cm-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "cm-email-error" : undefined}
              className={`${inputBase} ${errors.email ? inputError : ""}`}
              placeholder="jane@company.com"
            />
            {errors.email && (
              <p
                id="cm-email-error"
                className="mt-1.5 text-xs font-medium text-rose-600"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="cm-message"
              className="mb-1.5 block text-sm font-medium text-slate-800"
            >
              Message
            </label>
            <textarea
              id="cm-message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? "cm-message-error" : undefined
              }
              className={`${inputBase} resize-y ${
                errors.message ? inputError : ""
              }`}
              placeholder="Tell us how we can help…"
            />
            {errors.message && (
              <p
                id="cm-message-error"
                className="mt-1.5 text-xs font-medium text-rose-600"
              >
                {errors.message}
              </p>
            )}
          </div>

          {status === "success" && (
            <p
              role="status"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700"
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden />
              Thanks — your message has been received.
            </p>
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
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                  aria-hidden="true"
                />
                Sending…
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
