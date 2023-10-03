import { useState, useEffect } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import PageNotFound from "./pages/pageErrorFound/PageNotFound";

// Context
import AppContext from "./AppContext";

// Laouts
import RootLeyout from "./layout/RootLeyout";
import axios from "axios";

function App() {
  const [isData, setIsData] = useState("Hello Context");
  const [cardData, setCardData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get(
          "https://651adc18340309952f0df4c9.mockapi.io/data"
          );
          setCardData(data.data);
          setIsLoad(true);
        } catch (error) {
          setIsLoad(true);
          console.log("error: 404", error);
        }
      }
      fetchData()
    }, []);

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
    <AppContext.Provider value={{ isData, cardData, isLoad }}>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
