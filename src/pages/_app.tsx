import "@/styles/main.scss";
import type { AppProps } from "next/app";
import Header from "@/components/header";
import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header>
        <Component {...pageProps} />
      </Header>
    </Provider>
  );
}
