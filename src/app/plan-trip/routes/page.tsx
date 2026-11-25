import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, Container } from "@/components";
import { POPULAR_ROUTES, ROUTE_DISTANCES } from "@/lib/plan-trip-routes";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Travel Routes | Journey to Nepal",
  description: "Bus, flight, and road routes between major destinations in Nepal.",
};

export default function PlanTripRoutesPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <Container className="py-10 lg:py-14">
          <Link
            href="/plan-trip/planner"
            className="mb-6 inline-block text-sm font-medium text-text-secondary hover:text-primary"
          >
            ← Trip planner
          </Link>

          <h1 className="mb-3 text-2xl font-bold text-primary md:text-3xl">Travel Routes</h1>
          <p className="mb-8 max-w-2xl text-text-secondary">
            How to get between Nepal&apos;s most visited places — by road, bus, or flight.
          </p>

          <div className="mb-12 grid gap-4 md:grid-cols-2">
            {POPULAR_ROUTES.map((route) => (
              <article
                key={`${route.from}-${route.to}`}
                className="rounded-md border border-border bg-surface p-5 shadow-sm"
              >
                <h2 className="mb-3 text-lg font-semibold text-primary">
                  {route.from} → {route.to}
                </h2>
                <p className="mb-2 text-sm text-text-primary">{route.duration}</p>
                <p className="mb-2 text-sm text-text-secondary">{route.transport}</p>
                <p className="text-sm text-text-muted">{route.note}</p>
              </article>
            ))}
          </div>

          <section id="distances">
            <h2 className="mb-4 text-xl font-bold text-primary">Distance Between Places</h2>
            <div className="overflow-x-auto rounded-md border border-border">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-primary/5 text-text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">From</th>
                    <th className="px-4 py-3 font-semibold">To</th>
                    <th className="px-4 py-3 font-semibold">Road</th>
                    <th className="px-4 py-3 font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {ROUTE_DISTANCES.map((row) => (
                    <tr key={`${row.from}-${row.to}`} className="border-t border-border-light">
                      <td className="px-4 py-3 text-text-primary">{row.from}</td>
                      <td className="px-4 py-3 text-text-primary">{row.to}</td>
                      <td className="px-4 py-3 text-text-secondary">{row.road}</td>
                      <td className="px-4 py-3 text-text-secondary">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="mt-10 text-center">
            <Button href="/plan-trip/planner#trip-planner-tool" size="lg">
              Build My Route
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
