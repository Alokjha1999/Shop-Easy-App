import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Banners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",

    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const bannerUrls = [
    "https://scontent.fpat3-3.fna.fbcdn.net/v/t39.30808-6/370500896_2263321884056159_5623895072677166505_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=PIFnd5aRD3YAX-5GX5h&_nc_ht=scontent.fpat3-3.fna&oh=00_AfAIP71kz0zw6GmpPN8XUigKFsbHozwvCNWVq-z0sCO_NA&oe=64EDD079",
    "https://scontent.fpat3-3.fna.fbcdn.net/v/t39.30808-6/369700996_2263321910722823_7280316200817159685_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=JWiO-tFplYcAX90eGm5&_nc_ht=scontent.fpat3-3.fna&oh=00_AfB4bXm8tAEv_l6aIChvJymvgGeQS5A6cAaUCYVx78AfZw&oe=64EEC5AC",
    "https://scontent.fixr3-4.fna.fbcdn.net/v/t39.30808-6/368867744_2263322034056144_1926110573512759459_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=4ssaAuM0CxsAX_4GY5_&_nc_ht=scontent.fixr3-4.fna&oh=00_AfBI6J1IxuVvu0JnPdfC1LJ-e2ox4gHAnMADiEwigXO-Nw&oe=64ED3BF0",
    "https://scontent.fpat3-3.fna.fbcdn.net/v/t39.30808-6/369700996_2263321910722823_7280316200817159685_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=JWiO-tFplYcAX90eGm5&_nc_ht=scontent.fpat3-3.fna&oh=00_AfB4bXm8tAEv_l6aIChvJymvgGeQS5A6cAaUCYVx78AfZw&oe=64EEC5AC",
    "https://scontent.fpat3-3.fna.fbcdn.net/v/t39.30808-6/370432103_2263321977389483_1803772455847659272_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=Ruj2noihXloAX_mGUFj&_nc_ht=scontent.fpat3-3.fna&oh=00_AfCvD5AXkORAzLj0vD4EHuNXZut1taYSpvTTiLwZ_PiVQg&oe=64ED0C3E",
  ];

  return (
    <Center>
      <Box mt={4} w="100%">
        <Slider {...settings}>
          {bannerUrls.map((el, i) =>
            <img key={i} objectfit="contain" src={el} alt="" />
          )}
        </Slider>
      </Box>
    </Center>
  )
}

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div className={className} style={{ ...style, marginLeft: "30px", zIndex: "1", backgroundColor: "lightGrey", borderRadius: "50%", paddingLeft: "0.3px", paddingTop: "1px" }} onClick={onClick} />
  )
}

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div className={className} style={{ ...style, marginRight: "30px", backgroundColor: "lightGrey", borderRadius: "50%", paddingLeft: "0.3px", paddingTop: "1px" }} onClick={onClick} />
  )
}
