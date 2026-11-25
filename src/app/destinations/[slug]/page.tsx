import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer, Container } from "@/components";
import AskAboutPlace from "@/components/place-qa/AskAboutPlace";
import { getDestinationBySlug } from "@/lib/destinations";
import { getQuestionsByPlaceId } from "@/lib/qa-store";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const questions = await getQuestionsByPlaceId(slug);

  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1 py-10 lg:py-14">
        <Container className="max-w-4xl">
          <Link
            href="/"
            className="mb-6 inline-block text-sm font-medium text-primary hover:text-primary-light"
          >
            ← Back to Home
          </Link>

          <article className="overflow-hidden rounded-md border border-border bg-surface shadow-sm">
            <div className="relative aspect-[16/9]">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                {destination.name}
              </h1>
              <p className="text-lg leading-relaxed text-text-secondary">
                {destination.hook}
              </p>
            </div>
          </article>

          <div className="mt-8">
            <AskAboutPlace placeId={slug} initialQuestions={questions} />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
