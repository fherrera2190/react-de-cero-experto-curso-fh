import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en <LoginPage/>", () => {
  const user = {
    id: 123,
    name: "Juan",
  };

  const setUserMock = jest.fn();
  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preEle = screen.getByLabelText("pre");

    expect(preEle.innerHTML).toBe("null");

    screen.debug();
  });

  test("Debe de llamar el setUser cuando se hace click en el boton", () => {
    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonEle = screen.getByRole("button");
    fireEvent.click(buttonEle);
    expect(setUserMock).toHaveBeenCalled();
    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: "Fernando Herrera",
      email: "test@gmail.com",
    });
  });
});
