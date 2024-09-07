import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import AccesoDenegado from "./pages/AccesoDenegado";

function App() {
  return (
    <Routes>
      {/* Ruta principal (Va directo a Login) */}
      <Route path="/">
        <Route index element={<Navigate to="/login" replace />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/denegado" element={<AccesoDenegado />} />
    </Routes>
  );
}

export default App;
