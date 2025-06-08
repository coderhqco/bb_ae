import HeroSection from "@/components/hero_section";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start bg-warning">
        <HeroSection />
      </main>
    </div>
  );
}
