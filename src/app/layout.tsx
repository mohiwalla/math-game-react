import ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import "@/app/global.css"

import { Toaster } from "sonner"
import Router from "@/app/router"
import { ThemeProvider } from "@/components/theme-provider"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<Router />
			<Toaster theme="system" className="select-none" richColors />
		</ThemeProvider>
	</StrictMode>
)
