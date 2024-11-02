import { MainTag } from "@/components/atoms";
import { Footer, Header, HeroSection } from "@/components/home-page";

export default function Home() {
  return (
    <div className="w-full pb-8">
      <MainTag>
        <Header />
        <HeroSection />
        <Footer />
      </MainTag>
    </div>
  );
}
