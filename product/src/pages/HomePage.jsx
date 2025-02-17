import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import NewArrivals from "../components/NewArrivals";
import LuxuryBanner from "../components/LuxuryBanner";
import StyleSection from "../components/StyleSection";

function HomePage() {
  return (
    <main>
      <Hero />
      <CategorySection />
      <NewArrivals />
      <LuxuryBanner />
      <StyleSection />
    </main>
  );
}

export default HomePage;
