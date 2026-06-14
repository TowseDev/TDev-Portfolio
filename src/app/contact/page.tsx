import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with TDev Digital to discuss your next project.",
};

export default function ContactPage() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <SectionHeader
            eyebrow="Contact"
            title="Tell us about your project"
            description="Share a few details and we'll get back to you with a clear next step. No lengthy forms, no auto-replies — just a direct conversation."
          />

          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-white/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-white/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What are you looking to build?"
                  className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-white/20"
                />
              </div>

              <Button type="submit">Send message</Button>
              <p className="text-xs text-muted">
                Form submission wiring can be added when you&apos;re ready to
                connect email or a CRM.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-border pt-16 sm:grid-cols-3">
          {[
            { label: "Email", value: "hello@tdevdigital.com" },
            { label: "Response time", value: "Within 1–2 business days" },
            { label: "Best for", value: "New builds, redesigns & retainers" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-foreground sm:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
