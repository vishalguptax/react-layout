import { BiLogOut } from "react-icons/bi";
import { useLayout } from "../../../hooks/useLayout";

export const NavBottom = () => {
  const { sideNavCollapsed: isCollapsed } = useLayout();

  return (
    <div
      className={`h-[40px] flex items-center gap-2 cursor-pointer hover:bg-indigo-500 hover:text-gray-100 rounded-md
    ${isCollapsed ? "justify-center" : "ps-3"}
    `}
    >
      <BiLogOut className="text-2xl" />
      {!isCollapsed && <span className="font-medium">Logout</span>}
    </div>
  );
};
