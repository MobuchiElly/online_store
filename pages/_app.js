import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { Provider } from 'react-redux';
import {store, persistor} from "@/utils/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
