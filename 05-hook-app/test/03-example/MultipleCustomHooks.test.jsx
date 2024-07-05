import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { UseCounter, useFetch } from "../../src/hooks";

jest.mock("../../src/hooks/useFetch.js");
jest.mock("../../src/hooks/UseCounter.js");

describe("Pruebas en <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();
  UseCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks;
  });

  test("Debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Breakin Bad Quotes"));
    expect(screen.getByText("Loading..."));
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeTruthy();

    screen.debug();
  });

  test("Debe de mostrar un quote ", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Algo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Algo")).toBeTruthy();
    expect(screen.getByText("Fernando")).toBeTruthy();
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeFalsy();
    screen.debug();
  });

  test("Debe de llamar la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Algo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
