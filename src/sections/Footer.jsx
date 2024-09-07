import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
	return (
		<footer className="max-container">
			<div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
				<div className="flex flex-col items-start">
					<a href="/">
						<img
							src={footerLogo}
							alt="logo"
							width={150}
							height={46}
							className="m-0"
						/>
					</a>
					<p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
						Get shoes ready for the new term at your nearest Nike store. Find
						Your perfect Size In Store. Get Rewards
					</p>
					<div className="flex items-center gap-5 mt-8">
						{socialMedia.map((social) => (
							<div
								className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
								key={social.alt}
							>
								<img src={social.src} alt={social.alt} width={24} height={24} />
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
					{footerLinks.map((link) => (
						<div key={link.title}>
							<h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">{link.title}</h4>
							<ul>
								{link.links.map((l) => (
									<li key={l.name} className="font-montserrat text-base text-white-400 hover:text-slate-gray">
										<a href={l.link}>{l.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
