import { Icon } from "@iconify/react";
import Image from "next/image";

const highlights = [
  {
    icon: "solar:cup-hot-bold",
    title: "Crafted daily",
    description:
      "Small-batch coffee, fresh bakes, and plates prepared with care from open to close.",
  },
  {
    icon: "solar:sofa-2-bold",
    title: "A room with mood",
    description:
      "Soft lighting, warm textures, and comfortable corners designed for long stays.",
  },
  {
    icon: "solar:users-group-rounded-bold",
    title: "People first",
    description:
      "We welcome solo coffee runs, casual meetings, and memorable catch-ups with friends.",
  },
];

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "500+", label: "Happy regulars" }
];

const AboutComponent = () => {
  return (
    <section className="cafe-shell py-3 sm:py-4">
      <div className="rounded-[2.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(34,22,16,0.96),rgba(54,34,24,0.92),rgba(20,14,12,0.96))] p-6 shadow-[0_30px_90px_-35px_rgba(0,0,0,0.85)] sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-5">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/15 bg-white/6 px-4 py-2 text-sm text-amber-100/80">
                <Icon
                  icon="solar:clapperboard-open-bold"
                  className="text-amber-300"
                />
                <span>About Cafi</span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.42em] text-amber-200/65">
                  Our story
                </p>
                <h2 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Built for slow coffee, good food, and conversations worth
                  staying for.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
                  Cafi brings together the warmth of a neighborhood cafe and the
                  polish of a modern social space. We focus on quality
                  ingredients, calm atmosphere, and the kind of service that makes
                  people want to come back tomorrow.
                </p>
              </div>
            </div>
          </div>

          <div className="grid content-start gap-5">
            <div className="relative h-91 overflow-hidden rounded-[2.2rem] border border-white/10 lg:min-h-64">
              <Image
                src="/assets/about.jpg"
                alt="Inside Cafi"
                fill
                loading="eager"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,10,8,0.12),rgba(15,10,8,0.72))]" />
              <div className="absolute inset-x-5 bottom-5 rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-amber-200/75">
                  Signature atmosphere
                </p>
                <p className="mt-3 font-heading text-3xl font-semibold text-white">
                  Warm interiors, intimate corners, and comfort in every detail.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <div className="grid h-fit gap-4 sm:grid-cols-2">
                {stats.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex h-full min-h-36 flex-col items-center justify-center rounded-[1.75rem] border px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${
                      index === stats.length - 1
                        ? "border-amber-300/20 bg-[linear-gradient(145deg,rgba(245,158,11,0.16),rgba(255,255,255,0.06))]"
                        : "border-white/10 bg-white/7"
                    }`}
                  >
                    <p className={`font-heading font-semibold text-amber-300 ${index === stats.length - 1 ? "text-5xl" : "text-4xl"}`}>
                      {item.value}
                    </p>
                    <p className={`mt-2 text-stone-300 ${index === stats.length - 1 ? "text-base" : "text-sm"}`}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-[1.75rem] border border-white/10 bg-white/6 p-4 backdrop-blur-md"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-300">
                <Icon icon={item.icon} className="text-2xl" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-stone-100">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-stone-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
