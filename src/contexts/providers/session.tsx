import { SessionContext } from "../session"
import useAuth from "@/hooks/use-auth"

export default function SessionProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const session = useAuth()

	return (
		<SessionContext.Provider value={{ session }}>
			{children}
		</SessionContext.Provider>
	)
}
