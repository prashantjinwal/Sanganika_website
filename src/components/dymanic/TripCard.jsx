import React from 'react';

const TripCard = ({ event }) => {
  const { title, description1,description2,description3 ,description4, images } = event;

  return (
    <div className=" shadow-lg rounded-lg overflow-hidden mb-4">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="md:flex md:flex-wrap">
          <div className="px-8 py-2 ">
            <ul className="list-disc">
            <li className="text-gray-300">{description1}</li><br/>
            <li className="text-gray-300">{description2}</li><br/>
            <li className="text-gray-300">{description3}</li><br/>
            <li className="text-gray-300">{description4}</li>
            </ul>
          </div>
          </div>
            <div className="flex flex-wrap justify-between">
              {images.slice(0, 3).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="p-2 w-full md:w-1/3 h-auto mb-2 sm:mb-0"
                />
              ))}
            </div>
      </div>
      <hr className="border-t-2 border-solid border-green-300" /> {/* Horizontal rule */}
    </div>
  );
};

export default TripCard;
