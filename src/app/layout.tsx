import { Poppins } from "next/font/google";
import Header from "./components/Header/header";

import "./styles/globals.scss";
import Navigation from "./components/Navigation/navigation";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
