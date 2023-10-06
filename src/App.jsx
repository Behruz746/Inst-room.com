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
  const [cardOneData, setCardOneData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isUrl, setIsUrl] = useState(
    "https://651adc18340309952f0df4c9.mockapi.io/cardOne"
  );

  console.log(isUrl);

  useEffect(() => {
    async function fetchData() {
      try {
        const [dataCard, dataCardOne] = await Promise.all([
          axios.get("https://651adc18340309952f0df4c9.mockapi.io/data"),
          axios.get(isUrl),
        ]);
        setCardData(dataCard.data);
        setCardOneData(dataCardOne.data);
        setIsLoad(true);
      } catch (error) {
        // setIsLoad(true);
        console.log("error: 404", error);
      }
    }
    fetchData();
    setIsLoad(false); // sliderni almashtirishganida animation bolishi uchun
  }, [isUrl]);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLeyout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />

        {/* Error page: 404 :(+ */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <AppContext.Provider
      value={{ isData, cardData, cardOneData, isLoad, setIsUrl, isUrl }}
    >
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
