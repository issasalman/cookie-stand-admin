import Head from 'next/head'
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';


 const Home=()=> {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <body>
        <Header />
        <Main />
        <Footer />
      </body>

    </>
  )
}
export default Home