import { Megaphone, AlignLeft, BookOpen, BarChart3, DollarSign, Gift } from "lucide-react";

const itemsTop = [
  {
    icon: Megaphone,
    title: "Fake KOL filter",
    desc:
      "90% of crypto influencer profiles are filled with fake followers that brands often can’t spot. With our 7 years of marketing experience, we filter out only genuine KOLs, so you don't waste your money.",
    gifSrc: "/why%20degen%20labs/search.gif",
  },
  {
    icon: AlignLeft,
    title: "Narrative makers",
    desc:
      "In the crypto world, the right narrative can make or break your project. We make sure to drive real results and success for you.",
    gifSrc: "/why%20degen%20labs/meteor-rain.gif",
  },
  {
    icon: BookOpen,
    title: "Powerful storytelling",
    desc:
      "As Steve Jobs said, “The most powerful person in the world is the storyteller.” The best Web2 and Web3 projects have great stories, and we excel at showcasing them.",
    gifSrc: "/why%20degen%20labs/book.gif",
  },
];

const itemsBottom = [
  {
    icon: BarChart3,
    title: "Data driven approach",
    desc:
      "We avoid the “spray and pray” approach. Instead, we recommend best KOLs based on data from previous campaigns, saving you money and maximizing impact.",
    gifSrc: "/why%20degen%20labs/line-chart.gif",
  },
  {
    icon: DollarSign,
    title: "Unbeatable prices",
    desc:
      "Thanks to our years of strong relationships and bulk buying power with KOLs, we provide the most unbeatable prices, that are hard to match without Degen Labs.",
    gifSrc: "/why%20degen%20labs/money-bag.gif",
  },
  {
    icon: Gift,
    title: "Free content",
    desc:
      "Our strong ties with KOLs sometimes allow us to secure free content posts for you, adding extra value to your campaign.",
    gifSrc: "/why%20degen%20labs/happy.gif",
  },
];

const WhyDegenLabs = () => {
  return (
    <section className="py-24 px-4 corner-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white/90">Why Degen Labs</span>
        </div>

        <h2 className="text-center text-white text-4xl md:text-6xl font-semibold leading-tight mb-6">
          Anyone can get you <span className="italic font-normal">influencers</span>,
        </h2>
        <p className="text-center text-white/85 text-lg md:text-xl max-w-4xl mx-auto">
          We’re so much more than that! Degen Labs is co-founded by growth-experts and leading KOLs
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {itemsTop.map((it, idx) => (
            <div key={idx} className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full border border-white/20 bg-black/40 overflow-hidden">
                {it.gifSrc ? (
                  <img src={it.gifSrc} alt={it.title} className="h-full w-full object-cover" />
                ) : (
                  <it.icon className="h-7 w-7 text-violet-400" />
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{it.title}</h3>
              <p className="text-white/80 leading-relaxed text-base md:text-lg">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {itemsBottom.map((it, idx) => (
            <div key={idx} className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full border border-white/20 bg-black/40 overflow-hidden">
                {it.gifSrc ? (
                  <img src={it.gifSrc} alt={it.title} className="h-full w-full object-cover" />
                ) : (
                  <it.icon className="h-7 w-7 text-violet-400" />
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{it.title}</h3>
              <p className="text-white/80 leading-relaxed text-base md:text-lg">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDegenLabs;


