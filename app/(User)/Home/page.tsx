import AboutComponent from "@/components/AboutComponent";
import EventGrid from "@/components/EventGrid";
import GalleryGrid from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import MenuGrid from "@/components/MenuGrid";
import SpecialMenus from "@/components/SpecialMenus";

export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-12 pb-8">
      <Hero />
      <SpecialMenus />
      <AboutComponent />
      <GalleryGrid preview />
      <MenuGrid preview />
      <EventGrid preview />
    </div>
  );
}
