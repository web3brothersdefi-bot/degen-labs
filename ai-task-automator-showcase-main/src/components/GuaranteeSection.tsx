const GuaranteeSection = () => {
  return (
    <section id="promise" className="py-16 md:py-20 px-4 scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-8">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white/90 shadow-[0_0_20px_rgba(124,58,237,0.25)]">
            The Degen Labs Guarantee
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Copy */}
          <div>
            <h2 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Our Rock-Solid <span className="font-cursive italic">Promise</span>
            </h2>
            <div className="space-y-6 text-white/85 text-lg md:text-xl">
              <p>
                At Degen Labs, we deliver impactful results through personalized marketing campaigns
                customized to your unique objectives based on the latest trends.
              </p>
              <p>
                With our proven success and deep market knowledge, we ensure your campaigns reach the
                right audience.
              </p>
            </div>
            <p className="mt-10 text-white/90 text-xl md:text-2xl">
              <em>Choose us to Grow your brand with Trust.</em>
            </p>
          </div>
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/rock.png"
              alt="Rock crystal"
              className="max-w-full w-[520px] drop-shadow-[0_0_50px_rgba(124,58,237,0.35)]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;


