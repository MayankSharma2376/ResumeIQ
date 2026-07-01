import HeroSection from "../components/dashboard/HeroSection";
import ATSScoreCard from "../components/dashboard/ScoreBadge";
import SummaryCard from "../components/dashboard/SummaryCard";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      <HeroSection name="Mayank" />

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* Left */}

        <div className="xl:col-span-1">

          <ATSScoreCard score={85} />

        </div>

        {/* Right */}

        <div className="xl:col-span-2">

         <SummaryCard summary="Your resume has a solid MERN Stack foundation and demonstrates good project experience. Adding cloud technologies and testing frameworks will make it more competitive for SDE roles."/>

        </div>

      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        Strength Card

        Missing Skills Card

      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        Suggestions Card

        Recent Resume Card

      </section>

    </div>
  );
}