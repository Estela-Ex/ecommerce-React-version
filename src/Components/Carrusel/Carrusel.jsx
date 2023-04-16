import Carousel from "react-bootstrap/Carousel";
export default function Carrusel({ images }) {
  return (
    <Carousel>
      {images.map((image, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={image.image}
              alt={image.nombre}
              width={"1920"}
              height={"1280 "}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}
