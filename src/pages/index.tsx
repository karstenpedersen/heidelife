import Head from "next/head";
import PageLayout from "../components/layouts/PageLayout";
import HeroSection from "../sections/HeroSection";
import NewsSection from "../sections/NewsSection";
import PromotionSection from "../sections/PromotionSection";
import { NextPageWithLayout } from "../utils/types/page";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Hjem | Heidelife</title>
        <meta name="description" content="Heidelife.dk's forside" />
        <meta name="og:description" content="Dansk Minecraft Server" />
      </Head>
      <HeroSection />
      <NewsSection />
      <PromotionSection />
    </>
  );
};

Home.getLayout = (page) => {
  return (
    <>
      <PageLayout>{page}</PageLayout>
    </>
  );
};

export default Home;
