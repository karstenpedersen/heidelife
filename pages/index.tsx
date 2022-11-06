import Head from 'next/head';
import PageLayout from '../components/layouts/PageLayout';
import AboutSection from '../components/sections/AboutSection';
import DevelopmentSection from '../components/sections/DevelopmentSection';
import DiscordSection from '../components/sections/DiscordSection';
import HeroSection from '../components/sections/HeroSection';
import PromotionSection from '../components/sections/PromotionSection';
import { NextPageWithLayout } from '../utils/types/page';
import { Rule } from '../utils/types/rules';

const Home: NextPageWithLayout<{ rules: Rule[] }> = ({ rules }) => {
  return (
    <>
      <Head>
        <title>Hjem | Heidelife</title>
        <meta name="description" content="Heidelife.dk's forside" />
        <meta name="og:description" content="Dansk Minecraft Server" />
      </Head>

      <HeroSection />
      <AboutSection />
      <DiscordSection />
      <DevelopmentSection />
      <PromotionSection />
    </>
  );
};

Home.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default Home;
