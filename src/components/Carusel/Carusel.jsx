import React from "react";
import Slider from "react-slick";
import { Dna } from "react-loader-spinner";

export const Carusel = () => {
  const baseUrl = "";
  const images = [1];
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img alt="some" src={`${baseUrl}/abstract0${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2>Custom Paging</h2>
      {images.length ? (
        <Slider {...settings}>
          {images.map((image) => (
            <div>
              <img src={baseUrl + "/abstract01.jpg"} />
            </div>
          ))}
        </Slider>
      ) : (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
    </div>
  );
};
