import Link from "next/link";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-xl rounded-xl border border-border/70 bg-white/60 p-8 text-center shadow-sm backdrop-blur-md">
          <h1 className="font-display text-2xl font-semibold tracking-tight">Page not found</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            The page you are looking for does not exist. Return home or browse the product list.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/">Go home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/products">View products</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
