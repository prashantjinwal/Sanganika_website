import React, { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "../stylesheet/unreset.css";

function TMEvent({ events }) {
	console.log(events);
	const { id } = useParams();
	const [parsed, setParsed] = useState("");
	const event = events?.filter((item) => item.id === id)[0];
	useEffect(() => {
		if (!event) return;
		fetch(process.env.PUBLIC_URL + event?.description)
			.then((res) => res.text())
			.then((data) => {
				setParsed(DOMPurify.sanitize(marked(data)));
			});
	}, [event]);

	return (
		<>
			{event ? (
				<div className="flex flex-col p-[2rem] text-white bg-gradient-to-l from-[#ff075a17] to-[#0062ff22]">
					<img
						className="self-center rounded-[3rem] neon-box max-w-[50%] aspect-square"
						src={process.env.PUBLIC_URL + event?.poster}
					/>
					<div dangerouslySetInnerHTML={{ __html: parsed }}></div>

					<div className="flex gap-[1rem] my-[3rem]">
						{event.register && (
							<Link
								to={event?.register}
								className="bg-[#0865FE] text-white px-[1rem] py-[.4rem] rounded-lg w-fit"
							>
								Register
							</Link>
						)}
						<Link
							to="/tm"
							className="border-[#0865FE] border-2 text-white px-[1rem] py-[.4rem] rounded-lg w-fit"
						>
							See More Events
						</Link>
					</div>
					{!event.register && (
						<span className="">
							<b>Note :- </b> Registeration of this event has not started yet!
						</span>
					)}
				</div>
			) : (
				<Navigate to="/tm" />
			)}
		</>
	);
}

export default TMEvent;
