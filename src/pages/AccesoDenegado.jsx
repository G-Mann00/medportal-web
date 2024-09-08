import DocumentTitle from "../components/DocumentTitle";
import { Typography, Button } from "@material-tailwind/react";
import { PiProhibitBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const AccesoDenegado = () => {
  DocumentTitle("Acceso Denegado");
  const navigate = useNavigate();

  return (
    <div className="h-screen mx-auto grid place-items-center text-center bg-MP-DarkBlue px-8">
      <div>
        <PiProhibitBold className="w-28 h-28 mx-auto text-MP-White" />
        <Typography
          variant="h1"
          className="mt-10 !text-3xl !leading-snug md:!text-4xl text-MP-White"
        >
          Acceso Denegado
        </Typography>
        <Typography className="mt-8 mb-14 text-[18px] font-normal text-MP-White mx-auto md:max-w-sm">
          No tienes permisos para acceder a esta página. Si crees que esto es un
          error, por favor contacta con el administrador del sistema.
        </Typography>
        <Button
          size="md"
          className="w-full px-4 md:w-[8rem] bg-MP-Blue"
          onClick={() => navigate("/")}
        >
          Volver atrás
        </Button>
      </div>
    </div>
  );
};
export default AccesoDenegado;
