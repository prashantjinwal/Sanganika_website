import React from "react";

//here you can access different fields using  "props.fieldName";
function ProfileCard(props) {
	return (
		<>
			{/* profile layout*/}
			<div className="alumni-card w-96 h-auto p-0.5 flex relative my-5 md:mx-2.5 mx-0 font-Inter ">
				{/* profile image*/}
				<img
					src={process.env.PUBLIC_URL + props.image}
					alt=""
					className="object-cover w-24 h-20 border-2 border-[#bcd1d9] rounded-full relative my-auto scale-[1.5] left-[8.5%] z-[999] bg-[#0D1117]"
				/>
				{/* profile data section */}
				<div className="profile-details w-full">
					{/* here the variable className is used to give different bg-color to profileCard based on its indexing */}
					<div
						className={`profile-name ${
							props.indexData % 2 === 0 ? "bg-[#62C6FF]" : "bg-[#A3FD9B]"
						} p-1 rounded-md`}
					>
						{/* profile name*/}
						<p className="relative text-left left-[25%] p-1 text-md font-bold max-w-[75%]r">
							{props.name}
						</p>
					</div>
					<div className="profile-info  border-2 border-[#bcd1d9] rounded-md p-2 text-[#bcd1d9] text-sm font-light">
						{/* profile course*/}
						<p className="relative text-left left-[25%] mb-1 max-w-[75%]">
							{props.course}
						</p>
						{/* profile details*/}
						<p className="relative text-left left-[25%] mb-1  max-w-[75%]">
							{props.details}
						</p>
						{/* profile batch*/}
						<p className="relative text-left left-[25%] max-w-[75%]">{props.batch}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfileCard;
