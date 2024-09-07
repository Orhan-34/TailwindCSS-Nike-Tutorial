const ShoeCard = ({ imgUrl, changeBigShoe, bigShoeImg }) => {
	const handleClick = () => {
		if (bigShoeImg !== imgUrl.bigShoe) {
			changeBigShoe(imgUrl.bigShoe);
		}
	};
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			className={`border-2 rounded-xl ${
				bigShoeImg === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"
			} cursor-pointer max-sm:flex-1 items-end`}
			onClick={handleClick}
		>
			<div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl max-sm:p-4 ">
				<img
					src={imgUrl.thumbnail}
					alt="shoes collection"
					width={130}
					height={103}
					className="object-contain"
				/>
			</div>
		</div>
	);
};

export default ShoeCard;
