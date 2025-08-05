
'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MySlider(){
  const settings = {
    dots: true, 
    arrows: true,
    infinite: true, 
    speed: 100, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000,
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      
      <Slider {...settings}>
        <div ><img src="https://m.media-amazon.com/images/I/41jc+q+iy1L._SX1500_.jpg" alt="slide 1" style={{height:"400px", width:"100%"}} /></div>
        <div><img src="https://m.media-amazon.com/images/I/61Yx5-N155L._SX3000_.jpg" alt="slide 2"style={{height:"400px", width:"100%"}}  /></div>
        <div><img src="https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg" alt="slide 3" style={{height:"400px", width:"100%"}} /></div>
      </Slider>
    </div>
  );
};
