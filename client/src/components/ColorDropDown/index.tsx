import { useSearchContext } from "../../hooks/useSearchContext";
import { FruitColorResponse } from "../../models/fruitColor.model";

type ColorDropdownProps = {
  colors?: FruitColorResponse;
  isLoading: boolean;
  currentValue?: string;
};

const ColorDropdown = ({ colors, isLoading, currentValue }: ColorDropdownProps) => {
  const { updateSearch, clearSearch } = useSearchContext();

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === "") {
      clearSearch("color");
    } else {
      updateSearch("color", value);
    }
  };

  return (
    <select
      value={currentValue || ""}
      onChange={handleColorChange}
      disabled={isLoading}
      className="border border-stroke-dark px-3 py-2 rounded-xl bg-mocha-bg text-fruit-text disabled:bg-mocha-bg disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-fruit-orange focus:border-fruit-orange"
    >
      <option value="">{isLoading ? "Loading colors..." : "All Colors"}</option>
      {colors &&
        colors.value.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
    </select>
  );
};

export default ColorDropdown;
