'use client';

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryShowcase from "@/components/CategoryShowcase";
import AboutPreview from "@/components/AboutPreview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  const inquireViaWhatsApp = (productName: string) => {
    const phoneNumber = '254757450716'; // TODO: Replace with your actual WhatsApp number
    const message = encodeURIComponent(`Hi, I'm interested in the ${productName}. Can you provide more details?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-white pt-20">
      <Header />
      <Hero />
      <FeaturedProducts inquireViaWhatsApp={inquireViaWhatsApp} />
      <CategoryShowcase />
      <AboutPreview />
      <Testimonials />
      <Footer />
    </main>
  );
}