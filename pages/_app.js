import MainLayout from "../src/components/Layout/MainLayout";
import "../styles/reset.scss";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
