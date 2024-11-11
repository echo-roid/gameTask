"use client";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';


const defautSett = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
};
function MySlider({ children,settings={defautSett}}) {  // Renamed 'Component' to 'slides'

   

    return (
        <Slider {...settings}>
                {children}
        </Slider>
    );
}

export default MySlider;
