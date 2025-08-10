import { TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ResultsSection = () => {
  const metrics = [
    { target: 250, suffix: "M+", label: "Impressions Generated" },
    { target: 125, suffix: "M+", label: "Global Influencers Reach" },
    { target: 4, suffix: "M+", label: "Followers Gained" },
    { target: 7, suffix: " Years", label: "Of Marketing Experience" },
    { target: 20000, suffix: "+", label: "Content Pieces Produced" },
    { target: 3000, suffix: "+", label: "Web3 Influencers/KOLs" },
  ] as const;

  const [values, setValues] = useState<number[]>(() => metrics.map(() => 0));
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let started = false;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // start only when majority of section is visible to the user
        if (entry.intersectionRatio >= 0.6 && !started) {
          started = true;
          obs.unobserve(el);
          const durationMs = 1600;
          const start = performance.now();
          const startVals = metrics.map(() => 0);
          const raf = () => {
            const t = (performance.now() - start) / durationMs;
            const progress = Math.min(1, t);
            setValues(
              metrics.map((m, i) => Math.floor(startVals[i] + (m.target - startVals[i]) * progress))
            );
            if (progress < 1) requestAnimationFrame(raf);
          };
          requestAnimationFrame(raf);
        }
      },
      { threshold: 0.6, rootMargin: "0px 0px -20% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const outcomes = [
    "Increased TVL",
    "Improved Brand Trust", 
    "Viral Community Growth",
    "Higher ROI",
    "Better User Retention",
    "Deeper Market Penetration"
  ];

  return (
    <section id="results" ref={sectionRef as any} className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white/90 shadow-[0_0_20px_rgba(124,58,237,0.25)]">Our Results</span>
        </div>
        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-center mb-10">
          Our <span className="italic font-normal">proven strategies</span> that drive real results!
        </h2>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-8 md:mb-10">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-8 text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                {`${values[index].toLocaleString()}${metric.suffix}`}
              </div>
              <div className="text-white/70 text-sm md:text-base">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Optional outcomes removed to match reference minimal layout */}
      </div>
    </section>
  );
};

export default ResultsSection;