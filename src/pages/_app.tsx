import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ApiProvider from "@/providers/apiProvider";
import { MyContextProvider } from "@/providers/context/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyContextProvider>
      <ApiProvider>
        <Component {...pageProps} />
      </ApiProvider>
    </MyContextProvider>
  );
}
