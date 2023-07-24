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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>JL Transportes</title>
      <meta
        name="description"
        content="Insira aqui uma descrição relevante do seu site, contendo palavras-chave importantes."
      />
      <meta
        name="keywords"
        content="insira, aqui, as, palavras, chaves, relevantes, do, seu, site"
      />
      <meta name="author" content="Nome do Autor" />
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
