const PLACEHOLDER = "/placeholder.svg";

const logos = [
  "logo1.png",
  "logo2.png",
  "logo3.png",
  "logo4.png",
  "logo5.png",
  "logo6.png",
  "logo7.png",
] as const;

const LogoItem = ({ name }: { name: string }) => (
  <div className="marquee__item">
    {/* Falls back to placeholder if the PNG isn't present yet */}
    <img
      src={`/logos/${name}`}
      alt={name}
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        if (target.src.endsWith(name)) target.src = PLACEHOLDER;
      }}
      className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
      loading="lazy"
      decoding="async"
    />
  </div>
);

const LogoMarquee = () => {
  const track = [...logos, ...logos];
  return (
    <section className="py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-muted-foreground mb-3 md:mb-4">Trusted by OGs</p>
        <div className="marquee" aria-label="partner-logos-marquee">
          <div className="marquee__track" style={{ ['--duration' as any]: '40s' }}>
            {track.map((name, idx) => (
              <LogoItem key={`${name}-${idx}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;



