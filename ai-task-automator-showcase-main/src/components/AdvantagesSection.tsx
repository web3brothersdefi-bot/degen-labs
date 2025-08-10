const leftItems = [
  "Jack of all trades, master of none",
  "Silently outsource to freelancers",
  "Slow communication",
  "Shoots darts in dark",
  "One package fits all",
];

const rightItems = [
  "Specialization in Web3",
  "Full in-house expert team",
  "Constant proactive communication",
  "Use data to save money and time",
  "Create 100% customisable package",
];

const AdvantagesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white/90">Degen Labs Advantages</span>
        </div>
        <h2 className="text-center text-4xl md:text-6xl font-semibold mb-12">
          Degen Labs <span className="text-white line-through">Clients</span> <span className="font-cursive italic">Frens</span> deserves the best!
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left card */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-8">
            <h3 className="text-2xl font-semibold mb-6">Other firm</h3>
            <ul className="space-y-4 text-white/85">
              {leftItems.map((t, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="inline-block w-5 h-5 rounded-full bg-red-500/30 text-red-300 text-sm leading-5 text-center">×</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Right card with gradient */}
          <div className="rounded-2xl border border-white/10 p-8 corner-gradient-card">
            <h3 className="text-2xl font-semibold mb-6">Degen Labs</h3>
            <ul className="space-y-4 text-white/90">
              {rightItems.map((t, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="inline-block w-5 h-5 rounded-full bg-violet-500/30 text-violet-200 leading-5 text-center">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;


