import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AnnualFestSlider = ({ events }) => {
  //sllider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div >
      <Slider {...settings}>
        {/* each event inside the slider */}
        {events.map((event, index) => (
          <div className="p-4 border-4 border-gray-500 rounded-lg " key={index}>
            <h3 className="text-2xl font-bold mb-4">{event.name}</h3>
            <div className="  flex flex-wrap justify-center">
              <div className="px-8 py-2 md:w-2/3 lg:w-4/5 lg:pr-4">
                <ul className="list-disc">
                  <li className="text-gray-300">{event.description1}</li>
                  <br />
                  <li className="text-gray-300">{event.description2}</li>
                  <br />
                  <li className="text-gray-300">{event.description3}</li>
                  <br />
                  <li className="text-gray-300">{event.description4}</li>
                </ul>
              </div>
              <div className="p-2 md:w-1/3 lg:w-1/5 relative">
                <img src={event.image} alt={event.name} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AnnualFestSlider;
