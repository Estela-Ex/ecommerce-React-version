// export default function Buscador() {
//   return (

//       <div className="input-group">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Que necesitas buscar"
//           aria-label="Recipient's username"
//           aria-describedby="button-addon2"
//         />
//         <button className="btn btn-primary" type="button" id="button-addon2">
//           Ir
//         </button>
//       </div>
//   );
// }
import { Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function Buscador(size) {
  return (
    <Grid>
      <TextField
        label="Que necesitas buscar"
        size="large"
        sx={{ m: 1, width: "100%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
}
