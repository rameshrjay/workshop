import carousel1 from "../images/carousel_1.jpg";
import carousel2 from "../images/carousel_2.jpg";
import carousel3 from "../images/carousel_3.jpg";
const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
      style={{ height: "400px" }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
       <div className="carousel-item active">
          <img src={carousel1} className="d-block w-100" alt="Slide 1" style={{ height: "400px", objectFit: "cover" }} />
        </div> 
        <div className="carousel-item">
          <img src={carousel2} className="d-block w-100" alt="Slide 2" style={{ height: "400px", objectFit: "cover" }} />
        </div>
        <div className="carousel-item">
          <img src={carousel3} className="d-block w-100" alt="Slide 2" style={{ height: "400px", objectFit: "cover" }} />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
