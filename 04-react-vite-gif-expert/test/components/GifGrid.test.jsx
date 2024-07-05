import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {
  const category = "Resident Evil";

  test("Debe de mostar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));

    //screen.debug();
  });

  test("Debe de mostrar items cuando se cargan las imagenes useFetchGifs ", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Nemesis",
        ulr: "http://unaUrl.com",
      },
      {
        id: "ABCD",
        title: "Nemesis1",
        ulr: "http://unaUrl1.com",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);

    screen.debug();
  });
});
