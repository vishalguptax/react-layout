import Scrollbars from "react-custom-scrollbars-2";
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
      className={` ${
        isCollapsed
          ? "px-3 w-[70px]"
          : "w-[240px] px-4 h-screen sticky top-0 left-0 z-10"
      } relative transition-all border-r shadow-md flex flex-col pb-4`}
    >
      <NavToggle />
      <Logo />
      <nav className="flex flex-col justify-between flex-1 gap-2">
        {renderNavItems(isCollapsed)}
        <NavBottom />
      </nav>
    </aside>
  );
};

const renderNavItems = (isCollapsed) => {
  const navList = (
    <ul className={`space-y-3 ${isCollapsed ? "" : "overflow-x-hidden"}`}>
      {navItems.map((item) => (
        <NavItem key={item.key} item={item} />
      ))}
    </ul>
  );

  return isCollapsed ? (
    navList
  ) : (
    <Scrollbars autoHide hideTracksWhenNotNeeded>
      {navList}
    </Scrollbars>
  );
};
