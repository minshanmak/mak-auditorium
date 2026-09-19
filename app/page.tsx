import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { VenueExperience } from "@/components/VenueExperience";
import { MainHall } from "@/components/MainHall";
import { Stage } from "@/components/Stage";
import { Architecture } from "@/components/Architecture";
import { Dining } from "@/components/Dining";
import { Gallery } from "@/components/Gallery";
import { Facilities } from "@/components/Facilities";
import { BookingCTA } from "@/components/BookingCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "name": "MAK Auditorium",
  "alternateName": ["mak auditorium", "MAK auditorium"],
  "description": "Premium convention center and marriage hall suitable for weddings, corporate gatherings, and large-scale celebrations.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Luxury Avenue",
    "addressLocality": "Metropolis",
    "addressRegion": "NY",
    "postalCode": "10001",
    "addressCountry": "US"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Introduction />
      <VenueExperience />
      <MainHall />
      <Stage />
      <Architecture />
      <Dining />
      <Gallery />
      <Facilities />
      <BookingCTA />
    </>
  );
}
