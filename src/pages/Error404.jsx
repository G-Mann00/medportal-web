import DocumentTitle from "../components/DocumentTitle";
import { Typography, Button } from "@material-tailwind/react";
import { BiSolidError } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  DocumentTitle("Error 404 - No Encontrado");
  const navigate = useNavigate();

  return (
    <div className="h-screen mx-auto grid place-items-center text-center bg-MP-DarkBlue px-8">
      <div>
        <BiSolidError className="w-28 h-28 mx-auto text-MP-White" />
        <Typography
          variant="h1"
          className="mt-10 !text-3xl !leading-snug md:!text-4xl text-MP-White"
        >
          Error 404 <br /> Página no encontrada.
        </Typography>
        <Typography className="mt-8 mb-14 text-[18px] font-normal text-MP-White mx-auto md:max-w-sm">
          Lo sentimos, pero la página que buscas no existe. Verifica la URL o
          regresa a la página principal.
        </Typography>
        <Button
          size="md"
          className="w-full px-4 md:w-[8rem] bg-MP-Blue"
          onClick={() => navigate(-1)}
        >
          Volver atrás
        </Button>
      </div>
    </div>
  );
};
export default Error404;
