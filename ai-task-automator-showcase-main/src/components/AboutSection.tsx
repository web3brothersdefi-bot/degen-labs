const AboutSection = () => {
  return (
    <section id="about" className="py-14 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {/* Pill intro like the reference */}
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 shadow-[0_0_20px_rgba(124,58,237,0.25)] animate-fade-in-up">
            Introducing Degen Labs
          </span>
        </div>

        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-center mb-8 animate-fade-in-up">
          You’ve built an <span className="italic font-normal">amazing</span> Web3 product
        </h2>

        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <p className="text-lg md:text-xl text-white/80">
            but it’s not getting the attention it deserves.
          </p>
          <p className="text-lg md:text-xl text-white/80">
            Now, you need skilled Web3 marketing experts who can drive real results!
          </p>
          <p className="text-2xl md:text-3xl text-white/85 mt-4">
            That’s where <span className="gradient-trustless font-semibold not-italic">Degen Labs</span> comes in
          </p>
          <p className="text-base md:text-lg text-white/60">
            In Web3, “Degen” is a badge of boldness. We turn that energy into sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;