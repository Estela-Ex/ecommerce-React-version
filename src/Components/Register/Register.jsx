import { Grid, TextField, Typography, Button, Box } from "@mui/material";

export default function Register() {
  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Regitrarse
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          border: "1px solid blue",
          borderRadius: 2,
          backgroundColor: "#FBFCFC ",
        }}
      >
        <Grid container>
          <TextField label="Nombre" size="small" sx={{ m: 1, width: "46%" }} />
          <TextField
            label="Apellidos"
            size="small"
            m={2}
            sx={{ m: 1, width: "46%" }}
          />
        </Grid>
        <TextField label="Email" size="small" sx={{ m: 1, width: "95%" }} />
        <Grid container>
          <TextField
            label="Password"
            size="small"
            sx={{ m: 1, width: "46%" }}
          />
          <TextField
            label="Repeat Password"
            size="small"
            m={2}
            sx={{ m: 1, width: "46%" }}
          />
        </Grid>
        <TextField label="Direccion" size="small" sx={{ m: 1, width: "95%" }} />
        <Grid container>
          <TextField
            label="Provincia"
            size="small"
            sx={{ m: 1, width: "30%" }}
          />
          <TextField
            label="Poblacion"
            size="small"
            sx={{ m: 1, width: "30%" }}
          />
          <TextField label="C.P" size="small" sx={{ m: 1, width: "30%" }} />
        </Grid>
        <Button variant="contained">Registrarse</Button>
      </Box>
    </>
  );
}
