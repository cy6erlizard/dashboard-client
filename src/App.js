import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  CssBaseline,
  ThemeProvider,
  Box,
  CircularProgress,
} from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import LoginPage from "./pages/Login/Login";
import Dashboard from "./pages/dashboard";
import Clients from "./pages/Clients";
import Form from "./pages/AddClient";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  // const isAuth = Boolean(useSelector((state) => state.token));
  const isAuth = useState(true);




  return (
    <ColorModeContext.Provider value={colorMode}>
    <BrowserRouter>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar isSidebar={isSidebar} /> */}
          <main className="content">
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
            <Routes>
              {/* <Route path="/" 
                      element={<LoginPage  />} /> */}
              <Route path="/home" 
                      element={ isAuth ? <Dashboard /> : <Navigate to="/"/>}  />
              <Route path="/clients" 
                      element={ isAuth ? <Clients /> : <Navigate to="/"/>}/>
              <Route path="/clients/add" 
                      element={ isAuth ? <Form /> : <Navigate to="/"/>} />
              <Route path="/clients/:id" 
                      element={ isAuth ? <Form /> : <Navigate to="/"/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider> 
    </BrowserRouter>

    </ColorModeContext.Provider>
  );
}

// function PrivateRoute({ element, authenticated, ...rest }) {
//   return authenticated ? element : <Navigate to="/login" />;
// }

export default App;
