import ProfileCard from "../components/dymanic/ProfileCard";
import { useEffect, useState } from "react";
function AlumniPage() {
	const [alumniData, setAlumniData] = useState();
	useEffect(() => {
		fetch(process.env.PUBLIC_URL + "/json/Alumni.json")
			.then((res) => res.json())
			.then((data) => setAlumniData(data));
	}, []);
	return (
		<>
			{alumniData ? (
				<>
					{/* alumniPage layout */}
					<section className="bg-[#0D1117] p-5 font-Poppins">
						<div className="my-1.5  mx-auto text-[#bcd1d9] md:w-[85%] w-[90%]">
							<h1 className="pb-4 mb-1 text-left md:text-6xl text-5xl">Our Alumni</h1>
							<p className="text-md font-light">
								Step back into the halls of nostalgia as you explore our Alumni Page.
								Here, you'll find updates, events, and a community eager to reconnect.
								Cherish memories, celebrate successes, and stay engaged with your alma
								mater. Your journey continues with us—welcome back!
							</p>
						</div>
						<div className="flex flex-wrap my-2 justify-center items-center p-0.5">
							{alumniData.map((alumni, index) => (
								<ProfileCard //mapping alumniData for rendering in alumniCard.js
									key={index}
									indexData={index}
									name={alumni.name}
									image={alumni.image}
									details={alumni.details}
									course={alumni.course}
									batch={alumni.batch}
								/>
							))}
						</div>
					</section>
				</>
			) : (
				<span>Loading....</span>
			)}
		</>
	);
}

export default AlumniPage;
