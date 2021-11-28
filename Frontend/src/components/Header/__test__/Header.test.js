import React from "react";
import { Contexto } from "../../Contexto/Contexto";
import Header from "../Header";
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router'


describe("Header", () => {
  it("debería mostrar <Header /> correctamente ", () => {
    const wrapper = renderer.create(
        <StaticRouter>
      <Contexto.Provider
        value={{
          estado: {
            session: {
              apellido: "diaz",
              nombre: "diego",
              sub: "diego@mail.com",
              nombreCompleto: "Diego Diaz",
            },
          },
        }}
      >
        {" "}
        <Header />{" "}
      </Contexto.Provider></StaticRouter>
    );
    let tree = wrapper.toJSON();
 
    expect(tree).toMatchSnapshot();
  });


  it("deberia tener un div con classname = contenedor-header", () => {
    const wrapper = renderer.create(
        <StaticRouter>
      <Contexto.Provider
        value={{
          estado: {
            session: {
              apellido: "diaz",
              nombre: "diego",
              sub: "diego@mail.com",
              nombreCompleto: "Diego Diaz",
            },
          },
        }}
      >
        {" "}
        <Header />{" "}
      </Contexto.Provider></StaticRouter>
    );
    const testInstance = wrapper.root;
    const element = testInstance.findByType("div")
    expect(element.props.className.includes("contenedor-header")).toBe(true);
  });


});
