import { EmployeeActivity } from "@/types/employee-activity"
import { EmoloyeeAttendanceData } from "@/types/employee-attendance"
import { EmployeePerformanceData } from "@/types/employee-performance"

export const recentActivities: EmployeeActivity[] = [
	{
		id: 1,
		employeeId: 1,
		type: "login",
		description: "Logged in for the day",
		timestamp: "2023-06-10T08:02:15",
	},
	{
		id: 2,
		employeeId: 3,
		type: "meeting",
		description: "Started team meeting",
		timestamp: "2023-06-10T09:00:00",
	},
	{
		id: 3,
		employeeId: 5,
		type: "task_completed",
		description: "Completed quarterly report",
		timestamp: "2023-06-10T10:15:30",
	},
	{
		id: 4,
		employeeId: 2,
		type: "break",
		description: "Started lunch break",
		timestamp: "2023-06-10T12:00:00",
	},
	{
		id: 5,
		employeeId: 7,
		type: "leave_request",
		description: "Requested time off next week",
		timestamp: "2023-06-10T13:45:22",
	},
	{
		id: 6,
		employeeId: 4,
		type: "logout",
		description: "Logged out for the day",
		timestamp: "2023-06-10T17:05:10",
	},
	{
		id: 7,
		employeeId: 6,
		type: "task_completed",
		description: "Deployed new feature",
		timestamp: "2023-06-10T16:30:00",
	},
	{
		id: 8,
		employeeId: 1,
		type: "meeting",
		description: "Client consultation call",
		timestamp: "2023-06-10T14:20:15",
	},
]

export const attendanceData: EmoloyeeAttendanceData[] = [
	{ date: "Monday", present: 45, absent: 2, late: 3 },
	{ date: "Tuesday", present: 47, absent: 1, late: 2 },
	{ date: "Wednesday", present: 48, absent: 0, late: 2 },
	{ date: "Thursday", present: 46, absent: 3, late: 1 },
	{ date: "Friday", present: 44, absent: 4, late: 2 },
	{ date: "Saturday", present: 20, absent: 0, late: 0 },
	{ date: "Sunday", present: 5, absent: 0, late: 0 },
]

export const performanceData: EmployeePerformanceData[] = [
	{ month: "Jan", productivity: 85, efficiency: 82, quality: 90 },
	{ month: "Feb", productivity: 87, efficiency: 85, quality: 88 },
	{ month: "Mar", productivity: 89, efficiency: 88, quality: 91 },
	{ month: "Apr", productivity: 86, efficiency: 87, quality: 90 },
	{ month: "May", productivity: 88, efficiency: 90, quality: 92 },
	{ month: "Jun", productivity: 90, efficiency: 88, quality: 93 },
]
