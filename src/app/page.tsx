import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import ScrollUp from "@/components/ScrollUp";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блокчейн и криптовалюты: Технологии, меняющие мир. Погрузитесь в инновации децентрализованных финансов и WEB3 ",
  description: "Инвистируйте в цифровые активы с умом.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Pricing />
      <Testimonials />
      <Faq />
      <Team />
      <HomeBlogSection posts={posts} />
      <Contact />
      <Clients />
      <CryptoPrices />
    </main>
    import CryptoPrices from "@/components/CryptoPrices";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Hero />
      <CryptoPrices />  // ← этот блок должен быть
    </main>
  );
}
  );
}
