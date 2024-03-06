const events = [
	{
		name: "Webgators",
		description1: `
      Everybody thinks they can be a web designer until they actually try – and here's your chance to prove it! Sanganika presents Webgators,`,
		description2:
			"a thrilling competition where creative minds and coding skills collide. Whether you're a coding artist or a design enthusiast, this is your platform to shine.",
		description3:
			"Organized under the umbrella of Tech Marathon '23, Webgators beckons Codechefs to cook up something amazing and compete for coveted cash prizes.",
		description4:
			"If web design and development are your forte, don't miss this opportunity to showcase your skills. The challenge is set, the stage is yours – code, design, and conquer! 💻✨ ",
		image: process.env.PUBLIC_URL + "/images/event/TM/M1.jpg",
	},
	{
		name: "TV Fandom Quiz",
		description1: `
      🎥 Calling all movie buffs and TV show enthusiasts! Sanganika presents "TV FANDOM QUIZ," a thrilling movie quiz competition in the heart of TECH MARATHON. Indulge your passion for Bollywood, Hollywood, web series, and more. The competition unfolds in two engaging rounds. `,
		description2:
			"Round 1 – Prelims: Rapid-fire MCQs on famous TV shows and web series.",
		description3:
			"Round 2 – Mains: Dive deep with 10 questions tailored to your Bollywood or Hollywood interests. ",
		description4:
			"Unleash your cinematic knowledge and compete for the title of the ultimate TV Fandom Quiz champion! ",
		image: process.env.PUBLIC_URL + "/images/event/TM/M2.jpg",
	},
	{
		name: "Tech Novateur",
		description1: `
      In a world teeming with ideas, Sanganika invites you to be the catalyst for the next big revolution! Technovateur is not just an event; it's an opportunity to present your groundbreaking tech-based idea that could reshape our lives.`,
		description2:
			"Round 1 kicks off with online PPT submissions, where your ideas will be scrutinized by discerning judges. The deadline for this creative endeavor is February 3rd.",
		description3:
			"Successful teams proceed to Round 2, the Presentation Round, an offline extravaganza where you have 5 minutes to pitch your innovation to a panel of judges, followed by a gripping 2-minute Q/A session. ",
		description4:
			"The stakes? Cash prizes worth ₹5000! 🚀 Seize this chance to turn your tech dreams into reality. Register now and let your ideas light up the future! 💡🔗  ",
		image: process.env.PUBLIC_URL + "/images/event/TM/M3.jpg",
	},
	{
		name: "Bumble Jumble",
		description1: `
      💥 Get ready for a brain-twisting adventure with Bumble Jumble! If you miss the satisfaction of rearranging jumbled words, this event is tailor-made for you. `,
		description2:
			"The event wiil comprise of two rounds filled with jumbled, buggy incomplete code waitiong for you to see the error of their ways...",
		description3:
			"Round 1 features 50 diverse questions to be solved in 30 minutes, with the top 3 competitors progressing to the Final Round. Round 2, face two jumbled or incomplete code questions in 60 minutes – C++ language allowed.",
		description4:
			"It's a fusion of nostalgia, coding, and problem-solving. If you're up for the challenge, unravel the mysteries of Bumble Jumble and showcase your coding acumen! 🤓💡",
		image: process.env.PUBLIC_URL + "/images/event/TM/M4.jpg",
	},
	{
		name: "Social Escapade",
		description1: `
      ⚓ Ready to embark on a thrilling journey of tech puzzles and social media challenges? Social Escapade, hosted by Sanganika, invites you to a treasure hunt like no other.`,
		description2:
			"Picture a stormy sea of obstacles, where your courage and wit transform you into a savvy navigator. Participants start at a common point facing diverse challenges – from tech puzzles to Instagram riddles.",
		description3:
			"Each solved puzzle unveils the next hurdle, leading you on an enthralling journey to the finish line. Scores and time are meticulously recorded, adding an edge to this offline adventure. ",
		description4:
			"With puzzles ranging from basic to brain-bending, participants, either solo or in teams of two, compete against time and each other. Hints, if needed, gradually unfold, keeping the excitement alive.  ",
		image: process.env.PUBLIC_URL + "/images/event/TM/M5.jpg",
	},
	{
		name: "PUBG",
		description1: `
      🔫 Gear up for an adrenaline-pumping online battleground in the world of PUBG! Life is akin to a PUBG game – face challenges, get knocked down, but always have your loved ones to revive you. `,
		description2:
			"This online gaming extravaganza is your chance to showcase your strategic prowess.It's not just a game; it's a test of skills, camaraderie, and the sweet taste of victory.",
		description3:
			"Join the virtual battlefield, move your fingers swiftly on the controls, and aim for that coveted Winner Winner Chicken Dinner! Exciting prizes await the champions. ",
		description4:
			"Don't just read about it; grab your gear, form your squad, and dive into the thrilling world of PUBG. ",
		image: process.env.PUBLIC_URL + "/images/event/TM/M6.jpg",
	},
	{
		name: "EPVR -Video Editing",
		description1: `
      🎬 Lights, Camera, Edit – E-PVR awaits your creative touch! 🖱✨. Sanganika, the Computer Science Society of DDUC is organising a video editing with a motion graphics competition.`,
		description2:
			"The rules are simple: register by February 3rd, receive raw footage and songs, and craft a mesmerizing video. Your editing prowess will be on display, judged on the use of typography, video effects, transitions, and originality. ",
		description3:
			"The challenge lies in creating a compelling narrative within the provided constraints. Internet use is allowed only during the download process, so prepare your tools beforehand.  ",
		description4:
			"Are you ready to edit, animate, and claim your spot among the video editing virtuosos? 🏆🎥  ",
		image: process.env.PUBLIC_URL + "/images/event/TM/M7.jpg",
	},
	{
		name: "Auction Of Bytes",
		description1: `
      💻 Crack the code, make the purchase – welcome to Auction of Bytes! 🤑Confused? Let's break it down.`,
		description2:
			"This unique event combines coding prowess with strategic purchasing. Teams of 3-4 members, including coding maestros and auctioneers, embark on a quest where coding questions are bought and then solved in a relay race. ",
		description3:
			"The catch? Auctioneers and coders are separated, communicating only through the live stream. Each team is armed with a currency amount to bid on coding questions. Failure to buy 4 questions spells elimination.  ",
		description4:
			"The top 3 teams completing all 4 questions the fastest emerge victorious. It's a test of strategy, communication, and coding speed. Are you up for the challenge? Dive into the Auction of Bytes, where coding meets commerce! 💬💡",
		image: process.env.PUBLIC_URL + "/images/event/TM/M8.jpg",
	},
	{
		name: "Code Benders",
		description1: `"Perfection is not attainable, but if we chase perfection we can catch excellence" -Vince Lombardi. Codechefs, cook up something extraordinary and stand a chance to win enticing cash prizes. 🌐✨  `,
		description2:
			"Now it's time for the most competitive event in the town beacuse it's on competitive programming... (Get it, competitive programming,, Competitive competition)",
		description3:
			"Code Benders is for the people who love solving programming problems.It is a straight up, all-or-nothing, 3-hour competition to test most aspects of your programming arsenal.",
		description4:
			" No prelims.No confusing round-wise systems.All we need is you to have a Codechef account and well prepared mind to tackle the questions.",
		image: process.env.PUBLIC_URL + "/images/event/TM/M9.jpg",
	},
	{
		name: "Tech Wars",
		description1: `
      💻 Brace yourself for "TECH WARS" by Sanganika – a tech knowledge showdown! Test your awareness of the tech industry's latest trends and developments. Round 1, the Prelims, is an elimination round featuring 30 objective-type questions assessing technical and aptitude abilities. `,
		description2:
			"The top 6 teams advance to Round 2, where a visual challenge awaits. Teams strategize, attempt questions, and compete for points. ",
		description3:
			"Each round delves into specific aspects like company names, CEOs, brands, and country origins. The competition peaks in Round 3 – Company Gleam, where teams dive into a five-minute study session about a given company. ",
		description4:
			"Questions follow, and teams strive for precision.Stay ahead in the tech game, showcase your knowledge, and conquer TECH WARS! ",
		image: process.env.PUBLIC_URL + "/images/event/TM/M10.jpg",
	},
	{
		name: "Design The Shades",
		description1: `
      🎨 Set your artistic spirit free at "Design the Shades." Sanganika invites you to unleash your inner digital artist who loves working with a few colors and make something. `,
		description2:
			"Armed with 10 colors and 3 hours, dive into the realm of Digital Artistry. Challenge yourself to create a masterpiece using MS Paint or any digital tool of your choice. ",
		description3:
			'Despite any jokes, MS Paint has the potential for artistic brilliance – Google "MS Paint Art" if you need convincing! Whether you\'re a seasoned artist or a beginner, this event is your canvas. ',
		description4:
			'Let your creativity flow, and paint the masterpiece that your mind envisions. Join the artistic extravaganza, showcase your skills, and make your mark at "Design the Shades."',
		image: process.env.PUBLIC_URL + "/images/event/TM/M11.jpg",
	},
	{
		name: "Ludo",
		description1: `
      🎲 Roll the dice and enter the world of Ludo! Life may not be a ludo dice, but this classic game teaches us to navigate through luck and strategy. `,
		description2:
			"Sanganika invites players of all ages to the Ludo battlefield, where counting, strategizing, and decision-making come together.  ",
		description3:
			"The vibrant board awaits, divided into four colors, each with its home area. Your mission: guide all four tokens home to claim victory. Ludo isn't just a game; it's a journey of interaction and learning. ",
		description4:
			'Gather your family and friends, roll the dice, and let the game begin. Who will be the first to shout, "Winner Winner Chicken Dinner"? It\'s time to find out and create memories on the ludo board! 🥳🎲 ',
		image: process.env.PUBLIC_URL + "/images/event/TM/M12.jpg",
	},
	{
		name: "Gamer Roulette",
		description1: `
      🎮 Ready to embrace the unpredictable thrill of gaming? Introducing Gamer Roulette – an event that spices up the gaming experience by leaving it all to chance. `,
		description2:
			"Prepare to showcase your gaming versatility as you might encounter diverse genres. Adaptability is key, and being proficient in multiple game types increases your odds of success. ",
		description3:
			"Each match-up unfolds in a thrilling single-elimination format, keeping the stakes high. With 3 rounds in every match-up, the strategy is straightforward – secure victory in 2 out of 3 games, and you're on your way to triumph.",
		description4:
			"Gamer Roulette promises an electrifying gaming experience. So, gear up, embrace the uncertainty, and let the games begin.",
		image: process.env.PUBLIC_URL + "/images/event/TM/M13.jpg",
	},
	// Add more event objects with name, description, image, etc.
];

export default events;
