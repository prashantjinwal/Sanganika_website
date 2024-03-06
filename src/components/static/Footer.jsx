import React from "react";
const Footer = () => {
	return (
		<footer className="flex-shrink-0 text-white border-t-2 border-[#5DBBF0]">
			<div className="grid grid-rows-3 px-[1.5rem] gap-[2rem]">
				<div>
					<h3 className="border-b-2 border-dashed pb-[1rem]">About Us</h3>
					<p className="mt-3"> Sanganika - Computer Science Department Society</p>
					<p>Deen Dayal Upadhyaya College</p>
					<p>Dwarka Sector - 3, New Delhi 110078</p>
				</div>
				<div>
					<h3 className="border-b-2 border-dashed pb-[1rem]">Follow us at</h3>
					<ul className="flex list-none p-0 space-x-6 w-fit">
						<li>
							<a target="_blank" href="https://www.instagram.com/sanganika_dduc/">
								<img
									src={process.env.PUBLIC_URL + "/svg/instagram.svg"}
									className=" mt-3"
									alt="not found"
								/>
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.facebook.com/sanganika/">
								<img
									src={process.env.PUBLIC_URL + "/svg/facebook.svg"}
									className="mt-3"
									alt="not found"
								/>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								href="https://www.linkedin.com/company/sanganika-the-computer-science-society-dduc/"
							>
								<img
									src={process.env.PUBLIC_URL + "/svg/linkedin.svg"}
									className="mt-3"
									alt="not found"
								/>
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="border-b-2 border-dashed pb-[1rem]">Contact Us</h3>
					<span className="contac-1 flex space-x-2 my-4">
						<img src={process.env.PUBLIC_URL + "/svg/gmail.svg"} alt="not found" />
						<a href="mailto:sanganika.ddu@gmail.com">sanganika.ddu@gmail.com</a>
					</span>
					<span className="contac-2 flex space-x-4">
						<img src={process.env.PUBLIC_URL + "/svg/phone.svg"} alt="not found" />
						<a href="tel:+91 91825-08492">+91 91825-08492</a>
					</span>
				</div>
			</div>
			<p className="text-[#5DBBF0] border-t-2 border-[#C8D0D9] text-center pt-4">
				copyright &copy; sanganika, 2023, All Rights reserved
			</p>
		</footer>
	);
};
export default Footer;
