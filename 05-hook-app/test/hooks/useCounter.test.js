const { renderHook, act } = require("@testing-library/react");
const { UseCounter } = require("../../src/hooks/UseCounter");

describe("Pruebas en useCounter", () => {
  test("Debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => UseCounter());
    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe de generar el counter con el valor de 100 ", () => {
    const { result } = renderHook(() => UseCounter(100));
    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toBe(100);
  });

  test("Debe incrementar el counter", () => {
    const { result } = renderHook(() => UseCounter());
    const { increment } = result.current;

    act(() => {
      increment();
      increment(2); //esto se puede hacer agregando al hook (current)=>current+value
    });
    expect(result.current.counter).toBe(13);
  });

  test("Debe decrementar el counter", () => {
    const { result } = renderHook(() => UseCounter());
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2); //esto se puede hacer agregando al hook (current)=>current+value
    });
    expect(result.current.counter).toBe(7);
  });

  test("Debe resetear el counter", () => {
    const { result } = renderHook(() => UseCounter());
    const { reset, decrement } = result.current;

    act(() => {
      decrement();
      decrement(2); //esto se puede hacer agregando al hook (current)=>current+value
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
