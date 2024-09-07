import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
	return (
		<section
			id="about-us"
			className="flex justify-between items-center max-lg:flex-col gap-10 w-full"
		>
			<div className="flex flex-1 flex-col">
				<div className="flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 xl:w-2/5">
					<h1 className="relative text-4xl capitalize font-palanquin font-bold lg:max-w-lg">
						We Provide You
						<span className="text-orange-500 mt-3 inline-block">Super</span>{" "}
						<span className="text-orange-500 mt-3 inline-block">Quality</span>{" "}
						Shoes
					</h1>
					<p className="mt-4 lg:max-w-lg info-text ">
						Ensuring premium comfort and style, our meticulously crafted
						footwear is designed to elevate your experience, providing you with
						unmatched quality, innovation, and a touch of elegance.
					</p>
          <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-8">
					  <Button label="Show Now" iconUrl={arrowRight} />
          </div>
				</div>
			</div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="best-shoe-image" width={570} height={522} className="object-contain"/>
      </div>
		</section>
	);
};

export default SuperQuality;
