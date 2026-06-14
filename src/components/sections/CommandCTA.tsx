import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { InterfacePanel } from "@/components/ui/InterfacePanel";
import { SystemLabel } from "@/components/ui/SystemLabel";

const commands = [
  "> project.init",
  "> scope.define",
  "> build.launch",
];

export function CommandCTA() {
  return (
    <section className="border-t border-border bg-background pb-24 lg:pb-32">
      <Container>
        <InterfacePanel className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:gap-16 lg:p-16">
          <div>
            <SystemLabel className="text-accent">Final command</SystemLabel>

            <h2 className="mt-6 text-4xl font-medium leading-[1.06] tracking-[-0.02em] sm:text-5xl lg:text-[3.25rem]">
              Ready to build something that actually works?
            </h2>

            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted lg:text-lg">
              Send the rough idea, outdated website or broken process.
              I&apos;ll turn it into a clear digital build plan.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact">Start a project</Button>
              <Link
                href="/work"
                className="font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                View work →
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="border border-border bg-[#080a10] px-5 py-6 font-mono text-sm leading-loose">
              {commands.map((command) => (
                <p key={command} className="text-muted">
                  <span className="text-accent">{command.split(" ")[0]}</span>{" "}
                  {command.split(" ").slice(1).join(" ")}
                </p>
              ))}
              <p className="mt-2 text-foreground">
                <span className="text-accent">&gt;</span>{" "}
                <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>
        </InterfacePanel>
      </Container>
    </section>
  );
}
