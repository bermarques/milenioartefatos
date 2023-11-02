"use client";

import { Provider } from "react-redux";
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
