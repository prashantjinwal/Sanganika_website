import React from "react";
import EventCard from "../dymanic/EventCard"; // Path to your EventCard component
//this page conatins all data regarding events and displaying them using eventcard
import events from "../../assets/scocietyEvents";
const SocietyEventsPage = () => {
	// Sample events data
	return (
		<div>
			<h1 className="text-3xl font-bold mb-6">Events and Gallery</h1>
			<p className="text-gray-300 mb-4">
				Welcome to our digital chronicle—a vibrant space showcasing the creativity
				and intellect of our community. Dive into diverse events, from hackathons to
				design challenges, capturing shared learning and triumphs. Explore our
				gallery, freeze-framing moments of joy and brilliance. Join us in reliving
				these experiences and stay tuned for upcoming events shaping our
				ever-evolving saga
			</p>
			<hr className="border-t-2 border-solid border-green-300" />
			{events.map((event) => (
				<EventCard key={event.id} event={event} />
			))}
		</div>
	);
};

export default SocietyEventsPage;
