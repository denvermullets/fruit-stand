import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SvgIcon } from "../components/shared/SvgIcon";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-6 max-w-2xl mx-auto just flex-row flex items-center gap-4">
        <Link to="/" className="[&.active]:font-bold text-resist-blue-500">
          <div className="flex flex-row text-white text-xl font-bold items-center gap-2">
            <SvgIcon name={"fruitstand"} color={"#feba72"} x={32} y={32} /> Fruit Stand
          </div>
        </Link>
        <Link to="/fruitData" className="[&.active]:font-bold text-white">
          Raw Data
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
