/* 
Este layout es el que se encarga de renderizar la sidebar, el header y el resto de pantallas
en el dashboard. 
*/

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const MainLayout = () => {
  // Estado para saber si la sidebar esta abierta o cerrada
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Area de Contenido */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Navbar */}
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow bg-MP-WhiteBackground">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Rutas hijas */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
export default MainLayout;
