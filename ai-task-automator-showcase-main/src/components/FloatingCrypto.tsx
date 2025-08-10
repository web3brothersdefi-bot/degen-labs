import React from "react";

type FloatingIcon = {
  src: string;
  alt: string;
  className: string;
  delaySec?: number;
};

const floatingIcons: FloatingIcon[] = [
  // One instance per brand, slightly smaller for a cleaner look
  { src: "/crypto/btc.svg", alt: "Bitcoin", className: "top-28 left-[6%] w-16 md:w-22 rotate-[10deg] coin-glow-btc", delaySec: 0.2 },
  { src: "/crypto/eth.svg", alt: "Ethereum", className: "top-14 right-[8%] w-16 md:w-22 -rotate-[10deg] coin-glow-eth", delaySec: 0.6 },
  { src: "/crypto/sol.svg", alt: "Solana", className: "bottom-20 right-[14%] w-14 md:w-20 rotate-[8deg] coin-glow-sol", delaySec: 1.0 },
  { src: "/crypto/ton.svg", alt: "TON", className: "bottom-24 left-[10%] w-14 md:w-20 rotate-[6deg] coin-glow-ton", delaySec: 1.4 },
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


