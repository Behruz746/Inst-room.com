import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CatalogGoods from "../components/CatalogGoods/CatalogGoods";

function RootLeyout() {
  return (
    <>
      <Header />
      <main className="app__main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLeyout;
