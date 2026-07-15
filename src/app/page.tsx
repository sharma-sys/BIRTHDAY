import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import SurpriseCard from "@/components/SurpriseCard";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-[#050505]">
      <Hero />
      <Timeline />
      <SurpriseCard />
      <div className="relative">
        <FinalCTA />
        <footer className="absolute bottom-4 left-0 w-full text-center z-20 pointer-events-none flex flex-col items-center gap-1">
          <p className="text-xs md:text-sm text-gray-600 uppercase tracking-widest">
            Made with gratitude by your team.
          </p>
          <a href="http://cms.mahakaushaltimes.com/" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-blue-600 hover:text-blue-400 hover:underline transition-colors pointer-events-auto">
            Publish the First Article
          </a>
        </footer>
      </div>
    </main>
  );
}
