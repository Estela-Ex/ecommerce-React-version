// export default function Menu() {
//   return (
//     <div className="row mt-3">
//       <div className="col-9 p-0">
//         <ul className="nav">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="#">
//               Productos
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Materiales de costura
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Fotos
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div className="col-3 p-0">
//         <ul className="nav justify-content-end">
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Carrito
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Login/Registrate
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import { AppBar, Button, Grid, Link, Toolbar } from "@mui/material";
import { shadows } from "@mui/system";

export default function Menu() {
  return (
    <AppBar
      position="relative"
      sx={{ color: "black", backgroundColor: "unset", boxShadow: "unset" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Grid container>
          <Grid item xl={6}>
            <Grid container spacing={2}>
              <Grid item>
                <Link href="#">Productos</Link>
              </Grid>
              <Grid item>
                <Link href="#">Materiales de costura</Link>
              </Grid>
              <Grid item>
                <Link href="#">Fotos</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={6}>
            <Grid container justifyContent="flex-end" spacing={2}>
              <Grid item>
                <Link href="#">Carrito</Link>
              </Grid>
              <Grid item>
                <Link href="#">Login/Registrate</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
