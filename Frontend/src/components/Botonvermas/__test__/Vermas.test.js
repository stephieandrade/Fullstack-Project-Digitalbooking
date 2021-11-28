import React from "react";
import { shallow } from "enzyme";
import Botonvermas from "../vermas"


describe('Botonvermas Component', () =>{ 
    it ('tiene una etiqueta a', () => {
     const component = shallow(<Botonvermas/>);
     const node = component.find("a");
     expect(node.length).toEqual(1);

    });
  
    it("debería mostrar <Botonvermas/> correctamente ", () => {

    const wrapper = shallow(<Botonvermas/>);
    expect(wrapper).toMatchSnapshot();
    });
    
    it('debería mostrar texto "ver mas"', () => {
    
    const wrapper = shallow(<Botonvermas/>);
    const text = wrapper.find("a").text().trim();

     expect(text).toBe("ver más");
    });
});
