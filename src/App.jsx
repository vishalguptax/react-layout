import { Route, Routes } from "react-router-dom";
import { allRoutes } from "./configs/route-configs/routes.config";
import AppLayout from "./components/layouts/AppLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          {allRoutes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              Component={route.component}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
