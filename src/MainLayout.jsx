import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function MainLayout() {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default MainLayout;
