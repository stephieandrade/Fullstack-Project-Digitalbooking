import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Contexto } from "./components/Contexto/Contexto.jsx";

import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/login";
import Registro from "./components/Registro/registro";
import Auto from "./components/Auto/Auto";
import Reserva from "./components/Reserva/Reserva.jsx"
import ReservaExitosa from "./components/ReservaExitosa/ReservaExitosa"
import NotFound from "./components/NotFound/NotFound";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

export default function App() {
  const [estado, setEstado] = useState({});

  return (
    <Contexto.Provider value={{ estado, setEstado }}>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/registro" component={Registro} />
              <Route exact path="/producto/:id" component={Auto} />
              <Route path="/producto/:id/reserva" component={Reserva} />
              <Route path="/reservaExitosa" component={ReservaExitosa} />
              <Route path="*" component={NotFound} />

            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </Contexto.Provider>
  );
}
