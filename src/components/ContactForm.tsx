"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface FormState {
  naam: string;
  email: string;
  onderwerp: string;
  bericht: string;
  // Honeypot tegen spam (NFR5) — moet leeg blijven.
  website: string;
}

interface FormErrors {
  naam?: string;
  email?: string;
  onderwerp?: string;
  bericht?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyForm: FormState = {
  naam: "",
  email: "",
  onderwerp: "",
  bericht: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {};
    if (!values.naam.trim()) next.naam = "Vul je naam in.";
    if (!values.email.trim()) {
      next.email = "Vul je e-mailadres in.";
    } else if (!EMAIL_RE.test(values.email.trim())) {
      next.email = "Vul een geldig e-mailadres in.";
    }
    if (!values.onderwerp.trim()) next.onderwerp = "Vul een onderwerp in.";
    if (!values.bericht.trim()) next.bericht = "Vul een bericht in.";
    return next;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Honeypot: als dit verborgen veld gevuld is, gaat het waarschijnlijk om spam.
    if (form.website) {
      console.warn("[contact] Honeypot ingevuld — submit genegeerd (mogelijk spam).");
      return;
    }

    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    // Nep-submit: geen echte verzending, alleen loggen + succesmelding (prototype).
    console.log("[contact] Formulier verzonden (mock):", {
      naam: form.naam,
      email: form.email,
      onderwerp: form.onderwerp,
      bericht: form.bericht,
    });

    setSubmitted(true);
    setForm(emptyForm);
    setErrors({});
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50 p-6"
      >
        <CheckCircle2
          className="mt-0.5 h-6 w-6 shrink-0 text-brand-600"
          aria-hidden="true"
        />
        <div>
          <h2 className="text-lg font-semibold text-brand-900">
            Bedankt voor je bericht!
          </h2>
          <p className="mt-1 text-sm text-brand-700">
            We hebben je bericht ontvangen en nemen zo snel mogelijk contact met
            je op. (Dit is een prototype: er is geen echte e-mail verstuurd.)
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 inline-flex rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            Nieuw bericht versturen
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="naam"
          className="block text-sm font-medium text-brand-900"
        >
          Naam <span className="text-accent-600">*</span>
        </label>
        <input
          id="naam"
          name="naam"
          type="text"
          value={form.naam}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.naam}
          aria-describedby={errors.naam ? "naam-error" : undefined}
          className="mt-1 w-full rounded-lg border border-brand-200 px-3 py-2 text-brand-950 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
        />
        {errors.naam && (
          <p id="naam-error" className="mt-1 text-sm text-accent-700">
            {errors.naam}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-brand-900"
        >
          E-mailadres <span className="text-accent-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-1 w-full rounded-lg border border-brand-200 px-3 py-2 text-brand-950 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-accent-700">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="onderwerp"
          className="block text-sm font-medium text-brand-900"
        >
          Onderwerp <span className="text-accent-600">*</span>
        </label>
        <input
          id="onderwerp"
          name="onderwerp"
          type="text"
          value={form.onderwerp}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.onderwerp}
          aria-describedby={errors.onderwerp ? "onderwerp-error" : undefined}
          className="mt-1 w-full rounded-lg border border-brand-200 px-3 py-2 text-brand-950 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
        />
        {errors.onderwerp && (
          <p id="onderwerp-error" className="mt-1 text-sm text-accent-700">
            {errors.onderwerp}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="bericht"
          className="block text-sm font-medium text-brand-900"
        >
          Bericht <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={5}
          value={form.bericht}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.bericht}
          aria-describedby={errors.bericht ? "bericht-error" : undefined}
          className="mt-1 w-full rounded-lg border border-brand-200 px-3 py-2 text-brand-950 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
        />
        {errors.bericht && (
          <p id="bericht-error" className="mt-1 text-sm text-accent-700">
            {errors.bericht}
          </p>
        )}
      </div>

      {/* Honeypot-veld: verborgen voor gebruikers, zichtbaar voor bots (NFR5). */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Laat dit veld leeg</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="inline-flex rounded-full bg-accent-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
      >
        Verstuur bericht
      </button>
    </form>
  );
}
