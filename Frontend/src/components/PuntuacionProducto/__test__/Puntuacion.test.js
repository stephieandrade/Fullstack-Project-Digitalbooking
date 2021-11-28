import React from "react";
import { shallow } from "enzyme";
import Puntuacion from "../Puntuacion";

describe('Descripcion Component', () =>{
  
    it ('tiene una etiqueta parrafo', () => {
     const component = shallow(<Puntuacion/>);
     const node = component.find('p');
     expect(node.length).toEqual(1);
    });    
    
})