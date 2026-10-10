"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Mark } from "@/components/mark";
import type { Locale } from "@/lib/dictionary";

export function HeaderLockup({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const [cycle, setCycle] = useState(0);
  const openRef = useRef(false);

  useEffect(() => {
    const header = document.querySelector(".site-header");

    const apply = (next: boolean) => {
      if (next && !openRef.current) {
        setCycle((value) => value + 1);
      }
      openRef.current = next;
      setOpen(next);
    };

    let observer: IntersectionObserver | undefined;
    let hero: Element | null = null;

    const watch = () => {
      const nextHero = document.querySelector(".hero");
      if (!nextHero) {
        observer?.disconnect();
        observer = undefined;
        hero = null;
        apply(true);
        return;
      }
      if (nextHero === hero && observer) return;
      hero = nextHero;
      observer?.disconnect();
      const height = Math.round(header?.getBoundingClientRect().height ?? 0);
      observer = new IntersectionObserver(
        ([entry]) => apply(!entry.isIntersecting),
        { rootMargin: `-${height}px 0px 0px 0px`, threshold: 0 },
      );
      observer.observe(nextHero);
    };

    const onResize = () => {
      hero = null;
      watch();
    };

    watch();
    window.addEventListener("resize", onResize);
    const mutations = new MutationObserver(watch);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutations.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <Link href={`/${lang}`} className="flex items-center text-paper">
      <span className={open ? "lockup-mark is-open" : "lockup-mark"}>
        <span className="lockup-mark-clip">
          <Mark
            key={cycle}
            draw={open}
            className="header-mark h-11 w-auto text-cyan md:h-16"
          />
        </span>
      </span>
      <span className="whitespace-nowrap text-[15px] font-medium leading-none tracking-[-0.03em] md:text-[1.375rem]">
        Pan od zlewów
      </span>
    </Link>
  );
}
