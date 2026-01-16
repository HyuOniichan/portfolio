import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import About from "@/components/About";
import Feedbacks from "@/components/Feedbacks";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<About />
				<Projects />
				<Experience />
				<Feedbacks />
				<Footer />
			</div>
		</main>
	);
}

// TODO:
// 1. After Hero section, create an About me section
// This will be a Comet Card (aceternity component) of my avatar, on the left
// The avatar should have border on the bottom
// Then increase opacity of the border from bottom to top
// Then insert my avatar (which with removed background) inside the Comet Card
// And a short bio on the right
// Refer to the previous portfolio (https://hyuoniichan.github.io/portfolio/)
// 2. The Grid section will serve as Projects showcase
// 3. Update project data
// 4. Follow the youtube video then add Todo later
// 5. Change hero background to aurora background (keep spotlight effects? - optional)
// 6. Responsive bug at projects section
// Try to resize to small window, the projects section looks buggy
// 7. Responsive nav menu (hamburger menu) for mobile view
// The links disappear when screen is small
// 8. Responsive avatar
// The avatar becomes oval at small enough screen
// 9. Update data/index.ts with my information
// Update real feedbacks (or gpt), work experience (reference in linkedin and CV)
// 10. Responsive problem with work experience section
// Text in smaller view should be bigger, and some imgaes are not aligned center?
// 11. Remove redundant projects (or fill up with some random projects)

// Done: 1, 2, 3, 8, 6
// Next: 4, 10
// Optional/Later: 5, 7, 9, 11