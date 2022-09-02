import { mount } from "enzyme";
import React from "react";
import { AuthContext } from "../../auth/AuthContext";
import NavBar from "../../components/ui/NavBar";
import { MemoryRouter } from "react-router-dom";
import { types } from "../../types/types";
window.scrollTo = jest.fn();
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("pruebas en <Navbar/>", () => {
  beforeEach(() => {
    mockedUsedNavigate.mockReset();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
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
        <NavBar />
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Jorge");
  });

  test("debe de llamar logout y usar el navigate", () => {
    wrapper.find("button").prop("onClick")();

    expect(context.dispatch).toHaveBeenCalledWith({
      type: types.logout,
    });
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/login", {
      replace: true,
    });
  });
});
