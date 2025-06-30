import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { API_ENDPOINT, DEV } from "./config"
import { BaseResponse } from "@/types/response"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export async function fetchAPI<T>(
	url: string,
	config: RequestInit = {}
): Promise<T & BaseResponse> {
	config.credentials = "include"
	config.headers = {
		"Content-Type": "application/json",
		...(config.headers || {}),
	}

	try {
		const req = await fetch(API_ENDPOINT + url, config)
		const contentType = req.headers.get("content-type") || ""
		const isJSON = contentType.toLowerCase().includes("application/json")

		const res = await req.json()

		if (!isJSON) {
			throw new Error("Server responded non-JSON.")
		}

		return { ok: res.ok, text: "", ...res } as T & BaseResponse
	} catch (e) {
		if (DEV) {
			console.error(e)
		}

		return {
			ok: false,
			text: "Something went wrong.",
		} as T & BaseResponse
	}
}

export function formatSeconds(time: number) {
	const minutes = String(Math.floor(time / 60)).padStart(2, "0")
	const seconds = String(time % 60).padStart(2, "0")
	return `${minutes}:${seconds}`
}

export function compute(a: number, b: number, operator: string) {
	switch (operator) {
		case "+":
			return a + b
		case "-":
			return a - b
		case "*":
			return a * b
		case "/":
			return Math.floor(a / b) // assuming integer math
		default:
			return NaN
	}
}
