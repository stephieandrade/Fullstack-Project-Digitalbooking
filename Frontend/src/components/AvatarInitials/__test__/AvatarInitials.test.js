import React from "react";
import AvatarInitials from "../AvatarInitials";
import { mount, shallow } from "enzyme";

//const runAllPromises = () => new Promise(setImmediate);

describe("Pruebas en <AvatarInitials/>", () => {
  test("Dos iniciales en mayúscula para dos nombres", async () => {
    const nombre = "diego fernando";
    const wrapper = mount(<AvatarInitials name={nombre} />);
    //await runAllPromises();
    expect(wrapper).toMatchSnapshot();
  });

  test("Dos iniciales en mayúscula para tres nombres", async () => {
    const nombre = "diego fernando díaz";
    const wrapper = mount(<AvatarInitials name={nombre} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Una inicial en mayúscula para un nombre", async () => {
    const nombre = "diego";
    const wrapper = mount(<AvatarInitials name={nombre} />);
    expect(wrapper).toMatchSnapshot();
  });

  it ('tiene una etiqueta p', () => {
    const component = shallow(<AvatarInitials/>);
    const node = component.find('p');
    expect(node.length).toEqual(1);

   });


});
