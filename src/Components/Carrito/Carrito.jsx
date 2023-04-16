// export default function Carrito({size, color, image, numero}) {
//   return (
    
//       <button type="button" className="btn btn-primary position-relative">
//         Carrito <i className="bi bi-cart4"></i>
//         <svg
//           width={size}
//           height={size}
//           fill={color}
//           className="bi bi-cart-check"
//           viewBox="0 0 16 16"
//         >
//           <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
//           <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
//         </svg>
//         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//           {numero}
//         </span>
//       </button>
//   );
// }
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grid } from '@mui/material';

export default function Carrito(size,numero) {
  return (
    <Grid>
      <Stack spacing={2} direction="row">
        <Button variant="contained" >
          <svg
            data-testid="ShoppingCartIcon"
            width={16}
            height={16}
            color={"black"}
          >
            <ShoppingCartIcon />
          </svg>
          Carrito{" "}
        </Button>
      </Stack>
    </Grid>
  );
}

  
