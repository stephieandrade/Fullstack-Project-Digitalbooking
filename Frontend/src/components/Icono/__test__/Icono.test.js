import React from "react";
import { shallow } from "enzyme";
import Icono from "../Icono.jsx"


describe('Icono Component', () =>{

    it ('tiene una etiqueta span', () => {
        const component = shallow(<Icono/>);
        const node = component.find("span");
        expect(node.length).toEqual(1);   
       })       

})