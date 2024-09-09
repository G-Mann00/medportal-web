import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import AccesoDenegado from "./pages/AccesoDenegado";
import Dashboard from "./layouts/MainLayout";
import Inicio from "./pages/dashboard/Inicio";
import HistorialesMedicos from "./pages/dashboard/HistorialesMedicos";

function App() {
  return (
    <Routes>
      {/* Ruta principal (Va directo a Login) */}
      <Route path="/">
        <Route index element={<Navigate to="/login" replace />} />
      </Route>
      <Route path="/login" element={<Login />} />

      {/* Ruta Adicionales */}
      <Route path="*" element={<Error404 />} />
      <Route path="/denegado" element={<AccesoDenegado />} />

      {/* Ruta al Dashboard y sus rutas hijas */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Inicio />}></Route>
        <Route
          path="/dashboard/historiales-medicos"
          element={<HistorialesMedicos />}
        />
      </Route>
    </Routes>
  );
}

export default App;
