/* eslint-disable no-undef */
import { checkingAuthentication, checkingCredentials } from "../../../src/store/auth";
jest.mock("../../../src/firebase/providers");

describe("Pruebas en authThunks", () => {
  test("Debe de invocar checkingCredentials", async () => {
    const dispatch = jest.fn();
    await checkingAuthentication()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });
});
