import { Link } from "react-router-dom";

const TmEventCard = ({ event }) => {
	return (
		<div
			key={event.id}
			className=" bg-[#182231] flex flex-col p-3 rounded-2xl border-solid border-[1px] neon-bar border-[#62C6FF] relative  w-[95%] md:w-[18rem] mx-auto"
		>
			<div className="neon-bar overflow-hidden rounded-lg filter drop-shadow-2xl">
				<img
					src={process.env.PUBLIC_URL + event.poster}
					alt=""
					className="hover:scale-110 transition duration-300 ease-in-out"
				/>
			</div>
			<div className="text-white mt-1 text-wrap max-w-[95%] mb-auto">
				<h1 className=" font-medium text-lg mt-1">{event.name}</h1>
				<p className=" mt-2 text-sm font-normal">{event.headline}</p>
				<div className="mt-2 text-sm font-normal">
					<span>{event.date}</span> <br />
					<span>{event.time}</span>
				</div>
			</div>
			<div className="text-white flex gap-1 mt-4">
				<Link
					to={`/tm/${event.id}`}
					className=" flex-1 px-2 py-[.7rem] bg-[#0865FE] filter drop-shadow-2xl rounded-md mr-2 text-sm text-center hover:bg-blue-700 transition duration-300 ease-in-out"
				>
					Details
				</Link>
				{event.register && (
					<Link
						to={event.register}
						className=" flex-1 px-2 py-[.7rem] border-solid border-[1px] border-[#0865FE] filter rounded-md text-sm shadow-inner text-center hover:border-opacity-30 transition duration-300 ease-in-out"
					>
						Register
					</Link>
				)}
			</div>
		</div>
	);
};

export default TmEventCard;
