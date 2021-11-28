import { Carousel } from "react-carousel-minimal";
import "./slider.css";
import { Contexto } from "../Contexto/Contexto";
import { useContext } from "react";

function Slider({ thumbnails, radius, width, dots, maxWidth, margin }) {
  // Creo array con objetos de imagenes
  const { estado } = useContext(Contexto);
  console.log(estado);
  const cambioNombre = estado.imagenes.map((item) => {
    return { image: item.urlImagen };
  });
  console.log(thumbnails);
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "15px",
    color: "#545776",
  };

  return (
    <div className="Slider">
      <div style={{ textAlign: "center", backgroundColor: "#383B58" }}>
        <div style={{}}>
          <Carousel
            data={cambioNombre}
            time={3000}
            width={width} //
            height="400px"
            captionStyle={captionStyle}
            radius={radius} //
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={dots} //
            pauseIconColor="transparent"
            pauseIconSize="40px"
            slideBackgroundColor="transparent"
            slideImageFit="cover"
            thumbnails={thumbnails}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: maxWidth,
              maxHeight: "400px",
              margin: margin,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
