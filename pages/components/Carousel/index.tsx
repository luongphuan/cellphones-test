import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import { carouselImages } from '../../../constant/data'
import './styles.scss';
interface ISliderProps {

};

const Carousel: React.FC<ISliderProps> = (props) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <div>
      <div className="slider1-wrapper">
        <Slider
          asNavFor={nav2}
          ref={slider1}
          slidesToScroll={1}
        >
          {carouselImages && carouselImages.map((item, index) =>
            <div key={index}>
              <img src={item.url} style={{ height: '100%', width: '100%', objectFit: 'cover' }}></img>
            </div>
          )}
        </Slider>
      </div>

      <div className="slider2-wrapper">
        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={5}
          slidesToScroll={1}
          focusOnSelect={true}
          autoplay={true}
          nextArrow={<></>}
          prevArrow={<></>}
        >
          {carouselImages && carouselImages.map((item, index) =>
            <div key={index}>
              <p>{item.name}</p>
              <p>{item.content}</p>
            </div>
          )}
        </Slider>
      </div>
    </div >
  );
}

export default Carousel;