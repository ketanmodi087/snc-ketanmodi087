import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ApiProvider from "@/providers/apiProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider>
      <Component {...pageProps} />
    </ApiProvider>
  );
}
