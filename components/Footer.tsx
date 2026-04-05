import { NavbarContent } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";

const quickInfo = [
  {
    icon: "mdi:map-marker-outline",
    title: "Location",
    value: "Bole, Addis Ababa",
  },
  {
    icon: "mdi:clock-outline",
    title: "Open Daily",
    value: "8:00 AM - 10:00 PM",
  },
  {
    icon: "mdi:phone-outline",
    title: "Reservations",
    value: "+251 91 234 5678",
  },
];

const Footer = () => {
  return (
    <footer className="cafe-shell pt-6 sm:pt-8">
      <div className="overflow-hidden rounded-[2.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(17,12,10,0.98),rgba(38,25,20,0.94),rgba(14,10,9,0.98))] shadow-[0_30px_90px_-35px_rgba(0,0,0,0.9)]">
        <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-10">
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.38em] text-amber-200/65">
                Cafi
              </p>
              <h2 className="font-heading text-4xl font-semibold text-white sm:text-5xl">
                End your day where good coffee still feels personal.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
              A warm cafe experience built around comfort food, thoughtful drinks,
              and spaces that invite people to stay a little longer.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/Contact"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-300"
              >
                <span>Reserve a Table</span>
                <Icon icon="mdi:arrow-right" className="text-lg" />
              </Link>
              <Link
                href="/Menu"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                <span>See Menu</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-amber-200/65">
              Quick Links
            </p>
            <div className="grid gap-3">
              {NavbarContent.map((item) => (
                <Link
                  key={item.id}
                  href={`/${item.name}`}
                  className="group flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-3 text-sm text-stone-200 transition hover:bg-white/10"
                >
                  <span>{item.name}</span>
                  <Icon
                    icon="mdi:arrow-top-right"
                    className="text-base text-amber-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-amber-200/65">
              Visit Us
            </p>
            <div className="grid gap-3">
              {quickInfo.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-300">
                      <Icon icon={item.icon} className="text-xl" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium uppercase tracking-[0.26em] text-amber-200/60">
                        {item.title}
                      </p>
                      <p className="text-sm leading-6 text-stone-200">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2 lg:justify-end">
              <a
                href="#"
                aria-label="Instagram"
                className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-stone-200 transition hover:bg-white/12 hover:text-white"
              >
                <Icon icon="mdi:instagram" className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-stone-200 transition hover:bg-white/12 hover:text-white"
              >
                <Icon icon="mdi:facebook" className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-stone-200 transition hover:bg-white/12 hover:text-white"
              >
                <Icon icon="ic:baseline-tiktok" className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-4 text-sm text-stone-400 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>(c) 2026 Cafi. Crafted for coffee, comfort, and connection.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span>Freshly brewed daily</span>
            <span className="hidden h-1 w-1 rounded-full bg-stone-500 sm:inline-block" />
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
