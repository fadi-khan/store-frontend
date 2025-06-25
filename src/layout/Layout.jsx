import {Footer} from "../components/Footer.jsx";
import {Topbar} from "../components/Topbar.jsx";
import {Outlet} from "react-router-dom";
import Dashboard from "../views/Dashboard.jsx";

export const Layout = () => {

    // Handler to disable right-click context menu on video


    return(
        <div className={'flex flex-col'}>
            <Topbar/>
            <main className=" content  flex-1 overflow-auto">
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}