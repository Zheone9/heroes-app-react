import React from "react";

import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import SearchScreen from "../../components/search/SearchScreen";
window.scrollTo = jest.fn();
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Pruebas en <SearchScreen/>", () => {
  beforeEach(() => {
    mockedUsedNavigate.mockReset();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("debe de mostrarse correctamente con valores por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Routes>
          <Route path="search" element={<SearchScreen />} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar a batman y el input con el query string", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Routes>
          <Route path="search" element={<SearchScreen />} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe("batman");
    expect(wrapper.find(".alert").exists()).toBe(false);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar un error si no se encuentra el heroe", () => {
    const heroe = "batmans23";

    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${heroe}`]}>
        <Routes>
          <Route path="search" element={<SearchScreen />} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper.find(".alert-danger").text().trim()).toBe(
      `There is no a hero by the name of: ${heroe}`
    );
  });

  test("debe de llamar el navigate al tocar el boton search", () => {
    const heroe = "batman";

    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${heroe}`]}>
        <Routes>
          <Route path="search" element={<SearchScreen />} />
        </Routes>
      </MemoryRouter>
    );
    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });
    wrapper
      .find("input")
      .simulate("change", { target: { name: "searchTerm", value: heroe } });

    expect(mockedUsedNavigate).toHaveBeenCalledWith(`?q=${heroe}`);
    expect(wrapper.find("input").prop("value")).toBe(heroe);
  });
});
