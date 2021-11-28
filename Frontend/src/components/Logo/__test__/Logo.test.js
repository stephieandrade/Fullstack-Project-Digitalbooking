import React from "react";
import { shallow } from "enzyme";
import Logo from "../Logo.jsx"


describe('Logo Component', () =>{

    it ('tiene una etiqueta parrafo', () => {
        const component = shallow(<Logo/>);
        const node = component.find('p');
        expect(node.length).toEqual(1);   
       })       
 
})