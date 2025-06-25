import {lazy} from "react";
import {Layout} from "../layout/Layout.jsx";
import {Navigate} from "react-router-dom";

const Dashboard = lazy(() => import('../views/Dashboard.jsx'));
const NotFound = lazy(() => import('../views/PageNotFound.jsx'));
// const Profile   = lazy(() => import('.Profile'));
// const Settings  = lazy(() => import('./pages/Settings'));
// const NotFound  = lazy(() => import('./pages/NotFound'));


export const routes = [
    {
        path: '/',
        element: <Layout/>,      // provides Topbar, Sidebar, Footer, and <Outlet />
        children: [
            { index: true, element: <Navigate to="dashboard" replace /> },
            { path: 'dashboard', element: <Dashboard /> },
            // { path: 'profile',   element: <Profile /> },
            // { path: 'settings',  element: <Settings /> },
            { path: '*',         element: <NotFound /> }
        ]
    }
];