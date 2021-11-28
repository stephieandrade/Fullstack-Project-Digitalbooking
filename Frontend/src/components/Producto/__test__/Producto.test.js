import React from "react";
import { Contexto } from "../../Contexto/Contexto";
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router'
import Producto from '../producto'
import ShallowRenderer from 'react-test-renderer/shallow';


describe("Producto", () => {
    it("debería mostrar <Producto /> correctamente ", () => {
        const renderer = new ShallowRenderer();
       render(
            <StaticRouter>
                <Contexto.Provider
                    value={{
                        estado: {
                            session: {
                                apellido: "diaz",
                                nombre: "diego",
                                sub: "diego@mail.com",
                                nombreCompleto: "Diego Diaz"
                            },
                            
                        }
                    }}
                >
                    {" "}
                    <Producto
                    value={{data:{
                        categoria: {
                            titulo: "auto",
                        },
                    }}}
                      />{" "}
                </Contexto.Provider></StaticRouter>
        );
        expect(result.props.children).toEqual([
            <p className="texto">
                Texto</p>
            
          ]);
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
                    <Producto />{" "}
                </Contexto.Provider></StaticRouter>
        );
        const testInstance = wrapper.root;
        const element = testInstance.findByType("div")
        expect(element.props.className.includes("contenedor-header")).toBe(true);
    });


});
