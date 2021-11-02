import "./Carousel.css";

export const Carousel = () => {
  return (
    <div className="Carousel">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-dark carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <iframe
              title="threejs-webpack-build"
              src="https://mheerspink75.github.io/threejs-webpack-build/"
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              title="crypto_news"
              src="https://mheerspink75.github.io/crypto_news/"
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              title="check_palindrome"
              src="https://mheerspink75.github.io/check_palindrome/"
            ></iframe>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
