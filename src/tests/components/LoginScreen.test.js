import { mount } from "enzyme";
import React from "react";
import { AuthContext } from "../../auth/AuthContext";

import { MemoryRouter } from "react-router-dom";
import { types } from "../../types/types";
import LoginScreen from "../../components/login/LoginScreen";
window.scrollTo = jest.fn();
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("pruebas en <LoginScreen/>", () => {
  beforeEach(() => {
    mockedUsedNavigate.mockReset();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  const context = {
    dispatch: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={context}>
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar login y usar el navigate", () => {
    wrapper.find("button").prop("onClick")();

    expect(context.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "Jorge",
      },
    });
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/", {
      replace: true,
    });
  });
});
