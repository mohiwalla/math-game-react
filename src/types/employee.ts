export type Employee = {
	id: number
	name: string
	position: string
	department: string
	email: string
	phone: string
	status: "active" | "on-leave" | "terminated"
	avatar?: string
	availability: "online" | "away" | "busy" | "offline"
	performance: number
	attendanceRate: number
	joinDate: string
}
