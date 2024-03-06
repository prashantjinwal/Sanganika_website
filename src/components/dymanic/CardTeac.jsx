import React from "react";

function Cardstyle(props) {
	return (
		<div className="mt-10 relative">
			<img
				className="h-[7rem] w-[7rem] aspect-square rounded-full border-2 border-slate-50 object-cover absolute top-0 left-[-10px]"
				src={process.env.PUBLIC_URL + props.src}
			/>
			<div className="grid mt-5 text-white">
				<span className="bg-[#62C6FF] rounded-sm text-black font-semibold py-2 ml-12 pr-10 w-[15rem] text-right ">
					{props.name}
				</span>
				<span className=" text-right pr-10 bg-transparent border border-solid rounded border-slate-100 rounded-l-xl text-xs mt-1 py-2 ml-12 pl-10 w-[15rem] ">
					{props.post}
				</span>
			</div>
		</div>
	);
}

export default Cardstyle;
