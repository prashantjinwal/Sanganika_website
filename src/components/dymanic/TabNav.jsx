export default function TabNav({ current, setCurrent, items }) {
	// tailwind utility class
	const className = "tab-nav flex flex-grow justify-center py-[1rem] cursor-pointer text-3xl bg-[#00020F] border-[#BCD1D9]";
	
	// classes to abe applied with tab is selected
	const activeClassName = " border-b-[2px] bg-transparent";

	// maps the tabs using items props
	// items = ["CS Hons", "PSCS"]
	return (
		<div className="flex">
			{items.map((item, index) => {
				return (
					<span
						onClick={() => setCurrent(item)}
						key={index}
						className={className + (current !== item ? activeClassName + (index === 0 ? ' rounded-br-lg border-r-[2px]' : ' rounded-bl-lg border-l-[2px]') : '') }
					>
						{item}
					</span>
				);
			})}
		</div>
	);
}
