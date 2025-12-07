import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Nav from "../NavBar/Nav.jsx";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
