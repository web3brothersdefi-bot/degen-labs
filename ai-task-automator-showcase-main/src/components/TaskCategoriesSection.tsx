// Success Metrics Section with central success.svg and floating badges
const TaskCategoriesSection = () => {
  const chips = [
    { text: "Trading Volumes", top: "5%", left: "14%", delay: 0 },
    { text: "User Acquisition & Retention", top: "5%", right: "14%", delay: 0.2 },
    { text: "TVL/Liquidity", top: "26%", left: "8%", delay: 0.3 },
    { text: "Brand Awareness", top: "26%", right: "8%", delay: 0.15 },
    { text: "Community Expansion", top: "50%", left: "2%", delay: 0.35 },
    { text: "Increased ROI", top: "50%", right: "2%", delay: 0.4 },
    { text: "Brand Authority & Credibility", top: "76%", left: "8%", delay: 0.5 },
    { text: "Global/Regional Market Penetration", top: "76%", right: "8%", delay: 0.45 },
  ];

  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white/90 shadow-[0_0_20px_rgba(124,58,237,0.25)]">Success Metrics</span>
        </div>

        <h2 className="text-center text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 md:mb-6">
          Best <span className="italic font-normal">teams partner</span> with us to supercharge
        </h2>

        <div className="relative max-w-5xl mx-auto mt-4 md:mt-8 pb-24 md:pb-24 lg:pb-28">
          {/* Floating chips on all devices */}
          {chips.map((c, i) => (
            <div
              key={i}
              className="absolute z-10 chip-badge animate-float"
              style={{ top: c.top as string, left: c.left as any, right: c.right as any, animationDelay: `${c.delay}s` }}
            >
              {c.text}
            </div>
          ))}

          {/* Central success image */}
          <div className="relative z-0 flex items-center justify-center">
            <img src="/success.svg" alt="success" className="mx-auto h-56 sm:h-64 md:h-[22rem] lg:h-[26rem] drop-shadow-[0_0_40px_rgba(124,58,237,0.25)] pointer-events-none select-none" />
          </div>

          {/* No separate mobile list; chips float around statue on all sizes */}
        </div>
      </div>
    </section>
  );
};

export default TaskCategoriesSection;