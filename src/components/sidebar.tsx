import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Link, useLocation } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/lib/nav-links"

export default function Sidebar() {
	const route = useLocation().pathname

	return (
		<aside className="fixed top-[69px] z-30 hidden h-[calc(100vh-70px)] w-full shrink-0 md:sticky md:block">
			<ScrollArea className="h-full pr-2 lg:pb-9 pt-2 lg:pt-4">
				<div className="h-full w-full overflow-x-hidden font-medium text-muted-foreground space-y-1 p-1">
					{NAV_LINKS.map(({ title, href, ...rest }) => {
						return (
							<SidebarLink
								key={title}
								href={href}
								title={title}
								new={rest.new}
								route={route}
							/>
						)
					})}
				</div>

				<ScrollBar orientation="vertical" />
			</ScrollArea>
		</aside>
	)
}

function SidebarLink({
	href,
	title,
	new: isNew,
	route,
}: {
	href: string
	title: string
	new?: boolean
	route: string
}) {
	return (
		<Link
			to={href}
			className={cn(
				"!py-1.5 flex items-center gap-2 pl-3 rounded-md text-sm",
				route === href ? "text-primary bg-card" : "hover:bg-card"
			)}
		>
			{title}
			{isNew && <Badge variant="default">New</Badge>}
		</Link>
	)
}
