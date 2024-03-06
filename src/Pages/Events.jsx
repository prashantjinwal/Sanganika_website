import React from "react";
import SocietyEventsPage from "../components/container/SocietyEventsPage";
import SocietyTripPage from "../components/container/SocietyTripPage";
import AnnualFestPage from "../components/container/AnnualFestPage";
//this conatins all the components to be rendered over our  page
function Events() {
	return (
		<div className="bg-[#0D1117]  text-white container mx-auto p-6 ">
			{/* Set background color and text color */}
			<SocietyEventsPage /> {/* Render your main page/component */}
			<SocietyTripPage></SocietyTripPage>
			<AnnualFestPage></AnnualFestPage>
		</div>
	);
}

export default Events;
