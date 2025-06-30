import { z } from "zod"
import {
	emailAddressMaxLength,
	ipAddressMaxLength,
	macAddressMaxLength,
	nameMaxLength,
	passwordMinLength,
	passwordMaxLength,
	phoneMaxLength,
} from "./index"

export const CreateEmployeeSchema = z.object({
	name: z
		.string()
		.min(3, {
			message: "Must be at least 3 characters.",
		})
		.max(nameMaxLength, {
			message: `Must be under ${nameMaxLength} characters.`,
		}),
	phone: z
		.string()
		.min(10, {
			message: "Invalid phone number.",
		})
		.max(phoneMaxLength, {
			message: `Number can't be longer than ${phoneMaxLength} characters.`,
		}),
	email: z
		.string()
		.min(1, {
			message: "Please fill to proceed.",
		})
		.email({
			message: "Invalid email.",
		})
		.max(emailAddressMaxLength),
	password: z
		.string()
		.min(passwordMinLength, {
			message: `Must be at least ${passwordMinLength} characters.`,
		})
		.max(passwordMaxLength, {
			message: `Must be under ${passwordMaxLength} characters.`,
		}),
	position: z
		.string()
		.min(1, {
			message: "Please fill to proceed.",
		})
		.max(50, {
			message: "Must be under 50 characters.",
		}),
	department: z
		.string()
		.min(1, {
			message: "Please fill to proceed.",
		})
		.max(50, {
			message: "Must be under 50 characters.",
		}),
	ip: z
		.string()
		.min(1, {
			message: "Please fill to proceed.",
		})
		.max(ipAddressMaxLength, {
			message: `Must be under ${ipAddressMaxLength} characters.`,
		}),
	macAddress: z
		.string()
		.min(1, {
			message: "Please fill to proceed.",
		})
		.max(macAddressMaxLength, {
			message: `Must be under ${macAddressMaxLength} characters.`,
		}),
})
