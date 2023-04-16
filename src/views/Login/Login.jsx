import Buscador from "../../Components/Buscador/Buscador";
import Carrito from "../../Components/Carrito/Carrito";
import Garantias from "../../Components/Garantias/Garantias";
import Logo from "../../Components/Logo/Logo";
import Menu from "../../Components/Menu/Menu";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Privacidad from "../../Components/Privacidad/Privacidad";
import { Grid } from "@mui/material";
import Sesion from "../../Components/Sesion/Sesion";
import Register from "../../Components/Register/Register";

export default function Login() {
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
      <Grid container justifyContent="center" spacing={10}>
        <Grid item xs={5} xl={3}>
          <Sesion />
        </Grid>
        <Grid item xs={5} xl={4}>
          <Register />
        </Grid>
      </Grid>
      <Garantias size={48} color={"pink"} />
      <footer className="bg-dark text-light py-5">
        <Privacidad size={28}/>
        <Newsletter />
      </footer>
    </>
  );
}
