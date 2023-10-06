import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const CatalogGoods = () => (
  <div className="CatalogGoods blackColor">
    <div className="container">
      <div className="catalog__container">
        <h1>Hello Catalog</h1>
      </div>
    </div>
  </div>
);

function RootLeyout() {
  return (
    <>
      <Header />
      <CatalogGoods />
      <main className="app__main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLeyout;
