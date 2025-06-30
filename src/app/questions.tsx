import FadeUp from "@/animations/fade-up"
import { Button } from "@/components/ui/button"
import { type FormEvent, useRef, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Power } from "lucide-react"
import { Input } from "@/components/ui/input"
import { compute, formatSeconds } from "@/lib/utils"
import Result from "@/components/result"

const symbols = ["+", "-", "*", "/"]

export default function Questions({
	type,
}: {
	type: "addition" | "subtraction" | "multiplication" | "division" | "random"
}) {
	let symbol = ""

	switch (type) {
		case "addition":
			symbol = symbols[0]
			break
		case "subtraction":
			symbol = symbols[1]
			break
		case "multiplication":
			symbol = symbols[2]
			break
		case "division":
			symbol = symbols[3]
			break
		default:
			symbol = symbols[Math.floor(Math.random() * 4)]
			break
	}

	const [answer, setAnswer] = useState("")
	const [currentQuestion, setCurrentQuestion] = useState<string | null>(null)
	const [result, setResult] = useState<{
		correct: number
		incorrect: number
		questions: {
			statement: string
			timeTaken: number
			userAnswer: number
			actualAnswer: number
		}[]
	}>({
		correct: 0,
		incorrect: 0,
		questions: [],
	})

	const questionsCount = result.correct + result.incorrect

	const [settings, setSettings] = useState<{
		level: number
		count: number
	}>({
		level: 1,
		count: 10,
	})

	const secondsIntervalRef = useRef<NodeJS.Timeout>(null)
	const [secondsElapsed, setSecondsElapsed] = useState(0)
	const [questionStartTime, setQuestionStartTime] = useState(0)

	function handleSubmit(e: FormEvent) {
		e.preventDefault()

		if (answer === "" || isNaN(Number.parseInt(answer))) {
			return
		}

		const [a, b] = currentQuestion!.split(symbol)
		const actualAnswer = compute(+a, +b, symbol)

		const isCorrect = +answer === actualAnswer
		const timeTaken = secondsElapsed - questionStartTime

		setResult({
			incorrect: result.incorrect + (isCorrect ? 0 : 1),
			correct: result.correct + (isCorrect ? 1 : 0),
			questions: [
				...result.questions,
				{
					timeTaken,
					statement: currentQuestion!,
					userAnswer: +answer,
					actualAnswer,
				},
			],
		})

		setAnswer("")

		const form = e.currentTarget as HTMLFormElement
		form.reset()

		changeQuestion()
	}

	function resetGame() {
		setResult({
			correct: 0,
			incorrect: 0,
			questions: [],
		})
		setCurrentQuestion(null)
		setSecondsElapsed(0)
		setAnswer("")
	}

	function changeQuestion() {
		if (!currentQuestion) {
			startTimer()
		}

		if (questionsCount + 1 >= settings.count) {
			return stopTimer()
		}

		const level = [1e1, 1e2, 1e3, 1e4][settings.level]

		const a = Math.floor(Math.random() * level)
		const b = Math.floor(Math.random() * level)

		setCurrentQuestion(`${a} ${symbol} ${b}`)
		setQuestionStartTime(secondsElapsed)
	}

	function startTimer() {
		secondsIntervalRef.current = setInterval(() => {
			setSecondsElapsed((seconds) => seconds + 1)
		}, 1e3)
	}

	function stopTimer() {
		clearInterval(secondsIntervalRef.current || 0)
	}

	return (
		<FadeUp>
			<hgroup className="flex flex-col items-center mb-8">
				<h2 className="text-2xl font-bold">
					<span className="capitalize">{type}</span> questions
				</h2>

				<p className="text-muted-foreground">
					Let your brain do the job
				</p>
			</hgroup>

			{!currentQuestion && (
				<div className="flex flex-col max-w-sm mx-auto">
					<div>
						<div className="flex justify-between mb-2">
							<Label htmlFor="level">Level</Label>
							<span className="text-sm text-muted-foreground font-bold select-none">
								{
									[
										"Easy 🥰",
										"Medium 🤓",
										"Hard 😤",
										"Devil 😈",
									][settings.level]
								}
							</span>
						</div>

						<Slider
							onValueChange={(value) =>
								setSettings({
									...settings,
									level: value[0],
								})
							}
							id="level"
							defaultValue={[settings.level]}
							min={0}
							max={3}
							step={1}
							className="mb-6"
						/>
					</div>

					<div>
						<div className="flex justify-between mb-2">
							<Label htmlFor="count">Questions count</Label>
							<span className="text-sm text-muted-foreground font-bold select-none">
								{settings.count}
							</span>
						</div>

						<Slider
							onValueChange={(value) =>
								setSettings({
									...settings,
									count: value[0],
								})
							}
							id="count"
							defaultValue={[settings.count]}
							min={5}
							max={30}
							step={5}
							className="mb-6"
						/>
					</div>

					<Button
						autoFocus
						onClick={changeQuestion}
						className="mx-auto"
					>
						Start <Power className="size-3.5" strokeWidth={3} />
					</Button>
				</div>
			)}

			{currentQuestion && questionsCount + 1 <= settings.count && (
				<>
					<div className="flex justify-end">
						<div className="flex gap-1 py-4 relative text-sm items-center pointer-events-none select-none">
							<span className="bg-green-600 rounded-full size-2.5 inline-block absolute left-0"></span>
							<span className="bg-green-600 rounded-full size-2.5 inline-block animate-ping"></span>
							<span className="text-white font-bold">
								{formatSeconds(secondsElapsed)}
							</span>
						</div>
					</div>

					<form className="flex flex-col" onSubmit={handleSubmit}>
						<h4 className="text-2xl flex gap-2 items-baseline justify-center mb-6 select-none pointer-events-none">
							<span className="text-xs text-muted-foreground">
								{questionsCount + 1}/{settings.count}
							</span>
							<span className="font-bold">{currentQuestion}</span>
						</h4>

						<div className="flex justify-center">
							<Input
								autoFocus
								type="number"
								name="answer"
								value={answer}
								inputMode="numeric"
								autoComplete="off"
								onChange={(e) =>
									setAnswer(e.currentTarget.value)
								}
								placeholder="Type answer"
								className="!bg-transparent placeholder:text-muted-foreground/40 focus-visible:ring-0 border-none font-bold !text-4xl text-center pt-3 pb-6"
							/>
						</div>
					</form>
				</>
			)}

			{questionsCount + 1 > settings.count && (
				<Result
					result={result}
					level={settings.level}
					totalTime={secondsElapsed}
					onRestart={resetGame}
					type={type}
				/>
			)}
		</FadeUp>
	)
}
