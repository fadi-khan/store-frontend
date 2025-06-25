import {lazy} from "react";
import {Layout} from "../layout/Layout.jsx";
import {Navigate} from "react-router-dom";

const Dashboard = lazy(() => import('../views/Dashboard.jsx'));
const Products = lazy(() => import('../views/Products.jsx'));
const NotFound = lazy(() => import('../views/PageNotFound.jsx'));



export const routes = [
    {
        path: '/',
        element: <Layout/>,      // provides Topbar, Sidebar, Footer, and <Outlet />
        children: [
            { index: true, element: <Navigate to="dashboard" replace /> },
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'products',   element: <Products /> },
            // { path: 'settings',  element: <Settings /> },
            { path: '*',         element: <NotFound /> }
        ]
    }
];