import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import PrivateRoute from "../../routers/PrivateRoute";

describe("Pruebas en PrivateRoute", () => {
  test("Debe de mostrar el componente si esta autenticado y guardar local storage", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute isAuthenticated={true} element={<span>Listo!</span>} />
      </MemoryRouter>
    );
    expect(wrapper.find("span").exists()).toBe(true);
  });

  // test("Debe de bloquear el componente si no está autenticado", () => {
  //   const wrapper = mount(
  //     <MemoryRouter>
  //       <PrivateRoute isAuthenticated={false} element={<span>Listo!</span>} />
  //     </MemoryRouter>
  //   );
  //   expect(wrapper.find("p").exists()).toBe(true);
  // });
});
