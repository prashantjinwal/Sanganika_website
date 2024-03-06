import teachers, {
	president,
	sec,
	graphic,
	pr,
	excu,
	webH,
} from "../assets/Team";
import CardCouncil from "../components/dymanic/CardCouncil";
import Cardstyle from "../components/dymanic/CardTeac";
import Card2 from "../components/dymanic/Card2ST";
import ExCard from "../components/dymanic/CardEX";
import CardPR from "../components/dymanic/CardPr";
import Graphics from "../components/dymanic/CardGC";
import WebHead from "../components/dymanic/CardWH";
function App() {
	return (
		<div className="App">
			<div className="mx-5 mt-[4rem] md:mx-[5rem]  ">
				<h2 className="text-[#BCD1D9] font-bold text-4xl ml-2 text-left mb-4 lg:text-6xl lg:mb-[5rem] ">
					Meet Us ,
				</h2>

				{/* <div className="lg:grid lg:grid-cols-2" > */}
				<div className="flex justify-center flex-col items-center">
					<div className="flex justify-center mb-3 gap-[5rem] lg:w-[50rem] md:w-[30rem] ">
						<img
							src={process.env.PUBLIC_URL + "/images/teamImages/groupic.png"}
							alt="group picture"
						/>
					</div>

					<div className="border-b-2 border-solid border-[#002A42] lg:flex lg:justify-center lg:items-center lg:flex-col ">
						<p className="text-white text-sm text-left mb-2 lg:text-lg lg:w-[50rem] ">
							Meet the driving force behind our Computer Science Society, where
							innovation meets leadership. Our dedicated council team, alongside our
							esteemed head teachers, works tirelessly to cultivate an environment of
							excellence and collaboration. Each member contributes a unique blend of
							expertise, passion, and vision, steering our department towards new
							horizons.
						</p>
						<p className="text-white text-sm text-left mb-8 lg:text-lg lg:w-[50rem] ">
							Together, we are not just shaping the future of technology; we are
							fostering a community where every idea has the power to thrive.
						</p>
					</div>
				</div>
				{/* </div> */}

				{/* Teachers  */}

				<div>
					<h2 className=" text-[#BCD1D9] font-semibold text-[3rem] my-4 mt-5 text-center">
						Teachers
					</h2>

					<div className="flex flex-wrap gap-[7rem] md:grid-cols-3  mt-2 justify-center">
						{teachers.map((teacher, index) => (
							<Cardstyle
								key={index}
								indexData={index}
								name={teacher.name}
								src={teacher.src}
								post={teacher.post}
							/>
						))}
					</div>

					{/*  */}

					<section className="py-7 lg:mx-[6rem] mt-[11rem] border-t-2 border-solid border-[#002A42]  ">
						<h2 className="text-[#BCD1D9] font-semibold text-[3rem] mb-10 text-center">
							Council 2023-24
						</h2>
						<h2 className=" text-[#BCD1D9] font-semibold text-xl text-left mt-0 mb-3 ">
							Presidents
						</h2>
						<div className="">
							<div className="flex flex-wrap gap-[2rem] justify-center lg:gap-[7rem] ">
								{president.map((ele, index) => (
									<CardCouncil
										key={index}
										indexData={index}
										name={ele.name}
										src={ele.src}
										linkdin={ele.linkdin}
										post={ele.post}
										ph={ele.ph}
									/>
								))}
							</div>
						</div>

						<div className="mt-[5em] border-t-2 border-solid border-[#002A42]  ">
							<h2 className=" text-[#BCD1D9] font-semibold text-xl text-left mt-7 mb-5 ">
								Secretory and treasurer
							</h2>
							<div className="flex flex-wrap gap-[2rem] justify-center lg:gap-[7rem]">
								{sec.map((ele, index) => (
									<Card2
										key={index}
										indexData={index}
										name={ele.name}
										src={ele.src}
										linkdin={ele.linkdin}
										post={ele.post}
										ph={ele.ph}
									/>
								))}
							</div>
						</div>

						{/* Executives */}

						<div className="mt-[5em] border-t-2 border-solid border-[#002A42]  ">
							<h2 className=" text-[#BCD1D9] font-semibold text-xl text-left mt-7 mb-5 ">
								Executives
							</h2>
							<div className="flex flex-wrap gap-[2rem] justify-center lg:gap-[6rem]   ">
								{excu.map((ele, index) => (
									<ExCard
										key={index}
										indexData={index}
										name={ele.name}
										src={ele.src}
										linkdin={ele.linkdin}
										post={ele.post}
										ph={ele.ph}
									/>
								))}
							</div>
						</div>

						{/* Public Relation Heads */}

						<div className="mt-[5em] border-t-2 border-solid border-[#002A42]  ">
							<h2 className=" text-[#BCD1D9] font-semibold text-xl text-left mt-7 mb-5 ">
								Public Relation Heads{" "}
							</h2>
							<div className="flex flex-wrap gap-[2rem] justify-center lg:gap-[15rem]   ">
								{pr.map((ele, index) => (
									<CardPR
										key={index}
										indexData={index}
										name={ele.name}
										src={ele.src}
										linkdin={ele.linkdin}
										post={ele.post}
										ph={ele.ph}
									/>
								))}
							</div>
						</div>

						{/* Graphics and Content Head*/}

						<div className="mt-[5em] border-t-2 border-solid border-[#002A42]  ">
							<h2 className=" text-[#BCD1D9] font-semibold text-xl text-left mt-7 mb-5 ">
								Graphics and Content Head{" "}
							</h2>
							<div className="flex flex-wrap gap-[2rem] justify-center lg:gap-[15rem]   ">
								{graphic.map((ele, index) => (
									<Graphics
										key={index}
										indexData={index}
										name={ele.name}
										src={ele.src}
										linkdin={ele.linkdin}
										post={ele.post}
										ph={ele.ph}
									/>
								))}
							</div>
						</div>

						{/* webHead */}

						<div className="mt-[5em] border-t-2 border-solid border-[#002A42]  ">
							<h2 className=" text-[#BCD1D9] font-semibold text-xl text-left mt-7 mb-5 ">
								{" "}
								Web Head{" "}
							</h2>
							<div className="flex flex-wrap gap-[2rem] justify-center lg:gap-[15rem]   ">
								{webH.map((ele, index) => (
									<WebHead
										key={index}
										indexData={index}
										name={ele.name}
										src={ele.src}
										linkdin={ele.linkdin}
										post={ele.post}
										ph={ele.ph}
									/>
								))}
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default App;
