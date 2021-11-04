import "./Carousel.css";

export const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <iframe
            title="threejs-webpack-build"
            src="https://mheerspink75.github.io/threejs-webpack-build/"
            className="d-block w-100"
          ></iframe>
          <div className="carousel-caption d-none d-md-block">
            <a
              type="button"
              className="btn btn-outline-primary btn-sm"
              href="https://github.com/mheerspink75/threejs-webpack-build"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-git"> Repo</i>
            </a>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <iframe
            title="crypto_news"
            src="https://mheerspink75.github.io/crypto_news/"
            className="d-block w-100"
          ></iframe>
          <div className="carousel-caption d-none d-md-block">
            <a
              type="button"
              className="btn btn-outline-primary btn-sm"
              href="https://github.com/mheerspink75/crypto_news"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-git"> Repo</i>
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <iframe
            title="check_palindrome"
            src="https://mheerspink75.github.io/check_palindrome/"
            className="d-block w-100"
          ></iframe>
          <div className="carousel-caption d-none d-md-block">
            <a
              type="button"
              className="btn btn-outline-primary btn-sm"
              href="https://github.com/mheerspink75/check_palindrome"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-git"> Repo</i>
            </a>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
