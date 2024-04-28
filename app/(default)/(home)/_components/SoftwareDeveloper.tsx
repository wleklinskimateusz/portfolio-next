"use client";

import { useEffect, useRef, useState } from "react";

type SoftwareDeveloperProps = {
  titles: string[];
};
export const SoftwareDeveloper = ({ titles }: SoftwareDeveloperProps) => {
  const { title, spanRef } = useChangingTitle(titles);
  return (
    <div className="flex gap-2 font-serif text-2xl md:text-4xl">
      <div
        ref={spanRef}
        className="w-32 text-right text-primary transition-opacity duration-500 md:w-48"
      >
        {title}
      </div>{" "}
      <div className="underline">Developer</div>
    </div>
  );
};

function useChangingTitle(titles: string[]) {
  const [titleIdx, setTitleIdx] = useState(0);
  const spanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!spanRef.current) return;

    function changeTitleAndReappear() {
      setTitleIdx((prev) => (prev + 1) % titles.length);
      spanRef.current?.classList.remove("opacity-0");
    }
    function disappear() {
      spanRef.current?.classList.add("opacity-0");
    }

    const interval = setInterval(() => {
      disappear();

      const timeout = setTimeout(changeTitleAndReappear, 500);
      return () => clearTimeout(timeout);
    }, 2000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const title = titles[titleIdx];
  return { title, spanRef };
}
