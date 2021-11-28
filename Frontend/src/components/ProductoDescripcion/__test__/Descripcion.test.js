import React from "react";
import { shallow } from "enzyme";

describe("Descripcion Component", () => {
  it("tiene una etiqueta h2", () => {
    const component = shallow(<Descripcion />);
    const node = component.find("h2");
    expect(node.length).toEqual(1);
  });

  it("tiene una clase tituloCaract", () => {
    const component = shallow(<Descripcion />);
    const node = component.find("h2");
    expect(node.hasClass("tituloCaract")).toBeTruthy();
  });

  it("No tiene una clase tituloCaract", () => {
    const component = shallow(<Descripcion />);
    const node = component.find("h2");
    expect(node.hasClass(!"tituloCaract")).toBeFalsy();
  });
});

describe("Descripcion Component parrafo", () => {
  it("tiene una etiqueta p", () => {
    const component = shallow(<Descripcion />);
    const node = component.find("p");
    expect(node.length).toEqual(1);
  });
});
