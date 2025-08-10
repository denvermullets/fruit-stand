type FruitColorsProps = {
  colors: string[];
  name: string;
};

const colorMap = (color: string) => {
  switch (color) {
    case "red":
      return "bg-red-400";
    case "white":
      return "bg-white";
    case "green":
      return "bg-green-400";
    case "yellow":
      return "bg-yellow-400";
    case "orange":
      return "bg-orange-400";
    case "purple":
      return "bg-purple-400";
    case "blue":
      return "bg-blue-400";
    default:
      break;
  }
};

const Colors = ({ colors, name }: FruitColorsProps) => {
  return (
    <div className="flex flex-row items-center">
      {colors.length > 0 &&
        colors.map((color, index) => {
          return (
            <div
              className={`w-4 h-4 rounded-2xl ${colorMap(color)} ${index > 0 && "-ml-2"}`}
              key={name + index}
            />
          );
        })}
      <div className="ml-2 text-white text-xs">
        {colors.length} color{colors.length > 1 && "s"}
      </div>
    </div>
  );
};

export default Colors;
