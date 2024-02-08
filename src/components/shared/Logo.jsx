import { useLayout } from "../../hooks/useLayout";

export const Logo = () => {
  const { sideNavCollapsed: isCollapsed } = useLayout();

  return (
    <div className="flex items-center justify-center h-[70px]">
      <h1 className="text-xl font-bold">
        {isCollapsed ? "RL" : "REACT LAYOUT"}
      </h1>
    </div>
  );
};
