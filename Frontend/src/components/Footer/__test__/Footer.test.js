import React from "react";
import { shallow } from "enzyme";
import Footer from "../Footer.jsx"


describe('Footer Component', () =>{

    it ('tiene una etiqueta parrafo', () => {
        const component = shallow(<Footer/>);
        const node = component.find('p');
        expect(node.length).toEqual(1);   
       }) 
       
    it ('tiene 4 etiquetas ancor', () => {
        const component = shallow(<Footer/>);
        const node = component.find('a');
        expect(node.length).toEqual(4);   
       }) 
})