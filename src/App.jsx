import {
	Hero,
	CustomerReviews,
	Footer,
	PopularProducts,
	Services,
	Subscribe,
	SuperQuality,
	SpecialOffer
} from "./sections/index";
import Navbar from "./components/Navbar"

function App() {
	return (
		<main className="relative">
			<Navbar />
			<section className="xl:padding-1 wide:padding-r"><Hero /></section>
			<section className="padding"><PopularProducts /></section>
			<section className="padding"><SuperQuality /></section>
			<section className="padding-x py-10"><Services /></section>
			<section className="padding"><SpecialOffer /></section>
			<section className="padding bg-pale-blue"><CustomerReviews /></section>
			<section className="padding-x sm:py-32 py-16 w-full"><Subscribe /></section>
			<section className="padding-x padding-t bg-black pb-8 text-white-400">
				<Footer />
			</section>
		</main>
	);
}

export default App;
