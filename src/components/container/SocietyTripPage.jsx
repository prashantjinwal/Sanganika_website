import React from "react";
import TripCard from "../dymanic/TripCard";
import events from "../../assets/scocietyTrips";
const SocietyTripPage = () => {
	return (
		<div>
			{events.map((event) => (
				<TripCard key={event.id} event={event} />
			))}
		</div>
	);
};

export default SocietyTripPage;
