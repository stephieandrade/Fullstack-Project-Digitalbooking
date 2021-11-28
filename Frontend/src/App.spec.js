import React from "react";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import App from "../src/App"

describe("Testin <App/> Component", () => {
   it("App renders a message", () => {
      const wrapper = shallow(<App />);
      const message = <p>Edit <code>src/App.js</code> and save to   reload.</p>;
      expect(wrapper).to.contain(message);
   });
   chai.use(chaiEnzyme());
});

/*describe("App Component", () => {
  it("renders the Header wrapper", () => {
    const wrapper = mount(<App />);
    expect(wrapper).to.have.descendants(Header);
  });
  it("renders the Footer wrapper", () => {
    const wrapper = mount(<App />);
    expect(wrapper).to.have.descendants(Footer);
  });
});*/
