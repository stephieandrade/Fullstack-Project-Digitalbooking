import React from "react";
import { shallow } from "enzyme";
import FormularioReserva from "../FormularioReserva"

describe('FormularioReserva Component', () =>{

    it("debería mostrar <FormularioReserva/> correctamente ", () => {

        const wrapper = shallow(<FormularioReserva/>);
        expect(wrapper).toMatchSnapshot();
        });

    it ('tiene 4 etiquetas h3', () => {
        const wrapper = shallow(<FormularioReserva/>);
        const node = wrapper.find('h3');
        expect(node.length).toEqual(4);
       });

    it ('tiene 4 input', () => {
        const wrapper = shallow(<FormularioReserva/>);
        const node = wrapper.find('input');
        expect(node.length).toEqual(4);
       });
})
