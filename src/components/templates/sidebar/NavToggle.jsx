import { useLayout } from "../../../hooks/useLayout";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export const NavToggle = () => {
  const { toggleNav, sideNavCollapsed: isCollapsed } = useLayout();
  return (
    <span
      onClick={toggleNav}
      role="button"
      className="p-1 border border-gray-700 rounded-full bg-indigo-400 absolute top-[28px] -right-2.5 flex items-center justify-center text-white"
    >
      {isCollapsed ? (
        <BiRightArrow className="text-xs font-semibold" />
      ) : (
        <BiLeftArrow className="text-xs font-semibold" />
      )}
    </span>
  );
};
