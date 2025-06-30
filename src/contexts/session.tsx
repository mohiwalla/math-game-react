import { createContext } from "react"
import { SessionContextProps } from "@/types/session"

export const SessionContext = createContext<SessionContextProps | null>(null)
