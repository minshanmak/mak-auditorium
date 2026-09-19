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

export default function Home() {
  return (
    <>
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
