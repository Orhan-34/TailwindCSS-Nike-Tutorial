import Button from "../components/Button";
import { offer } from "../assets/images";

const SpecialOffer = () => {
	return (
		<section className="flex text-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
			<div className="flex-1">
				<img
					src={offer}
					alt="offer"
					width={773}
					height={687}
					className="object-contain w-full"
				/>
			</div>
			<div className="flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 xl:w-2/5">
				<h1 className="relative text-4xl font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold xl: bg-white z-10 pr-10 xl:whitespace-nowrap ">
					<span className="text-orange-500 mt-3 inline-block">Special</span>{" "}
					Offer
				</h1>
				<p className="mt-5 info-text">
					Embark on a shopping journey that redefines your experience with
					unbeatable deals. From premier selections to incredible savings, we
					offer unparalleled value that sets us apart.
				</p>
				<p className="mt-5 info-text">
					Navigate a realm of possibilities designed to fulfill your unique
					desires, surpassing the loftiest expectations. Your journey with us is
					nothing short of exceptional.
				</p>
        <div className="sm:mt-14 flex gap-4 ">
				<Button label="View Details" />
				<Button label="Learn more" backgrounColor='bg-white' borderColor='border-slate-gray' backgroundColor='bg-white'/>
        </div>
			</div>
		</section>
	);
};

export default SpecialOffer;
