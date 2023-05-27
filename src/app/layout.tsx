import { Poppins } from "next/font/google";
import Header from "./components/Header/header";

import "./styles/globals.scss";

const poppins = Poppins({
  weight: ["400", "500", "600"],
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
        {children}
      </body>
    </html>
  );
}
