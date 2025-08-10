export type FruitColor = {
  id: number;
  fruit_id: number;
  color: string;
};

// since the dropdown is the only one consuming this i'm just returning an array of strings
export type FruitColorResponse = {
  value: string[];
};

export const fetchFruitColors = async (): Promise<FruitColorResponse> => {
  const url = "http://localhost:3000/fruit/colors";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
