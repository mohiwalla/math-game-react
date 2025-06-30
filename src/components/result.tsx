"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Clock, RotateCcw, Trophy } from "lucide-react"
import { formatSeconds } from "@/lib/utils"

type ResultProps = {
	result: {
		correct: number
		incorrect: number
		questions: {
			statement: string
			timeTaken: number
			userAnswer: number
			actualAnswer: number
		}[]
	}
	totalTime: number
	onRestart: () => void
	type: string
	level: number
}

export default function Result({
	result,
	totalTime,
	onRestart,
	type,
	level,
}: ResultProps) {
	const totalQuestions = result.correct + result.incorrect
	const accuracy = Math.round((result.correct / totalQuestions) * 100)
	const averageTime = Math.round(totalTime / totalQuestions)

	function getPerformanceColor(accuracy: number) {
		if (accuracy >= 90) return "text-green-600"
		if (accuracy >= 70) return "text-yellow-600"
		return "text-red-600"
	}

	function getPerformanceEmoji(accuracy: number) {
		if (accuracy >= 90) return "🏆"
		if (accuracy >= 70) return "💪"
		return "👍"
	}

	function getLevelDisplay(level: number) {
		return ["Easy 🥰", "Medium 🤓", "Hard 😤", "Devil 😈"][level]
	}

	return (
		<div className="max-w-2xl mx-auto space-y-6">
			<Card>
				<CardHeader className="text-center">
					<div className="flex items-center justify-center gap-2">
						<Trophy className="size-6 text-yellow-500" />
						<CardTitle className="text-2xl">
							Quiz Complete!
						</CardTitle>
					</div>

					<div className="flex gap-2 align-center justify-center">
						<p className="text-muted-foreground capitalize">
							{type} Questions
						</p>

						<Badge className="select-none">
							{getLevelDisplay(level)}
						</Badge>
					</div>
				</CardHeader>

				<CardContent>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
						<div className="space-y-1">
							<div className="flex items-center justify-center gap-1">
								<CheckCircle className="size-4 text-green-600" />
								<span className="text-2xl font-bold text-green-600">
									{result.correct}
								</span>
							</div>

							<p className="text-sm text-muted-foreground">
								Correct
							</p>
						</div>

						<div className="space-y-1">
							<div className="flex items-center justify-center gap-1">
								<XCircle className="size-4 text-red-600" />
								<span className="text-2xl font-bold text-red-600">
									{result.incorrect}
								</span>
							</div>

							<p className="text-sm text-muted-foreground">
								Incorrect
							</p>
						</div>

						<div className="space-y-1">
							<div className="flex items-center justify-center gap-1">
								<span
									className={`text-2xl font-bold ${getPerformanceColor(
										accuracy
									)}`}
								>
									{accuracy}%
								</span>

								<span className="text-lg">
									{getPerformanceEmoji(accuracy)}
								</span>
							</div>

							<p className="text-sm text-muted-foreground">
								Accuracy
							</p>
						</div>

						<div className="space-y-1">
							<div className="flex items-center justify-center gap-1">
								<Clock className="size-4 text-blue-600" />
								<span className="text-2xl font-bold text-blue-600">
									{formatSeconds(totalTime)}
								</span>
							</div>

							<p className="text-sm text-muted-foreground">
								Total Time
							</p>
						</div>
					</div>

					<div className="mt-6 text-center">
						<p className="text-sm text-muted-foreground mb-4">
							Average time per question:{" "}
							<span className="font-semibold">
								{formatSeconds(averageTime)}
							</span>
						</p>

						<Button onClick={onRestart} className="gap-2">
							<RotateCcw className="size-4" />
							Try Again
						</Button>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-lg">Question Details</CardTitle>
				</CardHeader>

				<CardContent>
					<div className="grid grid-cols-2 gap-4">
						{result.questions.map((question, index) => {
							const isCorrect =
								question.userAnswer === question.actualAnswer
							return (
								<div
									key={index}
									className="flex items-center justify-between p-3 rounded-lg border bg-card"
								>
									<div className="flex items-center gap-3">
										<div className="flex items-center gap-2">
											{isCorrect ? (
												<CheckCircle className="size-4 text-green-600" />
											) : (
												<XCircle className="size-4 text-red-600" />
											)}
											<span className="text-sm text-muted-foreground">
												{index + 1}.
											</span>
										</div>

										<div className="font-mono">
											<span className="font-semibold">
												{question.statement}
											</span>

											<span className="mx-2">=</span>

											<span
												className={
													isCorrect
														? "text-green-600"
														: "text-red-600"
												}
											>
												{question.userAnswer}
											</span>

											{!isCorrect && (
												<span className="text-muted-foreground">
													{" "}
													({question.actualAnswer})
												</span>
											)}
										</div>
									</div>

									<Badge
										variant="secondary"
										className="gap-1 select-none"
									>
										<Clock className="size-3" />
										{formatSeconds(question.timeTaken)}
									</Badge>
								</div>
							)
						})}
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
