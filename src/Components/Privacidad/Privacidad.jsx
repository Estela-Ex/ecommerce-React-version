// export default function Privacidad() {
//     return (
//       <div className="col-8">
//         <div className="h4">
//           <a href="#" className="h5">
//             <i className="bi bi-bullseye">LasCositasDeMibel</i>
//           </a>
//         </div>



//         <div className="d-flex">
//           <ul>
//             <li>Centro de ayuda</li>
//             <li>Servicio al consumidor</li>
//             <li>Escríbenos</li>
//             <li>Servicio telefónico</li>
//           </ul>
//           <ul>
//             <li>Política de privacidad</li>
//             <li>Condiciones de compra</li>
//             <li>Opiniones de clientes</li>
//             <li>Aviso de privacidad y cookies</li>
//           </ul>
//         </div>
//       </div>
//     );
// }


import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";


export default function Privacidad({size,color}) {
  return (
    <>
      <Grid container sx={{ m: 2 }}>
        {<DiamondIcon />}
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Las Cositas de Mibel
        </Typography>
      </Grid>
      <Grid container>
        <Grid item>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            <ListItem>
              <ListItemText primary={"Centro de ayuda"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Servicio al consumidor"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Escríbenos"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Servicio telefónico"} />
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            <ListItem>
              <ListItemText primary={"Política de privacidad"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Condiciones de compra"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Opiniones de clientes"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Aviso de privacidad y cookies"} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}