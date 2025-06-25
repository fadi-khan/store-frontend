import {Footer} from "../components/Footer.jsx";
import {Topbar} from "../components/Topbar.jsx";
import {Outlet} from "react-router-dom";
import Dashboard from "../views/Dashboard.jsx";

export const Layout = () => {

    // Handler to disable right-click context menu on video


    return(
        <>
            <Topbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}