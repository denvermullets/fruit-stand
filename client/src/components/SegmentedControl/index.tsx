import { useState } from "react";

type SegmentedControlProps = {
  options: string[];
};

const SegmentedControl = ({ options }: SegmentedControlProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (label: string) => {
    return selected === label ? setSelected(null) : setSelected(label);
  };

  return (
    <div className="inline-flex p-1 bg-mocha-bg rounded-full border border-stroke-dark w-fit">
      {options.map((label) => (
        <button
          key={label}
          onClick={() => handleClick(label)}
          className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap
            ${
              selected === label
                ? "bg-gradient-to-br from-yellow-500/20 to-yellow-300/10 text-white shadow-inner"
                : "text-fruit-text hover:text-white"
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;
