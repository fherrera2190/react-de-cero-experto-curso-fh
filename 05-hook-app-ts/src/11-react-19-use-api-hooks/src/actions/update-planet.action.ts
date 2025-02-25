import { planetsApi } from "../api/planetsApi";
import type { Planet } from "../interfaces/planet.interface";

const sleep = async () => {
  return new Promise((r) => setTimeout(r, 2000));
};

export const updatePlanetAction = async (planet: Planet) => {
  try {
    await sleep(); //2seg
    throw new Error ('Error de prueba');
    
    const response = await planetsApi.patch<Planet>(`/${planet.id}`, planet);

    console.log("planet actualizado", response.data);

    return response.data;
  } catch (error) {
    console.log("Error", error);
    throw new Error("Error al actualizar el planeta");
  }
};
