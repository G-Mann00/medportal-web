import React, { useState, useEffect, useRef } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import logoImg from "../../assets/img/medportal-logo.svg";
import { IoExitOutline } from "react-icons/io5";
import { SIDEBAR_ROUTES } from "../../routes";

// La sidebar esta activa por default
// Variant v2 = Sidebar con borde sin redondear
// Variant v3 = Sidebar con borde redondeado

// NOTAS A CONSIDERAR PARA FUTURA CORECCION (08/09/24)
// Cuando el width de la pantalla baja de los 1320px, la sidebar se hace mas corta pero no se oculta por completo
// Pero de tal manera que no queda bien (a mi parecer)
// Si el width baja ahora debajo de los 960px, ahi si se oculta por completo la sidebar
// Widths mas grandes, muestra la sidebar completa

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // Cuando la sidebar se expande despues de estar oculta
  // Se cierra cuando se hace clic fuera de la sidebar
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // Se cierra si se presiona la tecla ESC
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div className="min-w-fit">
      {/* Backdrop de la sidebar en móvil (Fondo oscuro desenfocado) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-auto no-scrollbar w-64 2xl:!w-64 shrink-0 bg-MP-DarkBlue dap-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Encabezado de la sidebar */}
        <div className="flex flex-col p-5 sm:px-4">
          {/* Botón de cerrar */}
          <button
            ref={trigger}
            className="lg:hidden text-MP-White hover:text-[#F0F0F0] max-w-[30px]"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <FaArrowLeft className="w-6 h-6" />
          </button>
          {/* Logo */}
          <img
            src={logoImg}
            alt="Medportal Logo"
            className="max-w-[130px] w-full max-h-[130px] h-full mx-auto mt-2"
          />
        </div>

        {/* Cuerpo de la Sidebar */}
        {/* Links de la sidenav */}
        <div className="m-4">
          {SIDEBAR_ROUTES.map(({ pages }, key) => (
            <ul key={key} className="flex flex-col gap-1">
              {pages.map(({ icon, title, path }) => (
                <li key={title}>
                  <NavLink to={path} end={path === "/dashboard"}>
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? "filled" : "text"}
                        className={
                          isActive
                            ? "flex items-center gap-4 px-4 capitalize bg-MP-Blue"
                            : "flex items-center gap-4 px-4 capitalize"
                        }
                        fullWidth
                      >
                        {icon}
                        <Typography
                          color="white"
                          className="font-medium capitalize"
                        >
                          {title}
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          ))}
          <Button
            variant="text"
            className="flex items-center gap-4 px-4 capitalize"
            fullWidth
            onClick={() => navigate("/login")}
          >
            <IoExitOutline size={20} className="text-MP-Red" />
            <Typography className="font-medium capitalize text-MP-Red">
              Cerrar Sesion
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
