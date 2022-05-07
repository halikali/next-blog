import MainLayout from "../src/components/Layout/MainLayout";
import "../styles/reset.scss";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
