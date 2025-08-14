import React, { useEffect, useRef, useState } from 'react';

const MeetingBookingSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [widgetReady, setWidgetReady] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const loadCalendly = () => {
      if (widgetReady) return;
      const calendlyAvailable = typeof (window as any).Calendly !== 'undefined';
      const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]') as HTMLScriptElement | null;
      if (calendlyAvailable) {
        setWidgetReady(true);
        return;
      }
      if (existing) {
        existing.addEventListener('load', () => setWidgetReady(true), { once: true });
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setWidgetReady(true);
      document.body.appendChild(script);
    };

    // Start loading Calendly script immediately after mount to avoid long delays later
    loadCalendly();

    // Only use IntersectionObserver to delay widget initialization until near viewport
    if ('IntersectionObserver' in window && containerRef.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidgetReady((ready) => {
              if (!ready) loadCalendly();
              return ready;
            });
            if (observer) observer.disconnect();
          }
        });
      }, { rootMargin: '1000px 0px' });
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [widgetReady]);

  useEffect(() => {
    if (!widgetReady || initialized || !containerRef.current) return;
    let canceled = false;
    const tryInit = () => {
      const calendly = (window as any).Calendly;
      if (calendly && typeof calendly.initInlineWidget === 'function' && containerRef.current && !canceled) {
        containerRef.current.innerHTML = '';
        calendly.initInlineWidget({
          url: 'https://calendly.com/web3brothersdefi/30min',
          parentElement: containerRef.current,
          prefill: {},
          utm: {},
        });
        setInitialized(true);
        return true;
      }
      return false;
    };

    if (!tryInit()) {
      const interval = window.setInterval(() => {
        if (tryInit()) {
          window.clearInterval(interval);
        }
      }, 100);
      return () => {
        canceled = true;
        window.clearInterval(interval);
      };
    }
  }, [widgetReady, initialized]);

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-transparent">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Top Section - Action Time Button and Main Heading */}
        <div className="mb-16 md:mb-20">
          {/* Action Time Button */}
          <div className="inline-flex items-center px-6 py-3 bg-transparent border border-purple-400 rounded-full mb-8">
            <span className="text-white font-medium">Action Time</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Let's Get You <span className="font-cursive italic">Growing!</span>
          </h1>
        </div>
        
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start text-left">
          
          {/* Left Side - Meeting Benefits */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-normal text-white leading-tight mb-8">
              What do you get on this meeting?
            </h2>
            
            <div className="space-y-6">
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <span className="text-2xl md:text-3xl font-bold text-white">01</span>
                  <p className="text-white text-lg md:text-xl leading-relaxed">
                    Question and answer: Deeply understanding your goals and objective
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <span className="text-2xl md:text-3xl font-bold text-white">02</span>
                  <p className="text-white text-lg md:text-xl leading-relaxed">
                    Discover the most efficient path from where you are to where you want to be.
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <span className="text-2xl md:text-3xl font-bold text-white">03</span>
                  <p className="text-white text-lg md:text-xl leading-relaxed">
                    Customized marketing suggestions by our Web3 marketing specialist
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <span className="text-2xl md:text-3xl font-bold text-white">04</span>
                  <p className="text-white text-lg md:text-xl leading-relaxed">
                    A nice laugh together
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Calendly Widget */}
           <div ref={containerRef} className="bg-white rounded-2xl p-6 shadow-2xl" style={{ minWidth: '320px', height: '700px' }}>
            {!widgetReady && (
              <div className="flex items-center justify-center h-full text-gray-600">
                <div className="loader" aria-label="Loading scheduler" role="status">
                  <div className="loader__bar"></div>
                  <div className="loader__bar"></div>
                  <div className="loader__bar"></div>
                  <div className="loader__bar"></div>
                  <div className="loader__bar"></div>
                  <div className="loader__ball"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingBookingSection;
