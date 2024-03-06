export default function SemesterContainer({
	index,
	isShown,
	setShown,
	current,
	data,
	course,
}) {
	const { time_table, subjects } = data;
	// check if the current accounr need to be shown
	const shown = index === isShown;
	return (
		<div className="sem-container border-[#002A42] flex flex-col gap-5">
			{/* accordian header */}
			<div className="header flex justify-between py-5 items-center">
				<h1> {course} Semester {data.sem}</h1>

				{/* accourdian button with rotation css */}
				<div
					className={`transition-transform duration-[.3s] ease-in-out cursor-pointer p-[1rem] text-center rounded-full bg-[#002A42] flex items-center justify-center ${
						!shown ? "rotate-180" : ""
					}`}
					onClick={() => setShown(index)}
					// set the current index to be shown
				>
					{/* svg for arrow */}
					<svg
						width="25"
						height="15"
						viewBox="0 0 25 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0.822149 0.936773C1.96164 -0.266025 3.86044 -0.317344 5.06324 0.822149L12.5 7.86751L19.9368 0.822149C21.1396 -0.317344 23.0384 -0.266025 24.1779 0.936773C25.3174 2.13957 25.266 4.03837 24.0632 5.17787L15.251 13.5263C13.7082 14.9879 11.2918 14.9879 9.74903 13.5263L0.936773 5.17787C-0.266025 4.03837 -0.317344 2.13957 0.822149 0.936773Z"
							fill="#BCD1D9"
						/>
					</svg>
				</div>
			</div>

			{/* accordian content */}
			<div className={`${shown ? "flex" : "hidden"} flex-col gap-5 bg-[#00020F]`}>
				{/* display time table */}
				<hr className="border-none h-[1px] bg-[#002A42]" />
				<h4>Time Table</h4>
				<img src={time_table} alt="time table" className="rounded-md w-[50rem]" />
				<li>
					Time Table download link 🔗 :{" "}
					<a href={time_table} target="_blank">
						sem-{data.sem}_time_table
					</a>
				</li>

				{/* display subject wise content */}
				{subjects.map((sub, index) => {
					return (
						<div key={index} className="flex flex-col gap-4">
							{/* subject name */}
							<h4>{sub.name}</h4>

							{/* books container display books wubject wise*/}
							<li>List of books 📚 :- </li>
							<div className="books flex flex-col gap-[5rem] border border-[#002A42] p-[3rem] rounded-xl">
								{sub.books.map((book, index) => {
									return (
										// book photo and its name
										<div key={index} className="book flex items-center gap-[1.3rem]">
											<img
												src={book.img}
												atl={book.name}
												className="h-[150px] rounded-md border border-[#BCD1D9]"
											/>
											<a className="text-inherit" target="_blank" href={book.url}>
												{book.name}
											</a>
										</div>
									);
								})}
							</div>

							{/* display pyq subject wise, if pyq are not there then does not display them*/}
							{sub.pyqs.length !== 0 ? (
								<>
									<li>Previous Year Question Paper 📰 :- </li>
									<div>
										{sub.pyqs.map((pyq, index) => {
											return (
												<li key={index} className="nested-li">
													<a target="_blank" href={pyq.url}>
														PYQ {sub.name} - {pyq.year}
													</a>
												</li>
											);
										})}
									</div>
								</>
							) : (
								<></>
							)}

							{/* display notes subject wise, if botes are not there then does not display them */}
							{sub.notes.length !== 0 ? (
								<>
									<li>Notes 📚 :- </li>
									<div>
										{sub.notes.map((note, index) => {
											return (
												<li key={index} className="nested-li">
													<a target="_blank" href={note.url}>
														{note.topic}
													</a>
												</li>
											);
										})}
									</div>
								</>
							) : (
								<></>
							)}

							{/* guidelines */}
							<li>
								Guidlines 🔗 :-{" "}
								<a target="_blank" href={sub.syllabus}>
									sem-{data.sem}-{current}-{sub.name}
								</a>
							</li>

							{/* pracical link, does not display of practical link not spefied */}
							{sub.practical ? (
								<li>
									Practicals Github Repository 🔗 :-{" "}
									<a target="_blank" href={sub.practical}>
										sem-{data.sem}-{current}-{sub.name}-practicals
									</a>
								</li>
							) : (
								<></>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
