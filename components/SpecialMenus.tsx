import { specialMenus } from "@/constants";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const menuIcons = [
  "mdi:pizza",
  "mdi:cake-variant",
  "mdi:food-outline",
  "mdi:cup-outline",
];

const SpecialMenus = () => {
  return (
    <section className="cafe-shell">
      <div className="rounded-[2.5rem] border border-amber-100/70 bg-linear-to-br from-white/85 via-orange-50/80 to-amber-100/65 px-6 py-10 shadow-[0_25px_70px_-35px_rgba(102,61,28,0.45)] dark:border-white/10 dark:bg-[linear-gradient(145deg,rgba(34,22,16,0.95),rgba(55,34,22,0.92),rgba(26,18,14,0.96))] dark:shadow-[0_28px_80px_-35px_rgba(0,0,0,0.8)] sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.4em] text-amber-800/70 dark:text-amber-200/70">
              Special menus
            </p>
            <h2 className="section-title">
              Crowd-pleasers with a polished cafe twist.
            </h2>
            <p className="text-base leading-7 text-stone-700 dark:text-stone-300">
              From comfort food staples to refreshing drinks, these favorites are
              styled to look indulgent and priced for a real cafe audience in Ethiopia.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm text-stone-700 dark:border-white/10 dark:bg-white/8 dark:text-stone-200">
            <Icon icon="solar:star-fall-bold" className="text-amber-600 dark:text-amber-300" />
            <span>Chef-picked highlights</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {specialMenus.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 py-0 shadow-[0_18px_45px_-30px_rgba(90,55,20,0.6)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_-25px_rgba(90,55,20,0.65)] dark:border-white/10 dark:bg-white/6 dark:shadow-[0_24px_70px_-35px_rgba(0,0,0,0.9)]"
            >
              <CardHeader className="relative p-0">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    loading="eager"
                    className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-stone-950/75 via-stone-950/20 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/85 px-3 py-2 text-sm font-medium text-stone-900 backdrop-blur-md dark:bg-white/10 dark:text-stone-100">
                    <Icon icon={menuIcons[index]} className="text-lg text-amber-700 dark:text-amber-300" />
                    <span>Popular pick</span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-[minmax(0,1fr)_8.2rem] items-center gap-3 text-white">
                    <CardTitle className="pr-1 font-heading text-3xl leading-[0.92] font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                      {item.name}
                    </CardTitle>
                    <div className="flex items-center justify-center gap-2 rounded-[2rem] bg-amber-400 px-1 py-1 text-stone-950 shadow-[0_18px_35px_-20px_rgba(245,158,11,0.9)]">
                      <span className="font-heading text-[2rem] leading-none font-semibold">
                        {item.price}
                      </span>
                      <span className="pt-2 text-[0.8rem] font-semibold uppercase tracking-[0.28em] text-stone-950/90">
                        ETB
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 px-6 py-6">
                <p className="text-sm leading-7 text-stone-600 dark:text-stone-300">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialMenus;
