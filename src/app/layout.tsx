import { Inter } from "next/font/google";
import Header from "./components/Header/header";

import "./styles/globals.scss";
import Navigation from "./components/Navigation/navigation";
import Footer from "./components/Footer/footer";

const poppins = Inter({
  weight: ["300", "400", "500", "600", "700"],
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
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>JL Transportes</title>
      <meta
        name="description"
        content="Nossa empresa é altamente especializada no transporte de uma ampla variedade de veículos em todo o país. Atendemos com excelência concessionárias, agências, locadoras, prefeituras e leiloeiros, proporcionando soluções de logística personalizadas."
      />
      <meta
        name="keywords"
        content="Transporte, veículos, leiloeiros, carros, motos, cegonha, caminhão, transportes"
      />
      <meta name="author" content="Valmir Almeida Dev" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <link rel="icon" href="caminho/do/seu/favicon.ico" type="image/x-icon" />
      <body className={poppins.className}>
        <Header />
        <Navigation />

        {children}
        <Footer />
      </body>
    </html>
  );
}
