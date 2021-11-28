import React from "react";
import { shallow } from "enzyme";
import Politica from "../politica.jsx"


describe('Politica Component', () =>{

   
    it ('tiene una etiqueta hr', () => {
        const component = shallow(<Politica/>);
        const node = component.find('hr');
        expect(node.length).toEqual(1);
   
       });  
       it ('tiene 4  etiquetas h2', () => {
        const component = shallow(<Politica/>);
        const node = component.find('h2');
        expect(node.length).toEqual(4);
   
       });
       it ('tiene 7 etiquetas p', () => {
        const component = shallow(<Politica/>);
        const node = component.find('p');
        expect(node.length).toEqual(7);
   
       });

    
})
