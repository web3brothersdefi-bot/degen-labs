const PartnersSection = () => {
  return (
    <section className="py-14 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white/90 shadow-[0_0_20px_rgba(124,58,237,0.25)]">DegenLabs Expertise</span>
        </div>

        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-center mb-10">
          This is how we can <span className="italic font-normal">supercharge</span> your Growth!
        </h2>

        {/* Expertise cards - 3 rows like reference */}
        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 center-gradient-card backdrop-blur-md p-10 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-3">Influencer/KOL Marketing</h3>
            <p className="text-white/85 text-lg md:text-xl max-w-3xl mx-auto mb-6">We provide exclusive access to a network of 3000+ handpicked KOLs which we have built over 4 years. Additionally, we offer support with..</p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
              <div>⭐ Global/Regional KOL Collaboration</div>
              <div>⭐ Volume Generation Campaigns</div>
              <div>⭐ Education/Ambassador Grants</div>
              <div>⭐ Twitter Shillers/Raiders</div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 center-gradient-card backdrop-blur-md p-10 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-3">Community Growth Management</h3>
            <p className="text-white/85 text-lg md:text-xl max-w-3xl mx-auto mb-6">There is no Web3 without Communities. Our expert team will help you create and grow a loyal community that perfectly fits your ethos.</p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
              <div>⭐ IRL Events and Hackathons</div>
              <div>⭐ Podcasts | AMAs & X Spaces</div>
              <div>⭐ Social Media Management</div>
              <div>⭐ Regional Community Packages</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-white/10 center-gradient-card backdrop-blur-md p-10 text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3">GTM Strategy</h3>
              <p className="text-white/85 text-lg">We design, develop & execute everything from A to Z, presenting it in the most compelling way possible! Our tailor-made strategies are crafted specifically for your unique needs!</p>
            </div>
            <div className="rounded-3xl border border-white/10 center-gradient-card backdrop-blur-md p-10 text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3">Press Release</h3>
              <p className="text-white/85 text-lg">With over 100 media partners, we run Top campaigns across 100+ media outlets. From Tier 1 publications to local media, we reach markets globally!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;