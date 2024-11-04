import { MainTag } from "@/components/atoms";
import { Footer, Header, HeroSection } from "@/components/home-page";

export default function Home() {
  return (
    <div className="w-full pb-8">
      <MainTag className="text-app-text-dark-500">
        <Header />
        <HeroSection />
        <Footer />
      </MainTag>
    </div>
  );
}
