import type { NextPage } from 'next';
import Head from 'next/head';
import { HeaderHome } from 'components/Header';
import { Chapters } from 'components/Chapters';
import { Footer } from 'components/Footer';

const Home: NextPage = () => {
  return (
    <main className="home">
      <Head>
        <title>QuranRead - Смысловой перевод священного Корана</title>
        <meta name="description" content="Сайт для чтения священного Корана с любых устройств" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderHome />
      <Chapters />
      <Footer />
    </main>
  );
};

export default Home;
