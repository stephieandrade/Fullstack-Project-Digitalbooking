import React from "react";
import Avatar from "../Avatar";
import { mount } from "enzyme";

const runAllPromises = () => new Promise(setImmediate);

describe("Pruebas en <Avatar/>", () => {
  test("Debe renderizar el nombre en el saludo", async () => {
    const nombre = "Diego Fernando";
    const wrapper = mount(<Avatar name={nombre} />);
    await runAllPromises();
    //wrapper.update();
    const nombreParrafo = wrapper.find("p.name").text();
    expect(nombreParrafo).toBe(nombre);
  });
});
