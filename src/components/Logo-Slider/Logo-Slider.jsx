import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../assets/auto-avenue (2).png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.jpeg";
import logo4 from "../../assets/logo4.jpeg";
import logo5 from "../../assets/logo5.jpeg";
import logo6 from "../../assets/bmw.webp";
import "./LogoSlider.css";

const LogoCarousel = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const heading = document.querySelector(".heading");

      if (heading) {
        const headingOffsetTop = heading.offsetTop;

        if (scrollTop > headingOffsetTop) {
          setIsHeadingVisible(true);
        } else {
          setIsHeadingVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className={`logo-carousel-container ${isHeadingVisible ? "show-heading" : ""}`}>
      <div className="heading">
        <p className="centered-text">
          <img src={logo} alt=" " />
          <span>Featured Brands</span>
          <img className="logo1" src={logo} alt=" " />
        </p>
      </div>

      <Slider {...settings}>
        <div>
          <img src={logo1} alt="Logo 1" />
        </div>
        <div>
          <img src={logo2} alt="Logo 2" />
        </div>
        <div>
          <img src={logo3} alt="Logo 3" />
        </div>
        <div>
          <img src={logo4} alt="Logo 4" />
        </div>
        <div>
          <img src={logo5} alt="Logo 4" />
        </div>
        <div>
          <img src={logo6} alt="Logo 4" />
        </div>
      </Slider>
    </div>
  );
};

export default LogoCarousel;
