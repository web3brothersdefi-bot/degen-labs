type BenefitCard = { title: string; desc: string; imageSrc?: string };

const cardsTop: BenefitCard[] = [
  {
    title: "Experienced team",
    desc:
      "We live and breathe crypto marketing, with a passion for staying up-to-date on the latest trends and strategies",
    imageSrc: "/our%20benefits/level1.svg",
  },
  {
    title: "Custom packages",
    desc:
      "We make a custom package for your specific goals, making sure that you're getting the most for your $",
    imageSrc: "/our%20benefits/level2.png",
  },
  {
    title: "Scalable as you grow",
    desc:
      "Can't commit now? Work with us for a month and see if we're the right fit!",
    imageSrc: "/our%20benefits/level3.png",
  },
];

const cardsBottom: BenefitCard[] = [
  {
    title: "Cost and Time Saving",
    desc:
      "Hiring an in-house full‑time Marketing team is very expensive. By choosing Degen Labs experts you will save a month's worth of expenses, time, and effort!",
    imageSrc: "/our%20benefits/level4.png",
  },
  {
    title: "We take care of the daily grind",
    desc:
      "You focus on other high‑impact activities, while we handle our commitments!",
    imageSrc: "/our%20benefits/level5.png",
  },
  {
    title: "Transparent communication",
    desc:
      "We keep you in the loop with proactive updates, clear reports, and fast responses.",
    imageSrc: "/our%20benefits/level6.png",
  },
];

const Card = ({ title, desc, imageSrc }: BenefitCard) => (
  <div className="rounded-2xl border border-white/10 center-gradient-card p-6 md:p-8">
    {imageSrc && (
      <div className="mb-4 w-full h-20 sm:h-24 md:h-28 rounded-lg overflow-hidden flex items-center justify-center bg-black/20 p-2 md:p-3">
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          decoding="async"
          className="max-h-full w-auto object-contain"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            const triedSpace = el.dataset.triedSpace === 'true';
            const triedUpper = el.dataset.triedUpper === 'true';
            if (!triedSpace) {
              el.dataset.triedSpace = 'true';
              el.src = (el.src.includes('%20') ? el.src.replace('%20', ' ') : el.src.replace(' our ', ' our%20'));
              return;
            }
            if (!triedUpper) {
              el.dataset.triedUpper = 'true';
              el.src = el.src.replace(/\.png$/i, '.PNG');
              return;
            }
            el.src = '/placeholder.svg';
          }}
        />
      </div>
    )}
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <p className="text-white/80 leading-relaxed">{desc}</p>
  </div>
);

const OurBenefits = () => {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white/90">Our Benefits</span>
        </div>
        <h2 className="text-center text-white text-4xl md:text-6xl font-semibold mb-8 md:mb-10">
          Degen Labs Frens with <span className="font-cursive italic">Benefits</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-5 md:gap-6">
          {cardsTop.map((c) => (
            <Card key={c.title} title={c.title} desc={c.desc} imageSrc={c.imageSrc} />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-5 md:gap-6 mt-5 md:mt-6">
          {cardsBottom.map((c) => (
            <Card key={c.title} title={c.title} desc={c.desc} imageSrc={c.imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;


