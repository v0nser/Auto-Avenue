import { useEffect, useRef } from 'react';
import { GrNext } from 'react-icons/gr';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import logoo from "../../assets/auto-avenue (2).png";
import cs1 from "../../assets/pexels-jay-pizzle-3802510.jpg";
import cs2 from "../../assets/mansory_mercedes_benz_s_klasse_5k-HD.jpg";
import cs3 from "../../assets/silver-metallic-color-sport-sedan-road.jpg";
import cs4 from "../../assets/high-speed-silver-sport-car-driving-highway-sunny-weather.jpg";
import cs5 from "../../assets/bmw_i7_m70_xdrive_2023_4k-HD.jpg";
import './CarSlider.css';

const cardDetails = [
  {
    brand: "Brand 1",
    model: "Model 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    brand: "Brand 2",
    model: "Model 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    brand: "Brand 3",
    model: "Model 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    brand: "Brand 4",
    model: "Model 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    brand: "Brand 5",
    model: "Model 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

const SwiperComponent = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true,
      slidesPerView: "2",
      coverflowEffect: {
        rotate: 0,
        stretch: 30,
        depth: 100,
        modifier: 5,
        slideShadows: true
      },
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: false
      }
    });

    swiperRef.current = swiper;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const swiperElement = swiperRef.current.$el;

      if (scrollPosition > 200) {
        swiperElement.classList.add("animate");
      } else {
        swiperElement.classList.remove("animate");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <div className="heading1">
        <p className="centered-text1">
          <img src={logoo} alt=" " />
          <span>Featured Cars</span>
          <img className="logoo1" src={logoo} alt=" " />
        </p>
      </div>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          {cardDetails.map((card, index) => (
            <div className="swiper-slide" key={index}>
              {index === 0 && <img src={cs1} alt={`Slide ${index + 1}`} />}
              {index === 1 && <img src={cs2} alt={`Slide ${index + 1}`} />}
              {index === 2 && <img src={cs3} alt={`Slide ${index + 1}`} />}
              {index === 3 && <img src={cs4} alt={`Slide ${index + 1}`} />}
              {index === 4 && <img src={cs5} alt={`Slide ${index + 1}`} />}
              <div className="card-details">
                <div className="card-hover">
                  <h3>{card.brand}</h3>
                  <p>{card.model}</p>
                  <p className="description">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-controller">
          <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow">
              <span className="icon"><GrNext /></span>
            </div>
            <div className="swiper-button-next slider-arrow">
              <span className="icon"><GrNext /></span>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperComponent;
