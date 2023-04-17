import Buscador from "../../Components/Buscador/Buscador";
import Carrusel from "../../Components/Carrusel/Carrusel";
import Menu from "../../Components/Menu/Menu";
import Card from "../../Components/Card/Card";
import Garantias from "../../Components/Garantias/Garantias";
import Privacidad from "../../Components/Privacidad/Privacidad";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Carrito from "../../Components/Carrito/Carrito";
import Logo from "../../Components/Logo/Logo";
import { Grid } from "@mui/material";
import Sesion from "../../Components/Sesion/Sesion";
import Register from "../../Components/Register/Register";

const imageCarrusel = [
  {
    nombre: "vista1",
    image: "../src/assets/1.jpg",
  },
  {
    nombre: "vista2",
    image: "../src/assets/2.jpg",
  },
  {
    nombre: "vista3",
    image: "../src/assets/3.jpg",
  },
];
const completCard = [
  {
    image: "../src/assets/PRIMERA TARJETA.avif",
    title: "Metro",
    price: "5.99",
    details:
      "La mayor selección de Metros, de diferentes texturas, diferentes colores.",
  },
  {
    image: "../src/assets/SEGUNDA TARJETA.avif",
    title: "Hilos",
    price: "7.99",
    details: "Una gran variedad de hilos, para todas tus costuras.",
  },
  {
    image: "../src/assets/TERCERA TARJETA.avif",
    title: "Pasadores de Tela",
    price: "9.99",
    details: "Algo indispensable y que nunca nos puede faltar.",
  },
  {
    image: "../src/assets/CUARTA TARJETA.avif",
    title: "Hilos de Crochet",
    price: "12.99",
    details: "Con esta selección podrás hacer tus mejores costuras.",
  },
];

export default function Home() {
  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xl={2}>
          <Logo size={48} color={"pink"} sx={2} />
        </Grid>
        <Grid item xl={8}>
          <Buscador size={16} sx={8} />
        </Grid>
        <Grid item xl={2}>
          <Grid container justifyContent="center">
            <Carrito size={16} numero={"99+"} sx={2} />
          </Grid>
        </Grid>
        <Grid item xl={12}>
          <Menu />
        </Grid>
      </Grid>
      <Garantias size={48} color={"pink"} />
      <footer className="bg-dark text-light py-5">
        <Grid container>
          <Grid item xs={6} sx={{  pl:20 }}>
            <Privacidad size={28} />
          </Grid>
          <Grid item xs={6} sx={{ pl:28 }}>
            <Newsletter size={52} color={"black"} />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
