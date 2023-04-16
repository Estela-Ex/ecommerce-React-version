import Buscador from "../../Components/Buscador/Buscador";
import Carrusel from "../../Components/Carrusel/Carrusel";
import Menu from "../../Components/Menu/Menu";
import Card from "../../Components/Card/Card";
import Garantias from "../../Components/Garantias/Garantias";
import Privacidad from "../../Components/Privacidad/Privacidad";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Carrito from "../../Components/Carrito/Carrito";

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
      <div className=" py-4 ">
        <div className="row w-100">
          <div className="col-3">
            <Logo size={24} />
          </div>
          <div className="col-7">
            <Buscador />
          </div>
          <div className="col-2 d-grid">
            <Carrito/>
          </div>
        </div>        
            <Menu />
      <Carrusel images={imageCarrusel} />
      <section className="container py-4 d-flex justify-content-between">
        <h4>Aquí están las mejores ofertas para tí</h4>
        <a href="#" className="btn btn-primary">
          {"ver Ofertas"}
        </a>
      </section>
      <div className=" container py-4 ">
        <div className="row">
          {completCard.map((producto, i) => (
            <div key={i} className="col-3">
              <Card producto={producto} />
            </div>
          ))}
        </div>
      </div>
            <Garantias />
      <footer className="bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            <Privacidad />
            <Newsletter />
          </div>
        </div>
      </footer>
      </div>
  )
}
