import { Link } from "react-router-dom"
import Logo from "./logo"
import { GlobalCommandSearch } from "./command"

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b backdrop-blur">
			<nav>
				<div className="container mx-auto flex flex-wrap items-center justify-between py-4">
					<Link to="/admin/dashboard" className="flex items-center">
						<Logo />
					</Link>

					<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
						<ul className="flex flex-row gap-2">
							<li className="flex gap-2">
								<GlobalCommandSearch />
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
