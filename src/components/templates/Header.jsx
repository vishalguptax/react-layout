// import { BiMenu } from "react-icons/bi";
// import { useLayout } from "../../hooks/useLayout";

export const Header = () => {
  // const { toggleMobileMenu } = useLayout();
  return (
    <header className="h-[70px] flex items-center justify-between px-5 border-b shadow w-full">
      <div className="flex items-center gap-4 sm:gap-0">
        {/* <button onClick={toggleMobileMenu} className="sm:hidden">
          <BiMenu className="text-2xl" />
        </button> */}
        <h1 className="font-medium">Header</h1>
      </div>
      <span>by vishal</span>
    </header>
  );
};
