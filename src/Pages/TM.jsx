import TmEventCard from "../components/dymanic/TMEventCard";
function TM({ events }) {
	return (
		<div className="text-white flex flex-col items-center bg-gradient-to-l from-[#ff075a17] to-[#0062ff22] p-[2rem]">
			{/* logos */}
			<div className="tm-logos flex h-[200px] items-center self-center gap-[3rem]">
				<img
					className="h-full"
					src={process.env.PUBLIC_URL + "/images/home/logo.png"}
				/>
				<span className="text-3xl">X</span>
				<img
					className="h-[70%]"
					src={process.env.PUBLIC_URL + "/svg/TM-white.svg"}
				/>
			</div>
			{/* welcome message */}
			<div className="tm-welcome flex flex-col items-center neon text-[5rem] mt-[3rem]">
				<span className="inika-regular text-2xl">
					Computer Science Department Presents
				</span>
				<span className="inder-regular">Tech Marathon'24</span>
				<span className="inder-regular text-[2rem]">
					2<sup>nd</sup> - 3<sup>rd</sup> march
				</span>
			</div>

			{/* schedule */}
			<div className="flex flex-col self-center items-center mt-[3rem] p-[2rem] container">
				<span className="tm-events text-[3rem] mb-[2rem] neon">Schedule</span>
				<img
					className="rounded-3xl neon-box"
					src={process.env.PUBLIC_URL + "/images/TM/Schedule.png"}
				/>
				<a
					className="neon-button"
					href={process.env.PUBLIC_URL + "/images/TM/Schedule.png"}
					download={process.env.PUBLIC_URL + "/images/TM/Schedule.png"}
				>
					Download Schedule
				</a>
			</div>

			{/* events registeration text*/}
			<div className="tm-events inder-regular neon text-[3rem] flex items-center gap-[2rem] self-stretch px-[3rem] justify-center">
				<hr className="bg-white flex-grow h-[2px] neon-bar" />
				<span>OUR EVENTS</span>
				<hr className="bg-white flex-grow h-[2px] neon-bar" />
			</div>
			{/* events registeration cards container*/}
			<div className="flex flex-wrap gap-[3rem] justify-center px-[3rem] mt-[3rem]">
				{events
					? events.map((item) => {
							return <TmEventCard event={item} key={item.id} />;
					  })
					: // skeleton loading
					  Array.from({ length: 6 }, () => 0).map((_, index) => {
							return (
								<div
									key={index}
									className="border-4 border-[#0062ff41] w-[300px] h-[400px] bg-[#2c466831] flex flex-col items-center rounded-3xl overflow-hidden p-[1rem] gap-[1rem]"
								>
									<div className="flex-grow bg-[#25303cc2] w-full rounded-xl aspect-square h-auto" />
									<div className="w-full flex flex-col gap-[.7rem]">
										<div className="h-[1.5rem] w-[50%] bg-[#25303C] rounded-lg " />
										<div className="h-[1.5rem] w-[80%] bg-[#25303C] rounded-lg " />
										<div className="h-[1.5rem] w-[30%] bg-[#25303C] rounded-lg " />
									</div>
									<div className="flex w-full gap-[5px]">
										<div className="h-[1.5rem] w-[50%] bg-[#2F415C] rounded-lg " />
										<div className="h-[1.5rem] w-[50%] bg-[#2F415C] rounded-lg " />
									</div>
								</div>
							);
					  })}
			</div>
		</div>
	);
}

export default TM;
