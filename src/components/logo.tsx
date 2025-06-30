import { name } from "@/lib/config"
import { cn } from "@/lib/utils"
import { Radical } from "lucide-react"

export default function Logo({
	className = "",
	...props
}: React.HTMLAttributes<HTMLSpanElement>) {
	return (
		<span {...props} className={cn("font-bold text-xl flex gap-1 items-center", className)}>
			<Radical size={19} strokeWidth={3} className="mb-2.5 -mr-2.5" />
			{name}
		</span>
	)
}
