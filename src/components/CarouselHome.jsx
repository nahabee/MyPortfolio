import "./CompoStyle.css";
import Slider from "react-slick";
import { useState } from "react";
import PropTypes from "prop-types";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home from "../assets/home.png";
import projects from "../assets/projects.png";
import tools from "../assets/tools.png";
import contact from "../assets/contact.png";
import { Link } from "react-scroll";

function CarouselHome() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick} role="button" tabIndex={0}>
        <FaArrowRight className="w-7 h-7" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick} role="button" tabIndex={0}>
        <FaArrowLeft className="w-7 h-7" />
      </div>
    );
  };

  const images = [home, projects, tools, contact];
  const link = ["about", "projects", "tools", "contact"];
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <Link to={link[idx]} smooth duration={1200}>
              <img src={img} alt={img} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

CarouselHome.propTypes = {
  onClick: PropTypes.func,
};

export default CarouselHome;
