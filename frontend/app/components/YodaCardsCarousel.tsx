"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function YodaCardsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPos = 0;

    const animate = () => {
      if (!container) return;

      scrollPos += 0.7; // speed
      container.scrollLeft = scrollPos;

      // reset for infinite seamless loop
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // IMAGE-ONLY YODA CARDS
  const cards = [
    "/yoda/card1.jpg",
    "/yoda/card2.jpg",
    "/yoda/card3.jpeg",
    "/yoda/card4.jpeg",
    "/yoda/card5.jpeg",
    "/yoda/card6.jpeg",
    "/yoda/card7.jpeg",
    "/yoda/card8.jpg",
  ];

  const loopCards = [...cards, ...cards];

  return (
    <div className="w-full overflow-hidden py-16">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden whitespace-nowrap px-4"
      >
        {loopCards.map((img, idx) => (
          <div
            key={idx}
            className="min-w-[260px] md:min-w-[300px] lg:min-w-[340px] h-[420px]
                       rounded-3xl overflow-hidden shadow-xl flex-shrink-0
                       transform rotate-[-3deg] hover:rotate-0 transition-all duration-300"
          >
            <Image
              src={img}
              alt={`yodacard-${idx}`}
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
