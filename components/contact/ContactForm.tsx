"use client";

import { useForm, ValidationError } from "@formspree/react";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent";

export function ContactForm() {
  const [state, handleSubmit] = useForm(siteConfig.formspreeFormId);

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <h3 className="text-xl font-bold">Thanks for reaching out</h3>
        <p className="mt-3 text-muted">
          We received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-1 text-sm text-red-600"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium">
          Company <span className="text-muted">(optional)</span>
        </label>
        <input id="company" name="company" type="text" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="intent" className="mb-2 block text-sm font-medium">
          What is this about?
        </label>
        <select
          id="intent"
          name="intent"
          required
          defaultValue="services"
          className={fieldClass}
        >
          <option value="services">Services</option>
          <option value="savet">SaveT</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className={cn(fieldClass, "resize-y")}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-sm text-red-600"
        />
      </div>

      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {state.submitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
