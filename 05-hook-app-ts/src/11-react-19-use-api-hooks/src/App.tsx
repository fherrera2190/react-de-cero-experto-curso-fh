import { Suspense } from "react";
import { getPlanets } from "./actions/get-planets.actions";
import Planets from "./pages/Planets";
import { ErrorBoundary } from "./shared/ErrorBoundary";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Planetas del Sistema Solar</h1>

      <ErrorBoundary  fallback={<p>Error al cargar los planetas</p>} >
        <Suspense fallback={<p>Cargando...</p>}>
          <Planets getPlanets={getPlanets()} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
