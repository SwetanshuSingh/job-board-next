import { BadgeDollarSignIcon, Clock, TrendingUp } from "lucide-react";
import FilterBadge from "@/components/filter-badge";

export default function ExplorePage() {
  return (
    <main className="w-full flex flex-col px-16 py-8">
      <section className="w-full flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-200">
          Explore Jobs
        </h2>

        <div className="flex justify-start items-center gap-4">
          <FilterBadge text="Most Hired">
            <TrendingUp className="text-gray-300" size={18} />
          </FilterBadge>

          <FilterBadge text="Newest">
            <Clock className="text-gray-300" size={18} />
          </FilterBadge>

          <FilterBadge text="Most Pay">
            <BadgeDollarSignIcon className="text-gray-300" size={18} />
          </FilterBadge>
        </div>
      </section>
    </main>
  );
}
