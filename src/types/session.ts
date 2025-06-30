export type Session = {
	isLoading: boolean
	isAuthenticated: boolean
}

export type SessionContextProps = {
	session: Session
}
