"use client";

import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="cafe-shell">
      <div className="relative overflow-hidden rounded-[2.75rem] border border-white/40 bg-stone-950 text-white shadow-[0_30px_80px_-30px_rgba(36,20,8,0.75)]">
        <div className="absolute inset-0 bg-[url('/assets/background.jpg')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.32),transparent_28%),linear-gradient(120deg,rgba(17,10,5,0.88),rgba(17,10,5,0.5),rgba(146,64,14,0.35))]" />
        <div className="absolute -right-16 top-12 h-44 w-44 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-32 w-32 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative grid min-h-[78vh] items-end gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-14 lg:py-16">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-amber-100">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                Signature coffee and comfort food
              </span>
              <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-amber-50 backdrop-blur-md">
                Crafted for slow mornings and late conversations
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.45em] text-amber-200/80">
                Welcome to Cafi
              </p>
              <h1 className="font-heading text-5xl leading-[0.95] font-semibold sm:text-6xl lg:text-8xl">
                Bold flavor,
                <br />
                warm light,
                <br />
                unforgettable atmosphere.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-stone-200 sm:text-lg">
                Settle into a cafe experience that blends artisan drinks, fresh plates,
                and an inviting space built for dates, meetings, and quiet moments.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                size="lg"
                className="cursor-pointer rounded-full bg-amber-500 px-7 text-stone-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400"
                onClick={() => router.push("/Menu")}
              >
                <Icon icon="solar:cup-star-bold" className="text-lg" />
                <span>Explore Menu</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer rounded-full border-white/30 bg-white/10 px-7 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
                onClick={() => router.push("/Contact")}
              >
                <Icon icon="mdi:calendar-heart-outline" className="text-lg" />
                <span>Book a Table</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 self-center lg:justify-self-end">
            <div className="max-w-sm rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(18,12,10,0.86),rgba(36,24,18,0.78))] p-5 text-white shadow-[0_22px_50px_-26px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-100/75">
                    House favorite
                  </p>
                  <h3 className="mt-2 font-heading text-3xl font-semibold text-white">
                    Espresso Nights
                  </h3>
                </div>
                <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-stone-950">
                  Trending
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-stone-200">
                Rich coffee, soft lighting, and a menu designed for relaxed afternoons
                that stretch into memorable evenings.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-sm text-amber-100/70">Freshly baked</p>
                <p className="mt-2 text-3xl font-semibold">Daily</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-sm text-amber-100/70">Signature drinks</p>
                <p className="mt-2 text-3xl font-semibold">12+</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-sm text-amber-100/70">Cozy seating</p>
                <p className="mt-2 text-3xl font-semibold">All day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
