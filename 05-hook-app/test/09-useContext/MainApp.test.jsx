import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <MainApp/>", () => {
  test("should mostrar el homepage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    screen.debug();

    expect(screen.getByText("Home Page")).toBeTruthy();
  });

  test("should mostrar el LoginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("Login Page")).toBeTruthy();
    screen.debug();
  });
});
