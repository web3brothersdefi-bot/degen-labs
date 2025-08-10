import React, { useEffect, useState } from "react";
import { useIsFetching } from "@tanstack/react-query";

interface Props {
  delayMs?: number;
}

export default function GlobalLoaderOverlay({ delayMs = 700 }: Props) {
  const isFetching = useIsFetching();
  const [show, setShow] = useState(false);

  useEffect(() => {
    let t: number | undefined;
    if (isFetching > 0) {
      t = window.setTimeout(() => setShow(true), delayMs);
    } else {
      setShow(false);
    }
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [isFetching, delayMs]);

  if (!show) return null;

  return (
    <div className="loader-overlay" aria-hidden={false}>
      <div className="loader" role="status" aria-label="Loading" aria-live="polite">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    </div>
  );
}
