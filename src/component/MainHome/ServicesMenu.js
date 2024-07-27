'use-client';
import ServicesItem from "./services.Item";
import SectionHead from "./SectionHead";

export default function ServicesMenu() {
  return (
    <div className="container mx-auto  ">
      <section className="h-full rounded-lg ">
        <div className="text-center animate-typing overflow-hidden whitespace-nowrap mt-4 rounded-lg p-8 ">
          <SectionHead
            subHeader="Most popular services"
            mainHeader="Our Services"
          />
        </div>
        <div className="p-3 rounded-lg ">
          <ServicesItem />
        </div>
      </section>
    </div>
  );
}
