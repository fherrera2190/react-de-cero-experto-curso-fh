const { renderHook, act } = require("@testing-library/react");
const { useForm } = require("../../src/hooks/useForm");

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Fernando",
    email: "test@test.com",
  };
  test("Debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe de cambiar el nombre del formulario", () => {
    const newValue = "Juan";

    const { result } = renderHook(() => useForm());
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });
    expect(result.current.name).toBe(newValue);
    expect(result.current.name).toBe(newValue);
  });

  test("Debe de realizar el reset del formulario", () => {
    const newValue = "Juan";

    const { result } = renderHook(() => useForm(initialForm));
    const { onResetForm, onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });

      onResetForm();
    });
    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.name).toBe(initialForm.name);
  });
});
