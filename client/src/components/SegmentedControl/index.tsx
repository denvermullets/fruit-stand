import { useSearchContext } from "../../hooks/useSearchContext";

type SegmentedControlProps = {
  options: string[];
  currentValue?: boolean;
};

const SegmentedControl = ({ options, currentValue }: SegmentedControlProps) => {
  // since we're triggering a state refresh this is controlled by param state
  const { updateSearch, clearSearch } = useSearchContext();

  const getSelectedLabel = (value?: boolean) => {
    if (value === true) return "In Season";
    if (value === false) return "Out of Season";
    return null;
  };

  const selected = getSelectedLabel(currentValue);

  const handleClick = (label: string) => {
    if (selected === label) {
      // If clicking the same button, clear the selection
      clearSearch("in_season");
    } else {
      // Update with new selection
      updateSearch("in_season", label === "In Season" ? true : false);
    }
  };

  const getButtonStyles = (isSelected: boolean) => {
    const baseStyles =
      "relative px-4 py-2 text-sm font-medium rounded-[8px] transition-all duration-300 whitespace-nowrap cursor-pointer";
    const selectedStyles = "bg-fruit-orange text-mocha-bg shadow-inner";
    const unselectedStyles = "text-fruit-text hover:text-white";

    return `${baseStyles} ${isSelected ? selectedStyles : unselectedStyles}`;
  };

  return (
    <div className="inline-flex p-1 bg-mocha-bg rounded-xl border border-stroke-dark w-fit">
      {options.map((label) => (
        <button
          key={label}
          onClick={() => handleClick(label)}
          className={getButtonStyles(selected === label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;
