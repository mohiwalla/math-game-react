import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./not-found"
import HomePage from "./home"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Questions from "./questions"

export default function Router() {
	return (
		<>
			<BrowserRouter>
				<Header />

				<div className="border-b">
					<div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
						<Sidebar />

						<main className="py-5">
							<Routes>
								<Route path="/" element={<HomePage />} />
								<Route path="*" element={<NotFound />} />

								<Route
									path="/questions/addition"
									element={
										<Questions
											key="addition"
											type="addition"
										/>
									}
								/>
								<Route
									path="/questions/subtraction"
									element={
										<Questions
											key="subtraction"
											type="subtraction"
										/>
									}
								/>
								<Route
									path="/questions/multiplication"
									element={
										<Questions
											key="multiplication"
											type="multiplication"
										/>
									}
								/>
								<Route
									path="/questions/division"
									element={
										<Questions
											key="division"
											type="division"
										/>
									}
								/>
								<Route
									path="/questions/random"
									element={
										<Questions key="random" type="random" />
									}
								/>
							</Routes>
						</main>
					</div>
				</div>
			</BrowserRouter>
		</>
	)
}
