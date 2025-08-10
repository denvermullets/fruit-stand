import { SvgIcon } from "../shared/SvgIcon";
import Colors from "./Colors";

type FruitCardProps = {
  name: string;
  colors: string[];
};

const FruitCard = ({ name, colors }: FruitCardProps) => {
  return (
    // this isn't animating exactly like i want, but i'm skipping the finesse on this since there's more to do ⏳
    <div className="w-38 border-stroke-dark border bg-card-bg text-white p-4 rounded-2xl flex flex-col gap-2 relative overflow-hidden transition delay-150 duration-300 ease-in-out hover:bg-[radial-gradient(ellipse_at_top,rgba(254,186,114,0.2)_0%,rgba(254,186,114,0.1)_50%,transparent_100%)] justify-start">
      <div className="flex flex-row justify-center">
        <SvgIcon name={name} x={85} y={85} color={"#feba72"} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <Colors colors={colors} name={name} />
      </div>
    </div>
  );
};

export default FruitCard;
