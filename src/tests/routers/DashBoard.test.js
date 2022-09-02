import { mount, shallow } from "enzyme";
import React from "react";
import { AuthContext } from "../../auth/AuthContext";
import AppRouter from "../../routers/AppRouter";
import Dashboard from "../../routers/Dashboard";
import { MemoryRouter } from "react-router-dom";
window.scrollTo = jest.fn();
describe("Pruebas en <Dashboard/>", () => {
  test("debe de mostrarse correctamente", () => {
    const context = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: "Jorge",
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
