import { useState } from "react";

type SegmentedControlProps = {
  options: string[];
};

const SegmentedControl = ({ options }: SegmentedControlProps) => {
  // we're using a string vs a boolean here so that we can deselect as well
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (label: string) => {
    return selected === label ? setSelected(null) : setSelected(label);
  };

  const getButtonStyles = (isSelected: boolean) => {
    const baseStyles =
      "relative px-4 py-2 text-sm font-medium rounded-[8px] transition-all duration-300 whitespace-nowrap";
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
