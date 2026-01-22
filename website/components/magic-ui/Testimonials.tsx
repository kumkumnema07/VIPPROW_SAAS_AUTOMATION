/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

const reviews = [
  {
    name: "Belleza Beauty & Makeup Academy",
    username: "Client Dep. 1",
    body: "Vipprow’s ad strategy gave us a strong boost in leads and conversions.<span>What we liked most is their transparency and performance tracking approach.</span> We could clearly see how the digital marketing investment was converting into real inquiries.",

 
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "The Mango Tree Staycation",
    username: "Client Dep. 2",
    body: "We wanted digital marketing that looks premium and feels authentic — and Vipprow delivered exactly that. <span>The content they created was aligned with our brand vibe, and the overall strategy helped us build strong credibility online.</span> Vipprow doesn’t just post content — they build brand value.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Odyssefy | Travel Agency",
    username: "Client Dep. 3",
    body: "We had a smooth onboarding experience with Vipprow.<span> Their team guided us step-by-step on what access and assets were required and started execution quickly.</span> We noticed improvement in our brand presentation and engagement after their content optimization",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Rudrakshawal",
    username: "Rudrakshawala",
    body: "Vipprow handled <span>our Meta & Google Ads campaigns in a very professional manner.</span> From proper targeting to creative design and campaign optimization, everything was done with a performance mindset.",
    img: "https://avatar.vercel.sh/jack",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-full cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-96",
        // light styles
        "border-[#27272A] bg-[#27272A] hover:bg-[#27272A]",
        // dark styles
        "dark:border-[#27272A] dark:bg-[#27272A] dark:hover:bg-[#27272A]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <blockquote
            className="
                mb-5 text-sm font-heading
                text-zinc-200
                [&_span]:text-blue-500
                [&_span]:font-medium
              "
            dangerouslySetInnerHTML={{ __html: body }}
          />

          <div className="flex items-center gap-x-2">
            <img
              className="rounded-full"
              width="32"
              height="32"
              alt=""
              src={img}
            />
            <div>
              <figcaption className="text-sm font-medium dark:text-white font-heading">
                {name}
              </figcaption>
              <p className="text-xs font-medium dark:text-white/40 font-heading mt-1">
                {username}
              </p>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export function TestimonialMarquee() {
  return (
    <div className="relative flex h-[600px] w-full md:flex-row items-center justify-center overflow-hidden bg-black my-20 py-12 md:py-22">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  );
}
