import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { fetchFruits, FruitsSearchParams } from "../models/fruit.model";
import ErrorDisplay from "../components/shared/errorDisplay";
import LoadingDisplay from "../components/shared/LoadingDisplay";

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
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Fruits Data</h1>

      {/* Show active filters */}
      {(name || color || in_season) && (
        <div className="mb-4 p-3 bg-blue-50 rounded border">
          <span className="text-sm text-blue-700">
            Filters: {name && `name: ${name}`} {color && `color: ${color}`}
            {in_season !== undefined && `in_season: ${in_season}`}
          </span>
        </div>
      )}

      <div className="bg-gray-100 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Raw JSON Response:</h2>
        <pre className="bg-white p-3 rounded border overflow-auto text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>

      {/* Render as list if it's an array */}
      {Array.isArray(data) && data.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-700">
            Fruits List ({data.length} items):
          </h2>
          <ul className="space-y-2">
            {data.map((fruit, index) => (
              <li key={fruit.name || index} className="bg-white p-3 rounded border shadow-sm">
                <div className="font-medium">{fruit.name}</div>
                {fruit.colors.length && (
                  <div className="text-sm text-gray-600">Color: {fruit.colors}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
