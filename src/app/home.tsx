import FadeUp from "@/animations/fade-up"
import Logo from "@/components/logo"
import { description } from "@/lib/config"

export default function HomePage() {
	return (
		<FadeUp>
			<hgroup className="flex flex-col items-center">
				<Logo />
				<p className="text-muted-foreground">{description}</p>
			</hgroup>
		</FadeUp>
	)
}
