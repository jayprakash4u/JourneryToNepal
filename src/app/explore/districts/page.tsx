import { Header, Footer, Container } from "@/components";
import DistrictsExplorer from "@/components/districts/DistrictsExplorer";
import DistrictsHero from "@/components/districts/DistrictsHero";
import PopularDistricts from "@/components/districts/PopularDistricts";

export default function DistrictsPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <DistrictsHero />
        <Container className="py-10 lg:py-14">
          <PopularDistricts />
          <DistrictsExplorer />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
