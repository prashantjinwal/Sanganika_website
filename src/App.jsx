import { useEffect, useState } from "react";
import Homepage from "./Pages/Homepage";
import Academics from "./Pages/Academics";
import Alumni from "./Pages/Alumni";
import Events from "./Pages/Events";
import TM from "./Pages/TM";
import TMEvent from "./Pages/TM-Event";
import Team from "./Pages/Team";
import Header from "./components/static/Header";
import Footer from "./components/static/Footer";
import { Route, Routes } from "react-router-dom";
const App = () => {
	const [TMEvents, setTMEvents] = useState(null);

	useEffect(() => {
		fetch(process.env.PUBLIC_URL + "/json/TM.json")
			.then((res) => res.json())
			.then((data) => {
				setTMEvents(data);
			})
			.catch((err) => console.log(err));
	}, []);


	return (
		<>
			<Header />
			<Routes>
				{/* This route will direct to the homepage  */}
				<Route path="/" element={<Homepage />} />
				{/* This route will direct to the Academics  */}
				<Route path="/academic" element={<Academics />} />
				{/* This route will direct to the Events page  */}
				<Route path="/event" element={<Events />} />
				{/* This page will direct to the Alumni page  */}
				<Route path="/alumni" element={<Alumni />} />
				{/* This route will direct to the Team page  */}
				<Route path="/team" element={<Team />} />
				{/* This route will direct to the Achievement page  */}
				<Route
					path="/tm"
					element={<TM events={TMEvents} />}
				/>
				<Route path="/tm/:id" element={<TMEvent events={TMEvents} />} />
			</Routes>
			<Footer />
		</>
	);
};
export default App;
