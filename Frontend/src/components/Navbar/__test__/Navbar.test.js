import React from "react";
import { shallow } from "enzyme";
import Navbar from "../navbar"

describe('Descripcion Component', () =>{

    it ('tiene una etiqueta ul', () => {
     const component = shallow(<Navbar/>);
     const node = component.find('ul');
     expect(node.length).toEqual(1);

    });

    it ('tiene una clase nav-menu-items', ()=>{
      const component = shallow(<Navbar/>)
      const node = component.find('ul')
      expect(node.hasClass('nav-menu-items')).toBeTruthy()
    });

 

    it ('No tiene una clase nav-menu-items', ()=>{
        const component = shallow(<Navbar/>)
        const node = component.find('ul')
        expect(node.hasClass(!'nav-menu-items')).toBeFalsy();
      });
    
    
})