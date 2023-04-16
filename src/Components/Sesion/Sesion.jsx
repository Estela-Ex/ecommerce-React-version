import { Grid, TextField, Typography, Button,Box } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Sesion() {
  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Inicia Sesión
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
        <TextField label="Email" size="small" sx={{ mb: 2 }} />
        <TextField label="Password" size="small" sx={{ mb: 2 }} />
        <Button variant="contained">Login</Button>
      </Box>
    </>
  );
}

