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
import CryptoPrices from "@/components/CryptoPrices";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блокчейн и криптовалюты: Технологии, меняющие мир. Погрузитесь в инновации децентрализованных финансов и WEB3",
  description: "Инвестируйте в цифровые активы с умом.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen">
      <ScrollUp />
      <Hero />
      <CryptoPrices /> {/* ← теперь блок точно вставлен */}
    </main>
  );
}
