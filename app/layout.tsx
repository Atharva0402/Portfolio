import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
export const metadata: Metadata = {
	metadataBase: new URL("https://portfolio-atharva0402s-projects.vercel.app/"),

	title: "AtharvaKadam",
	authors: {
		name: "AtharvaKadam",
	},

	description:
		"I'm a Full Stack developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "AtharvaKadam",
		description:
			"I'm a Full Stack developer passionate about building a modern web application that users love.",
		url: "https://portfolio-atharva0402s-projects.vercel.app/",
		siteName: "Atharva",
		images: "/Portfolio.png",
		type: "website",
	},
	keywords: ["daily web coding", "Atharva", "dailywebcoding","WebDevelopment"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="suppressHydrationWarning">
      <body className={spaceGrotesk.className}>

      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>


      </body>
    </html>
  );
}
