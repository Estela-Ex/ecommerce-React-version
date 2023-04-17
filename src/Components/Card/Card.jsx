// import Stars from "../Star/Star";
// const arrayStars = [
//   "Estrella1",
//   "Estrella2",
//   "Estrella3",
//   "Estrella4",
//   "Estrella5",
// ];
// export default function Card({ producto }) {
//   return (
//     <>
     
//             <div className="card" >
//               <img
//                 src={producto.image}
//                 className="card-img-top"
//                 alt="Productos"
//                 width="640"
//                 height="240"
//               />
//               <div className="card-body">
//                 <div className="d-flex justify-content-between">
//                   <h5 className="card-title">{producto.title}</h5>
//                   <span>
//                     {producto.price}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-currency-euro"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
//                     </svg>
//                   </span>
//                 </div>
//                 <div className="text-warning">
//                   {arrayStars.map((estrella, i) => (
//                     <Stars key={i} size={16} color="currentColor" />
//                   ))}
//                 </div>
//                 <p className="card-text">{producto.details}</p>
//                 <div className="d-flex gap-2">
//                   <a className="btn btn-primary">Detalles</a>
//                   <a className="btn btn-warning w-100">Comprar</a>
//                 </div>
//               </div>
//             </div>
//     </>
//   );
// }

export default function RecipeReviewCard(title,image) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={title} />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <svg data-testid="StarIcon" width={16} height={16} color={"black"}>
        <StarIcon />
      </svg>
      <svg data-testid="StarIcon" width={16} height={16} color={"black"}>
        <StarIcon />
      </svg>
      <svg data-testid="StarIcon" width={16} height={16} color={"black"}>
        <StarIcon />
      </svg>
    </Card>
  );
}