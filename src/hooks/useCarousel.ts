import { useState, useRef, useEffect } from 'react';

export const useCarousel = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const next = () => {
    if (ref.current) {
      const container = ref.current;
      const slide = container.querySelector('.carousel-slide, .whatsapp-carousel-slide');
      const slideWidth = slide?.clientWidth || container.offsetWidth;
      container.scrollLeft += slideWidth;
    }
  };

  const prev = () => {
    if (ref.current) {
      const container = ref.current;
      const slide = container.querySelector('.carousel-slide, .whatsapp-carousel-slide');
      const slideWidth = slide?.clientWidth || container.offsetWidth;
      container.scrollLeft -= slideWidth;
    }
  };

  const onScroll = () => {
    if (ref.current) {
      const container = ref.current;
      const scrollLeft = container.scrollLeft;
      const slide = container.querySelector('.carousel-slide, .whatsapp-carousel-slide');
      const slideWidth = slide?.clientWidth || container.offsetWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      setIndex(newIndex);
    }
  };

  const goTo = (newIndex: number) => {
    if (ref.current) {
      const container = ref.current;
      const slide = container.querySelector('.carousel-slide, .whatsapp-carousel-slide');
      const slideWidth = slide?.clientWidth || container.offsetWidth;
      container.scrollLeft = newIndex * slideWidth;
      setIndex(newIndex);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.shiftKey && ref.current) {
        e.preventDefault();
        ref.current.scrollLeft += e.deltaY;
      }
    };

    const el = ref.current;
    el?.addEventListener('wheel', handleWheel, { passive: false });
    return () => el?.removeEventListener('wheel', handleWheel);
  }, []);

  return { index, ref, next, prev, onScroll, goTo };
};
