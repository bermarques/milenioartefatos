"use client";

import { Provider } from "react-redux";
import { useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Container } from "./styles";
import StyledComponentsRegistry from "./registry";
import { usePathname } from "next/navigation";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>Milênio Artefatos - Promoção todo dia</title>
        <meta
          name="description"
          content="A Milênio Artefatos foi fundada em 1997, com o foco em atender o
          mercado de tapeçaria, capotaria, comunicação visual, decoração, toldo
          e confecção de bolsas com qualidade, respeito e ética."
        />
        <link
          rel="icon"
          href="cropped-favcon-milenio-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="cropped-favcon-milenio-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="cropped-favcon-milenio-180x180.png"
        />
        <meta
          name="msapplication-TileImage"
          content="cropped-favcon-milenio-270x270.png"
        />
        <meta name="robots" content="max-image-preview:large" />
      </head>
      <Provider store={store}>
        <body className={inter.className}>
          <StyledComponentsRegistry>
            <Container>
              <Header />
              {children}
              <Footer />
            </Container>
          </StyledComponentsRegistry>
        </body>
      </Provider>
    </html>
  );
}
