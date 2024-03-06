import React from "react";

function Graphics(props) {
	return (
		<div className="mt-2 mx-2 ">
			<div className="flex justify-center">
				<img className="h-[7rem]" src={process.env.PUBLIC_URL + props.src} />
			</div>
			<section className=" text-white text-md flex items-center gap-2 flex-col">
				<span>{props.name}</span>
				<button className="px-[1rem] py-[.3rem] rounded-md a  bg-[#9747FF] text-white font-semibold ">
					{props.post}
				</button>

				<a className=" flex justify-center"  href={props.linkdin} target="_blank">
					<img src = {process.env.PUBLIC_URL + '/svg/linkedin.svg'} />
				</a>
				<span className="cursor-pointer flex gap-1 items-center">
					<img className="h-4" src={process.env.PUBLIC_URL + "/svg/phone.svg"} />
					<a className="text-sm text-white" href={`tel:+91 ${props.ph}`}>
						{props.ph}
					</a>
				</span>
			</section>
		</div>
	);
}

export default Graphics;
