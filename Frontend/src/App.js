import React, { useState, useEffect, useRef } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Contexto } from "./components/Contexto/Contexto.jsx";

import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/login";
import Registro from "./components/Registro/registro";
import Auto from "./components/Auto/Auto";
import Reserva from "./components/Reserva/Reserva.jsx";
import ReservaExitosa from "./components/ReservaExitosa/ReservaExitosa";
import NotFound from "./components/NotFound/NotFound";
import ProductoExitoso from "./components/ProductoExitoso/ProductoExitoso.jsx";
import ProductoAdmin from "./components/ProductoAdmin/ProductoAdmin.jsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

export default function App() {
  const ref = useRef(null);
  const [estado, setEstado] = useState({});

  return (
    <Contexto.Provider value={{ estado, setEstado }}>
      <Router>
        <div className="App">
          <Header />
          <main ref={ref}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/registro" component={Registro} />
              <Route exact path="/producto/:id" component={Auto} />
              <Route path="/producto/:id/reserva">
                <Reserva main={ref} />
              </Route>
              <Route path="/reservaExitosa" component={ReservaExitosa} />
              <Route path="/productoExitoso" component={ProductoExitoso} />
              <Route path="/administracion" component={ProductoAdmin} />
              <Route path="*" component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </Contexto.Provider>
  );
}
