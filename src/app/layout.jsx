import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HK | Hariom Kushwah - Creative Web Designer",
  description:
    "Hariom Kushwah (HK) - Crafting stunning websites, modern UI/UX, and digital experiences that inspire and convert.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* White circle favicon with HK text */}
        <link
          rel="icon"
          href={`data:image/svg+xml,
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
              <circle cx='50' cy='50' r='50' fill='white'/>
              <text x='50%' y='55%' font-size='45' text-anchor='middle' fill='black' font-family='Arial' font-weight='bold'>HK</text>
            </svg>`}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
