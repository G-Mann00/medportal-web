import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import userIcon from "../../assets/img/default-user-icon.png";

// La sidebar esta activa por default
const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 before:absolute before:inset-0 before:backdrop-blur-md before:bg-[#319ADE] before:-z-10 z-30 border-b border-[#B0B8C1]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Navbar: Lado izquierdo */}
          <div className="flex">
            {/* Boton de Hamburguesa para expandir la sidebar */}
            <button
              className="text-MP-DarkBlue hover:text-MP-DarkBlueHover lg:hidden focus:outline-none"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <FiMenu className="w-6 h-6" />
            </button>
          </div>

          {/* Navbar: Lado derecho */}
          <div className="flex items-center space-x-3 text-right">
            <div>
              <p className="text-base text-MP-White font-bold">
                Dr.Henry Reyes
              </p>
              <p className="text-xs text-MP-White">Medicina Interna</p>
            </div>
            {/* Pendiente si es necesario darle un menu con boton para cerrar sesion */}
            <img
              src={userIcon}
              alt="user-icon"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
