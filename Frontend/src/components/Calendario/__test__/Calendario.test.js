import React from "react";
import { shallow } from "enzyme";
import Calendario from "../Calendario"

describe('Calendario Component', () =>{

    it("debería mostrar <Calendario/> correctamente ", () => {

    const wrapper = shallow(<Calendario/>);
     expect(wrapper).toMatchSnapshot();
    });

    it ('tiene un div', () => {

    const wrapper = shallow(<Calendario/>);
    const component = wrapper.find('div');
    expect(component.length).toEqual(1);

    });

    it('tiene una clase contCalendario', () => { 

    const wrapper = shallow(<Calendario/>);
    const node = wrapper.find('div');
     expect(node.hasClass('contCalendario')).toBeTruthy();
    })


});