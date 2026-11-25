import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import HomeAskQuestion from "@/components/home/HomeAskQuestion";
import QuestionPreviewCard from "@/components/home/QuestionPreviewCard";
import { PLACE_QA_COPY } from "@/lib/place-qa";
import { getPlaceHref, getPlaceName, getQaPlaceOptions } from "@/lib/place-qa-resolver";
import { getFeaturedQuestions } from "@/lib/qa-store";
import HomeSectionHeader from "./HomeSectionHeader";

export default async function TravelerQuestions() {
  const [questions, placeOptions] = await Promise.all([
    getFeaturedQuestions(3),
    getQaPlaceOptions(),
  ]);

  const questionsWithPlaces = await Promise.all(
    questions.map(async (question) => ({
      question,
      placeName: await getPlaceName(question.placeId),
      placeHref: getPlaceHref(question.placeId),
    }))
  );

  return (
    <Section id="traveler-questions" aria-labelledby="traveler-questions-heading">
      <Container>
        <HomeSectionHeader
          id="traveler-questions-heading"
          eyebrow="Ask travelers"
          title={PLACE_QA_COPY.homepageTitle}
          subtitle={PLACE_QA_COPY.homepageSubtext}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          {questionsWithPlaces.length > 0 && (
            <div className="grid grid-cols-1 gap-5 lg:col-span-3">
              {questionsWithPlaces.map(({ question, placeName, placeHref }) => (
                <QuestionPreviewCard
                  key={question.id}
                  question={question}
                  placeName={placeName}
                  placeHref={placeHref}
                />
              ))}
            </div>
          )}

          <div className={questionsWithPlaces.length > 0 ? "lg:col-span-2" : "lg:col-span-5"}>
            <HomeAskQuestion places={placeOptions} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
