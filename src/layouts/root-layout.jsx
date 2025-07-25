import { useLocation } from "react-router-dom";
import Footer from "../mainfolder/sections/common/footer";
import Header1 from "../mainfolder/sections/common/header1";
import AppRoutes from "../routing/app-routes";
import Mobilemenu from "../mainfolder/sections/common/MobileMenu.jsx";


function RootLayout() {
    const { pathname } = useLocation();

    return (
        <>
             <div className="page-wraper">
        {
         
          <Header1 />
        }

        {/* ✅ Mobile Menu */}
        <div className="mobile-menu-container">
          <Mobilemenu />
        </div>

        <div className="page-content">
          <AppRoutes />
        </div>

        <Footer />

        {/* Scroll To Top Button */}
        <button className="scroltop d-none">
          <span className="fa fa-angle-up relative" id="btn-vibrate"></span>
        </button>
      </div>
        </>
    )
}

export default RootLayout;