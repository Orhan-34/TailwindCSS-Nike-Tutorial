import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

	return (
		<section
			id="home"
			className="w-full flex xl:flex-row flex-col  p-2 justify-center min-h-screen max-container"
		>
			<div className="flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 xl:w-2/5">
				<p className="text-orange-500">Our summer collections</p>
				<h1 className="relative text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold xl: bg-white z-10 pr-10 xl:whitespace-nowrap ">
					The New Arrival <br />{" "}
					<span className="text-orange-500 mt-3 inline-block">Nike</span> Shoes
				</h1>
				<p className="mt-5 mb-10 px-5 font-montserrat leading-5 text-slate-gray sm:max-w-sm">
					Discover stylish Nike arrivals, quality <br /> comfort, and innovation
					for your active life.
				</p>
				<Button label="Show Now" iconUrl={arrowRight} />
				<div className="flex justify-between gap-14 padding-t">
					{statistics.map((item) => (
						<div key={item.label} className="font-mono">
							<p className="font-bold text-4xl">{item.value}</p>
							<span className="text-sm text-gray-500 flex items-end">
								{item.label}
							</span>
						</div>
					))}
				</div>
			</div>
			<div className="relative items-center justify-center flex flex-1 xl:min-h-screen bg-primary max-xl:py-40 bg-hero bg-cover bg-center">
				<img
					src={bigShoeImg}
					alt="shoes"
					width={640}
					height={500}
					className="relative object-contain z-10"
				/>
				<div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
					{shoes.map((shoe) => (
						<div key={shoe.bigShoe}>
							<ShoeCard
								imgUrl={shoe}
								changeBigShoe={(shoe) => setBigShoeImg(shoe)}
								bigShoeImg={bigShoeImg}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
