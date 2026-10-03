const blogPosts = [
	{
		id: 1,
		title: "A Beginner's Guide to Web Development",
		slug: "a-beginners-guide-to-web-development",
		content: "Web development begins with three core languages: HTML for structure, CSS for styling, and JavaScript for behavior. HTML organizes content into headings, paragraphs, lists, and images, while CSS controls colors, spacing, fonts, and layout across screens of every size. JavaScript adds interactivity, such as menus, forms, and dynamic updates. Start by building simple pages locally, then learn how browsers render them and how developer tools help you inspect problems. Responsive design, accessibility, and basic performance habits matter early on. Practice with small projects, read other people's code, and gradually introduce frameworks. Consistent effort turns scattered tutorials into genuine, lasting skill."
	},
	{
		id: 2,
		title: "How to Build Better Daily Habits",
		slug: "how-to-build-better-daily-habits",
		content: "Building better habits starts with making each action small enough to repeat without much debate. Instead of ambitious goals, choose a specific cue, a simple routine, and a reward you genuinely enjoy. Track your progress on a calendar so visible momentum keeps you moving. Expect imperfect days and design a way to return quickly rather than abandon the effort entirely. Connect habits to clear values so they feel meaningful instead of forced. Reduce friction by preparing your environment the night before. Over weeks, repetition does the heavy lifting, and what once required discipline becomes an automatic part of your day."
	},
	{
		id: 3,
		title: "Exploring the Power of JavaScript",
		slug: "exploring-the-power-of-javascript",
		content: "JavaScript is the language that makes web pages come alive. It responds to clicks and keystrokes, fetches data without reloading, animates elements, and validates forms before they are submitted. Because it runs in the browser, it can manipulate the document you see through the DOM while communicating with servers behind the scenes. Modern JavaScript adds modules, arrow functions, async and await, and strong tooling that keeps large codebases organized. Learning it well means understanding scope, closures, objects, and promises, then practicing by building small interactive features. Once those fundamentals feel natural, frameworks like React become easier to learn and apply."
	},
	{
		id: 4,
		title: "Five Ways to Improve Your Focus",
		slug: "five-ways-to-improve-your-focus",
		content: "Focus improves when your environment and your intentions agree with each other. First, define one clear task before you begin, because vague work invites wandering attention. Second, silence unnecessary notifications and keep your phone out of reach. Third, work in timed sessions with short breaks so your mind knows effort has a boundary. Fourth, organize your desk and desktop so you spend energy on the task rather than searching for files. Fifth, protect your sleep, since tired brains resist concentration no matter how motivated you feel. Small, deliberate adjustments, quietly repeated every single day, build a deeper concentration that lasts."
	},
	{
		id: 5,
		title: "The Basics of Responsive Design",
		slug: "the-basics-of-responsive-design",
		content: "Responsive design makes a single website feel natural on every device. It relies on flexible grids, images that scale, and CSS media queries that adjust layouts when the screen changes size. Start by designing mobile first, since the narrow layout forces you to prioritize content and interactions. Use relative units like percentages and rem values instead of fixed pixels, and test touch targets so buttons remain comfortable to tap. Breakpoints should follow your content, not arbitrary device numbers. Finally, check on real physical devices regularly, because browsers, zoom levels, and orientation changes reveal issues that a desktop preview never shows."
	},
	{
		id: 6,
		title: "Learning from Creative Mistakes",
		slug: "learning-from-creative-mistakes",
		content: "Creative mistakes are not failures to hide; they are information to study. When an idea does not work, ask what assumption was wrong, what you overlooked, and what surprised you. Documenting these questions turns a frustrating result into a lesson you can reuse. Teams that discuss missteps openly find better solutions faster, because hidden problems never get examined. Try small experiments so the cost of being wrong stays low, and separate your identity from your output so critique feels useful rather than personal. Over time, a healthy relationship with mistakes makes ambitious and daring work feel possible instead of risky."
	},
	{
		id: 7,
		title: "A Simple Introduction to Next.js",
		slug: "a-simple-introduction-to-nextjs",
		content: "Next.js is a React framework that handles the parts every serious application eventually needs. It offers file based routing, server rendering for faster first loads, and built in support for images, fonts, and metadata. Data can be fetched on the server, keeping secrets out of the browser and shrinking what users must download. When interactivity is required, client components pick up where the server leaves off. Next.js also provides clear patterns for deployments, caching, and environment variables, so teams spend time on features instead of configuration. Start with a small page, then grow into its data, rendering, and caching options."
	},
	{
		id: 8,
		title: "Why Clean Code Matters",
		slug: "why-clean-code-matters",
		content: "Clean code is code another person can read, trust, and change without fear. It favors clear names over clever abbreviations, small functions over long scripts, and consistent formatting over personal style. When logic is easy to follow, reviews get faster, bugs surface earlier, and new team members contribute sooner. Clean code is not about looking professional; it is about reducing the cost of every future change. Comments should explain why a decision was made, not what the line already says. Tests and documentation support the effort, but honesty, simplicity, and respect for the reader remain the foundation of maintainable software."
	},
	{
		id: 9,
		title: "Designing a More Useful Workspace",
		slug: "designing-a-more-useful-workspace",
		content: "A useful workspace removes friction between you and the work that matters. Arrange your desk so frequently used tools stay within easy reach and everything else is stored away. Lighting should reduce eye strain, and your chair should support long sessions without pain. Separate zones for focused work, communication, and breaks help your brain switch modes intentionally. Keep a notepad nearby to catch stray thoughts before they become distractions. Digital clutter deserves the same attention: close unused tabs, tidy your desktop, and organize files. Small, thoughtful choices made consistently compound into many hours of calmer, steadier productivity every single week."
	},
	{
		id: 10,
		title: "Understanding APIs for Beginners",
		slug: "understanding-apis-for-beginners",
		content: "An API is a contract that lets two programs talk without knowing each other's inner details. You send a request with a method, a URL, and sometimes headers or a body, and you receive a response, usually JSON, describing the result. Common methods like GET, POST, PUT, and DELETE map to reading, creating, updating, and removing data. Status codes tell you what happened, from success to not found to server error. Practice with free public APIs, handle failures gracefully, and always respect rate limits. Once you understand this request and response pattern, most online web services stop feeling so mysterious."
	},
	{
		id: 11,
		title: "The Value of Reading Every Day",
		slug: "the-value-of-reading-every-day",
		content: "Reading a little every day compounds quietly. Twenty focused minutes add up to dozens of books a year, and each book hands you vocabulary, models, and perspectives you could not have invented alone. Reading also trains sustained attention, a skill that scrolling steadily erodes. Choose material slightly above your current level so you stretch without frustration, and vary genres to keep your thinking flexible. Keep notes on passages that strike you, then revisit them later to see how your understanding changes. Most importantly, read widely, consistently, and with genuine curiosity rather than waiting for perfect conditions to arrive every time."
	},
	{
		id: 12,
		title: "Getting Started with Git",
		slug: "getting-started-with-git",
		content: "Git tracks changes to your code so you can experiment without fear of losing work. Begin by learning a small set of commands: status to see where you stand, add to stage changes, commit to save a snapshot, and log to review history. Branches let you develop features separately before merging them back. When something breaks, diff and restore help you understand what changed. Commit messages should explain intent clearly, because history becomes documentation. Practice in a personal repository first, push your work to a remote repository for backup, and soon collaboration workflows will make far more sense to you."
	},
	{
		id: 13,
		title: "How Color Changes a Website",
		slug: "how-color-changes-a-website",
		content: "Color shapes mood, hierarchy, and readability before a visitor reads a single sentence. Warm tones feel energetic, cool tones feel calm, and high contrast draws the eye toward actions that matter. A limited palette creates harmony; too many colors create confusion. Always check text contrast against its background, since beautiful palettes can still be unreadable for many users. Define colors as reusable variables so updates stay consistent across pages. Remember that color is never the only signal available, so pair it with clear icons or descriptive labels. Thoughtful, deliberate color choices make interfaces clearer, faster, and far more welcoming overall."
	},
	{
		id: 14,
		title: "Making Time for Personal Projects",
		slug: "making-time-for-personal-projects",
		content: "Personal projects rarely survive on spare time, because spare time never appears. Instead, schedule a fixed block on your calendar and defend it like an appointment. Reduce the size of the first step until starting feels effortless: open the file, write one paragraph, draw one screen. Track progress visibly with a list or a calendar streak, since momentum is easier to maintain than to create. Say no to lower priorities during busy seasons, and accept slower weeks without quitting entirely. Consistency, rather than intensity, is ultimately the only thing that carries an ambitious side project all the way to completion."
	},
	{
		id: 15,
		title: "What Makes a Great Blog Post",
		slug: "what-makes-a-great-blog-post",
		content: "A great blog post respects the reader's time while offering something genuinely useful. It opens with a clear promise, so people know what they will gain. Short paragraphs and descriptive headings create a rhythm that is easy to scan. Examples ground abstract claims, and honest caveats build trust where certainty would feel false. Each section should answer one question and lead naturally to the next. End with a summary or a concrete next step rather than a vague ending. Finally, edit ruthlessly: cutting a full third of the first draft always makes all the remaining words much sharper and clearer."
	}
];

export default blogPosts;
