"use client";

import { type RefObject, useEffect, useState } from "react";

type UseInViewOnceOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useInViewOnce<T extends Element>(
  ref: RefObject<T | null>,
  options: UseInViewOnceOptions = {},
): boolean {
  const { threshold = 0.15, rootMargin = "0px 0px -8% 0px" } = options;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [inView, ref, rootMargin, threshold]);

  return inView;
}
