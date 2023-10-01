import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

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
