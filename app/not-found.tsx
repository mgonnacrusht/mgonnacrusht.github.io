import Link from "next/link";
import { Container, Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="min-h-[50vh]">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          404
        </p>
        <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-muted">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8">
          <Button href="/">Back home</Button>
        </div>
        <p className="mt-6 text-sm text-muted">
          Looking for SaveT?{" "}
          <Link href="/savet/" className="text-accent underline">
            Go to SaveT
          </Link>
        </p>
      </Container>
    </Section>
  );
}
