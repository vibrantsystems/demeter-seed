"use client";

export default function DemoNoticeBanner() {
  return (
    <div
      className="
        fixed
        top-[8rem]   /* header top (1.5rem) + header height (5rem) */
        left-1/2
        -translate-x-1/2
        z-[40]
        w-[calc(100%-16px)]
        max-w-5xl
        backdrop-blur-xl
        bg-amber-500/20
        border border-amber-400/40
        text-amber-200
        text-sm
        px-4
        py-2
        rounded-full
        shadow-lg
        text-center
      "
    >
      <strong>Demo Notice:</strong> This website is a demonstration platform
      developed by Vibrant Systems to showcase a proposed digital solution for
      Demeter Seed. Product information and pricing are for illustrative
      purposes only and do not represent an official offer.
    </div>
  );
}
