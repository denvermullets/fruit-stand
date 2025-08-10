import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { fetchFruits, FruitsSearchParams } from "../models/fruit.model";
import ErrorDisplay from "../components/shared/ErrorDisplay";
import LoadingDisplay from "../components/shared/LoadingDisplay";
import FruitCard from "../components/FruitCard";
import SearchInput from "../components/SearchInput";
import SegmentedControl from "../components/SegmentedControl";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): FruitsSearchParams => {
    return {
      name: typeof search.name === "string" ? search.name : undefined,
      in_season: search.in_season !== undefined ? Boolean(search.in_season) : undefined,
      color: typeof search.color === "string" ? search.color : undefined,
    };
  },
  component: IndexComponent,
});

function IndexComponent() {
  const { name, color, in_season } = Route.useSearch();

  const { data, isLoading, error } = useQuery({
    queryKey: ["fruits", name, color, in_season],
    queryFn: () => fetchFruits({ name, color, in_season }),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  if (isLoading) return <LoadingDisplay />;
  if (error) return <ErrorDisplay error={error} />;

  return (
    <div className="flex flex-col max-w-3xl mx-auto">
      <div className="flex flex-row max-w-3xl gap-4 px-6">
        <SearchInput placeholder="Search by name" searchParam="name" currentValue={name || ""} />
        <SegmentedControl options={["In Season", "Out of Season"]} />
        {/* demo placeholders */}
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="p-6 max-w-3xl mx-auto flex flex-wrap gap-4">
        {data?.value.map((fruit) => {
          return <FruitCard name={fruit.name} colors={fruit.colors} key={fruit.name} />;
        })}
      </div>
    </div>
  );
}
