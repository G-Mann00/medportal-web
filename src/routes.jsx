// Este archivo puede ser movido a futuro
// El proposito de este archivo es almacenar las rutas y sus componentes asociados de la Sidebar

import { FaFileMedicalAlt, FaHome } from "react-icons/fa";

// Estilo de los iconos
const iconStyle = {
  className: "text-white",
  size: 20,
};

export const SIDEBAR_ROUTES = [
  {
    // Rutas principales de la sidenav
    layout: "Principal",
    pages: [
      {
        title: "Inicio",
        path: "/dashboard",
        icon: <FaHome {...iconStyle} />,
      },
      {
        title: "Historiales Médicos",
        path: "/dashboard/historiales-medicos",
        icon: <FaFileMedicalAlt {...iconStyle} />,
      },
    ],
  },
];
