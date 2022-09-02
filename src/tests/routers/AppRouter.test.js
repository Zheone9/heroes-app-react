import { mount, shallow } from "enzyme";
import React from "react";
import { AuthContext } from "../../auth/AuthContext";
import AppRouter from "../../routers/AppRouter";
describe("Pruebas en <AppRouter/>", () => {
  test("debe de mostrar el login si no esta autenticado", () => {
    const context = {
      dispatch: jest.fn(),
      user: {
        logged: false,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el componente de marvel si está autenticado", () => {
    const context = {
      dispatch: jest.fn(),
      user: {
        name: "jorge",
        logged: true,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
