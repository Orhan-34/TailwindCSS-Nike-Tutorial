import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../constants/index";
const Navbar = () => {
	return (
		<header className="padding-8 py-8 absolute z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img src={headerLogo} alt="logo" width={130} height={29} />
				</a>
				<ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
					{navLinks.map((link) => (
						<li key={link.label}>
							<a href={link.href} className="font-montserrat leading-normal text-lg text-slate-gray">{link.label}</a>
						</li>
					))}
				</ul>
                <div className="hidden max-lg:block">
                    <a href="/">
                        <img src={hamburger} alt="menu-icon" width={25} height={25}/>
                    </a>
                </div>
			</nav>
		</header>
	);
};

export default Navbar;
