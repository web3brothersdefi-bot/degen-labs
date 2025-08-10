const BenefitsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white/90 shadow-[0_0_20px_rgba(124,58,237,0.25)]">Our Network</span>
        </div>
        <h2 className="text-center text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          We <span className="italic font-normal">empower</span> the leaders of tomorrow!
        </h2>
        <p className="text-center text-white/85 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          We connect with the most trusted voices in Web3 to amplify your brand. If they matter in the industry, we probably know them.
        </p>

        {/* Moving grey strips */}
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 strip-grey full-bleed">
            <div className="marquee-right flex items-center gap-10 sm:gap-16 px-4 sm:px-6 py-4 sm:py-5 text-white/90 text-xl sm:text-2xl md:text-3xl whitespace-nowrap" style={{ ['--duration' as any]: '14s' }}>
              {/* duplicate sequence for seamless loop */}
              <span>25+ Global Languages</span>
              <span>150M+ Web3 Reach</span>
              <span>25+ Global Languages</span>
              <span>150M+ Web3 Reach</span>
              <span>25+ Global Languages</span>
              <span>150M+ Web3 Reach</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 strip-grey full-bleed">
            <div className="marquee-right flex items-center gap-10 sm:gap-16 px-4 sm:px-6 py-4 sm:py-5 text-white/90 text-xl sm:text-2xl md:text-3xl whitespace-nowrap" style={{ ['--duration' as any]: '16s' }}>
              <span>6+ Social Platforms</span>
              <span>20+ Countries</span>
              <span>6+ Social Platforms</span>
              <span>20+ Countries</span>
              <span>6+ Social Platforms</span>
              <span>20+ Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;