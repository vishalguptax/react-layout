import { navItems } from "../../../configs/nav-configs/nav-items.config";
import { useLayout } from "../../../hooks/useLayout";
import { Logo } from "../../shared/Logo";
import { NavBottom } from "./NavBottom";
import { NavItem } from "./NavItem";
import { NavToggle } from "./NavToggle";

export const SideNav = () => {
  const { sideNavCollapsed: isCollapsed } = useLayout();

  return (
    <aside
      className={`w-[${isCollapsed ? "70px" : "240px"}] ${
        isCollapsed ? "px-3" : "px-4"
      } relative transition-all border-r shadow-md flex flex-col pb-4`}
    >
      <NavToggle />
      <Logo />
      <nav className="flex flex-col justify-between flex-1">
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavItem key={item.key} item={item} />
          ))}
        </ul>
        <NavBottom />
      </nav>
    </aside>
  );
};
