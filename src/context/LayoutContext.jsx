import { createContext, useState } from "react";
const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [sideNavCollapsed, setSideNavCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleNav = () => {
    setSideNavCollapsed((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  console.log({ sideNavCollapsed, mobileMenuOpen });

  return (
    <LayoutContext.Provider
      value={{ toggleNav, sideNavCollapsed, toggleMobileMenu, mobileMenuOpen }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
