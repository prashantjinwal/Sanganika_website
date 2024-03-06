import React from "react";
import { useState } from "react";
import data from "../assets/Academics";
import TabNav from "../components/dymanic/TabNav";
import SemesterContainer from "../components/dymanic/SemesterContainer";

function Academics() {
	const courses = Object.keys(data);

	// state to display resources for cs, pscs, changes while changing tabs
	const [course, setCource] = useState(courses[0]);

	// states to handle which semester accordian is open,
	// (stores index of currentrly opened accoridan)
	const [shown, setShown] = useState(0);

	function handleShown(index) {
		// open accordian for index specified,
		// close accourdian of state and in index is same
		if (index === shown) {
			setShown(null);
			return;
		}
		setShown(index);
	}

	return (
		<div className="academics flex flex-col bg-[#0D1117] text-[#BCD1D9] flex-grow">
			{/* tabs  */}
			<TabNav current={course} setCurrent={setCource} items={courses} />
			{/* semester accordians conatainer*/}
			<div className="content bg-[#00020F] px-[4.5rem] divide-y-[1px] flex-grow gap-[1rem] flex flex-col pb-[4rem] pt-[2rem]">
				<h1 className="border-none">Study material</h1>
				{data[course].map((sem, index) => {
					return (
						<SemesterContainer
							key={index}
							isShown={shown}
							setShown={handleShown}
							current={course}
							data={sem}
							index={index}
							course={course}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Academics;
