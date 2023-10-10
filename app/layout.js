import { ReduxProvider } from "@/redux/features/provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Menu @Coco - Samyak",
  description: "Online Food Menu for Coco's Bar / Kitchen Restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=hind@400&f[]=khand@700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="min-h-screen bg-[#043F2E]">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
