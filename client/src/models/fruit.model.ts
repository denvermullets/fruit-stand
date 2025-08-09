export type FruitResponse = {
  name: string;
  colors: string[];
  in_season: boolean;
};

export type FruitsSearchParams = {
  name?: string;
  color?: string;
  in_season?: boolean;
};

export const fetchFruits = async (params?: FruitsSearchParams): Promise<FruitResponse[]> => {
  let url = "http://localhost:3000/fruit";

  if (params) {
    const searchParams = new URLSearchParams();
    console.log("searchParams: ", searchParams);
    if (params.name !== undefined) searchParams.append("name", params.name);
    if (params.in_season !== undefined)
      searchParams.append("in_season", params.in_season.toString());
    console.log("params.in_season: ", params.in_season);
    if (params.color !== undefined) searchParams.append("color", params.color);

    const queryString = searchParams.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
  }

  console.log("url: ", url);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
