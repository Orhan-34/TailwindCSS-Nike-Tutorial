import ProductsCard from "../components/ProductsCard";
import { products } from "../constants";

const PopularProducts = () => {
	return (
		<section id="products" className="max-container max-sm:mt-12">
			<div className="flex flex-col justify-start gap-5">
				<h1 className="relative text-4xl font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold xl: bg-white z-10 pr-10 xl:whitespace-nowrap ">
					Our <span className="text-orange-500 mt-3 inline-block">Popular</span>{" "}
					Products
				</h1>
				<p className="mt-5 mb-10 px-4 font-montserrat leading-5 text-slate-gray sm:max-w-xl">
					Experience top-notch quality and style with our sought-after
					selections. Discover a world of comfort, design, and value.
				</p>
			</div>
			<div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 sm:gap-4 gap-14">
				{products.map((product) => (
					<div key={product.imgURL}>
						<ProductsCard {...product} />
					</div>
				))}
			</div>
		</section>
	);
};

export default PopularProducts;
