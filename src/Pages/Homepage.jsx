import Sponser from "../components/static/Sponser";
const Homepage = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${process.env.PUBLIC_URL + "/images/home/dduc.png"})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "contain",
			}}
			className="flex flex-col bg-[#0D1117] sec-container text-white border-hidden pb-[4rem] gap-[4rem]"
		>
			<div className="relative bg-cover hero pt-[4rem]">
				<h1 className="text-4xl font-bold ml-[6%]">Let's get started</h1>
				<div className="flex box1 items-center justify-between px-[5%] ">
					<img
						src={process.env.PUBLIC_URL + "/images/home/logo.png"}
						className="w-[300px]"
						alt="not found"
					/>
					<p className="text-3xl parag-class">
						<b>N</b>urturing <b>M</b>inds, <b>I</b>gniting <b>I</b>nnovation :
						<br /> Our Computer Science Society, where
						<br />
						passion means proficiency in the digital
						<br />
						realm.
					</p>
				</div>
				<div className="px-[2rem] flex flex-col intro-box">
					<h1 className="text-4xl font-semibold mb-[3rem]">
						Introduction are in order....
					</h1>
					<span className="text-xl mb-[1rem]">
						welcome to <span className="text-2xl font-semibold">Sanganika</span>
					</span>
					<p className="text-lg box1-card2">
						A dynamic hub for technology enthusiasts, our society thrives on the
						fusion of creativity, curiosity, and collaboration. Whether you're a
						seasoned coder, a budding software engineer, or simply intrigued by the
						ever-evolving world of computing, Sanganika provides a space to connect,
						learn, and contribute. Join us on a journey of exploration, where we
						celebrate the boundless possibilities of computer science and foster a
						supportive network of like-minded individuals.
					</p>
				</div>
			</div>
			<div className="box2 flex flex-col px-[2rem] gap-[2rem]">
				<img
					src={process.env.PUBLIC_URL + "/images/home/us.png"}
					className="h-auto bg-cover"
					alt="not found"
				/>
				<div className="box2-card2 rounded-2xl flex flex-col space-y-5">
					<p className="text-2xl z-10">
						Here at <strong>Sanganika</strong>
					</p>
					<p className="text-lg">
						Our realm extends beyond the binary. We offer not just a platform for tech
						enthusiasts but a vibrant community that engages in a ever-so-fun-filled
						activities.From exciting excursions to englightening webinars, thrilling
						competitions to englightening seminars,we believe in balancing the
						technical with the enjoyable.Sanganika is not just a society; it's a place
						where passion meets play, and where you'll discover a myriad of
						experiences beyond the lines of code.Welcome to a community where bytes
						and bits come to life, and where the passion for technology ignites a
						shared sense of discovery.
					</p>
				</div>
				{/* <Sponser /> */}
				<Sponser />
			</div>
		</div>
	);
};
export default Homepage;
