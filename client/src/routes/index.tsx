import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { fetchFruits, FruitsSearchParams } from "../models/fruit.model";
import ErrorDisplay from "../components/shared/ErrorDisplay";
import LoadingDisplay from "../components/shared/LoadingDisplay";
import SegmentedControl from "../components/shared/SegmentedControl";

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

  return <div className="p-6 max-w-2xl mx-auto">HIHHI</div>;
}
