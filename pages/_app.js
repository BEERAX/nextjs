import Header from '../components/Header.js';
import Nav from '../components/Nav.js';
import '../styles/globals.css';
import Layout from '../components/Layout.js';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
