import { useState } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import PageNotFound from "./pages/pageErrorFound/PageNotFound";

// Context
import AppContext from "./AppContext";

// Laouts
import RootLeyout from "./layout/RootLeyout";

function App() {
  const [isData, setIsData] = useState("Hello Context");

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLeyout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />

        {/* Error page: 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <AppContext.Provider value={{ isData }}>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
