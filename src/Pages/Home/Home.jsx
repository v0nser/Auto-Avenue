import { useState } from 'react';
import { GrNext } from "react-icons/gr";
import LogoSlider from "../../components/Logo-Slider/Logo-Slider";
import CarSlider from "../../components/Car-Slider/CarSlider";
import './Home.css';
import FollowUsForm from '../../components/Followus/FollowUs';
import Footer from '../../components/Footer/Footer';

const App = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const goToPreviousSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 1 ? 5 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 5 ? 1 : prevSlide + 1));
  };

  return (
    <>
      <section className='hero'>
        <div className={`slider-one ${activeSlide === 1 ? 'active' : ''}`}>
          <div className="slider-one-image">
            <div className="slider-text"></div>
          </div>
        </div>
        <div className={`slider-two ${activeSlide === 2 ? 'active' : ''}`}>
          <div className="slider-two-image">
            <div className="slider-text"></div>
          </div>
        </div>
        <div className={`slider-three ${activeSlide === 3 ? 'active' : ''}`}>
          <div className="slider-three-image">
            <div className="slider-text"></div>
          </div>
        </div>
        <div className={`slider-four ${activeSlide === 4 ? 'active' : ''}`}>
          <div className="slider-four-image">
            <div className="slider-text"></div>
          </div>
        </div>
        <div className={`slider-five ${activeSlide === 5 ? 'active' : ''}`}>
          <div className="slider-five-image">
            <div className="slider-text"></div>
          </div>
        </div>

        <div className="carousel-controllers">
          <button className="prev-button" onClick={goToPreviousSlide}>
            <GrNext />
          </button>
          <button className="next-button" onClick={goToNextSlide}>
            <GrNext />
          </button>
        </div>
      </section>
      <section className='logo-slider'>
        <LogoSlider />
      </section>
      <section className="car-slider">
        <CarSlider/>
      </section>
      <section className="followus">
        <FollowUsForm/>
      </section>
      <section className="footer">
        <Footer/>
      </section>
    </>
  );
};

export default App;
