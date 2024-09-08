import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Input,
} from "@material-tailwind/react";
import { FaEye } from "react-icons/fa";
import loginImg from "../assets/img/login-background.png";
import logoImg from "../assets/img/medportal-logo.svg";

const Login = () => {
  return (
    // Fondo de la pagina
    <div className="relative w-full h-screen bg-MP-DarkBlue">
      <img
        className="absolute w-full h-full object-cover opacity-30"
        src={loginImg}
        alt="background doctors"
      />

      {/* Formulario de inicio de sesion */}
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full">
          <Card className="max-w-[450px] w-full mx-auto p-3">
            <CardBody className="p-4 flex flex-col">
              <img
                className="h-[100px] pb-5"
                src={logoImg}
                alt="medportal logo"
              />
              <h1 className="text-2xl font-medium text-center text-MP-Blue pb-5">
                Te damos la bienvenida
              </h1>
              <div className="pb-4">
                <Input label="Correo Electrónico" type="text" />
              </div>
              <div className="relative flex w-full max-w-[24rem] pb-2">
                <Input
                  type="password"
                  label="Contraseña"
                  className="pr-20"
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
                <button>
                  <FaEye
                    size={24}
                    className="text-MP-DarkBlue !absolute right-1 top-1 mt-1 mr-2"
                  />
                </button>
              </div>
              <p className="text-MP-RedUrgency text-sm invisible pb-3">
                El correo o la contraseña son incorrectos.
              </p>
              <div className="pb-2">
                <Button
                  size="lg"
                  className="bg-MP-Blue"
                  fullWidth
                  type="submit"
                >
                  Iniciar Sesión
                </Button>
              </div>
              <Checkbox
                color="blue"
                label={
                  <p className="text-MP-DarkBlue text-sm font-normal">
                    Recordar mis datos
                  </p>
                }
              />
            </CardBody>
          </Card>
        </form>
      </div>
    </div>
  );
};
export default Login;
