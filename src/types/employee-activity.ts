export type EmployeeActivity = {
	id: number
	employeeId: number
	type:
		| "login"
		| "logout"
		| "task_completed"
		| "break"
		| "meeting"
		| "leave_request"
	description: string
	timestamp: string
}
