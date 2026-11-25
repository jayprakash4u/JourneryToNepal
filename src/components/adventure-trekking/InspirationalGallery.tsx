import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { GALLERY_PLACEHOLDERS } from "@/lib/adventure-trekking";

export default function InspirationalGallery() {
  return (
    <Section variant="muted" compact aria-label="Inspirational gallery">
      <Container>
        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 lg:gap-4">
          {GALLERY_PLACEHOLDERS.map((item) => (
            <div
              key={item.id}
              className={`mb-3 break-inside-avoid overflow-hidden rounded-md lg:mb-4 ${item.aspect}`}
            >
              <div
                className={`h-full min-h-[10rem] w-full bg-gradient-to-br ${item.gradient}`}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
