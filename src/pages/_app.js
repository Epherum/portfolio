import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main data-scroll-container>
      <Component {...pageProps} />;
    </main>
  );
}
