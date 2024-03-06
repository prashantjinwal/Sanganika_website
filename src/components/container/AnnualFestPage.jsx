import React from "react";
import AnnualFestSlider from "../dymanic/AnnualFestSlider"; // Path to your AnnualFestSlider component
//ths page corresponds to Tech Marathon 2022 events
import events from '../../assets/annualEvents';
const AnnualFestPage = () => {
  return (
    <div className="container mx-auto  px-6 py-2 overflow-hidden">
      {/* Other content */}
      <h2 className="text-4xl font-bold mb-4">Tech Marathon 2022</h2>
      <AnnualFestSlider events={events} />
      {/* Other content */}
    </div>
  );
};

export default AnnualFestPage;
