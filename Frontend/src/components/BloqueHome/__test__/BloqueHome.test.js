import React from "react";
import { shallow } from "enzyme";
import BloqueHome from "../BloqueHome";



describe('BloqueHome Component', () =>{

    it ('tiene una etiqueta p', () => {
     const component = shallow(<BloqueHome/>);
     const node = component.find('p');
     expect(node.length).toEqual(1);

    });

    it('tiene una clase titulo', () => {
      const component = shallow(<BloqueHome/>);
      var node = component.find('p');
      expect(node.hasClass('titulo')).toBeTruthy();
    })

    it('no tiene una clase titulo', () => {
      const component = shallow(<BloqueHome/>);
      var node = component.find('p');
      expect(node.hasClass(!'titulo')).toBeFalsy();
    }) 

});



