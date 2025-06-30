import { Asterisk, Divide, Minus, Plus, Shuffle } from "lucide-react"

type NavLink = {
	title: string
	href: string
	new: boolean
	icon: React.ReactNode
}

export const NAV_LINKS: NavLink[] = [
	{
		title: "Addition",
		href: "/questions/addition",
		new: false,
		icon: <Plus />,
	},
	{
		title: "Subtraction",
		href: "/questions/subtraction",
		new: false,
		icon: <Minus />,
	},
	{
		title: "Multiplication",
		href: "/questions/multiplication",
		new: false,
		icon: <Asterisk />,
	},
	{
		title: "Division",
		href: "/questions/division",
		new: false,
		icon: <Divide />,
	},
	{
		title: "Random",
		href: "/questions/random",
		new: true,
		icon: <Shuffle />,
	},
]
