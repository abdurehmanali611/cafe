"use client";

import { NavbarContent } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="cafe-shell sticky top-3 z-50">
      <div className="flex flex-col gap-5 rounded-[2rem] border border-amber-200/60 bg-[linear-gradient(135deg,rgba(255,250,240,0.96),rgba(245,230,211,0.88))] px-4 py-4 shadow-[0_24px_60px_-28px_rgba(84,53,30,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(36,24,18,0.92),rgba(20,14,12,0.86))] dark:shadow-[0_24px_70px_-30px_rgba(0,0,0,0.8)] sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/Home" className="flex items-center gap-3">
          <Avatar className="size-12 ring-2 ring-amber-200/80 shadow-lg shadow-amber-950/10 dark:ring-amber-300/30">
            <AvatarImage src="/assets/logo.png" alt="Cafi logo" />
            <AvatarFallback className="bg-amber-100 text-amber-900 dark:bg-amber-300/20 dark:text-amber-100">C</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-amber-800/70 dark:text-amber-200/65">
              Addis Taste
            </p>
            <h2 className="font-heading text-3xl font-semibold leading-none text-stone-900 dark:text-stone-50">
              Cafi
            </h2>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-2 lg:gap-3">
          {NavbarContent.map((item) => {
            const href = `/${item.name}`;
            const isActive = pathname === href;

            return (
              <Link
                key={item.id}
                href={href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:text-base ${
                  isActive
                    ? "bg-stone-900 text-white shadow-lg shadow-stone-900/20 dark:bg-amber-400 dark:text-stone-950 dark:shadow-amber-500/10"
                    : "text-stone-700 hover:bg-white/80 hover:text-stone-950 dark:text-stone-200 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-between gap-3 sm:justify-end">
          <div className="hidden rounded-full border border-amber-300/50 bg-amber-50/70 px-4 py-2 text-sm text-stone-700 md:flex md:items-center md:gap-2 dark:border-amber-200/15 dark:bg-white/8 dark:text-stone-200">
            <Icon icon="solar:cup-hot-bold" className="text-lg text-amber-700 dark:text-amber-300" />
            <span>Freshly brewed daily</span>
          </div>
          <Button
            size="lg"
            className="cursor-pointer rounded-full bg-stone-900 px-6 text-white shadow-lg shadow-amber-950/20 hover:bg-amber-700 dark:bg-amber-400 dark:text-stone-950 dark:hover:bg-amber-300"
            onClick={() => router.push("/Contact")}
          >
            <Icon icon="mdi:location-on-outline" className="text-lg" />
            <span>Find Us</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
