
import './App.css'
import './css/top-bar.css'
import {Suspense} from "react";
import {BrowserRouter, useRoutes} from "react-router-dom";
import {routes} from "./routes/routes.jsx";
function App() {




  const AppRoutes = () => {
    const element = useRoutes(routes);
    return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
  };

  return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  );
}

export default App
