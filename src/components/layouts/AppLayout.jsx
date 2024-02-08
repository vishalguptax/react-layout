import { Outlet } from "react-router-dom";
import { Header } from "../templates/Header";
import { Suspense } from "react";
import { SideNav } from "../templates/sidebar/SideNav";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-auto">
      <SideNav />
      <div className="w-full">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <main className="px-5 py-3 min-h-[calc(100vh-70px)]">
            <Outlet />
          </main>
        </Suspense>
      </div>
    </div>
  );
};

export default AppLayout;
