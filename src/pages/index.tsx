import Head from 'next/head';
import PageLayout from '../components/layouts/PageLayout';
import AboutSection from '../sections/AboutSection';
import HeroSection from '../sections/HeroSection';
import PromotionSection from '../sections/PromotionSection';
import { NextPageWithLayout } from '../utils/types/page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Hjem | Heidelife</title>
        <meta name="description" content="Heidelife.dk's forside" />
        <meta name="og:description" content="Dansk Minecraft Server" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeroSection />
      <AboutSection />
      <PromotionSection />
    </>
  );
};

Home.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default Home;
