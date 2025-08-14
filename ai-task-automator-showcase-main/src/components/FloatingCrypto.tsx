import React from "react";

type FloatingIcon = {
  src: string;
  alt: string;
  className: string;
  delaySec?: number;
};

const floatingIcons: FloatingIcon[] = [
  // Position coins exactly like reference image
  { src: "/crypto/ton.svg", alt: "TON", className: "top-32 left-[8%] w-16 md:w-20 rotate-[6deg] coin-glow-ton", delaySec: 0.2 },
  { src: "/crypto/eth.svg", alt: "Ethereum", className: "bottom-16 left-[12%] w-16 md:w-20 -rotate-[10deg] coin-glow-eth", delaySec: 0.6 },
  { src: "/crypto/btc.svg", alt: "Bitcoin", className: "bottom-16 right-[12%] w-16 md:w-20 rotate-[10deg] coin-glow-btc", delaySec: 1.0 },
  { src: "/crypto/sol.svg", alt: "Solana", className: "top-32 right-[8%] w-16 md:w-20 rotate-[8deg] coin-glow-sol", delaySec: 1.4 },
];

export function FloatingCrypto(): JSX.Element {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]">
      {floatingIcons.map((icon, index) => (
        <img
          key={`${icon.alt}-${index}`}
          src={icon.src}
          alt={icon.alt}
          className={`absolute select-none animate-float ${icon.className}`}
          style={{ animationDelay: `${icon.delaySec ?? 0}s` }}
          aria-hidden
        />
      ))}
    </div>
  );
}

export default FloatingCrypto;


