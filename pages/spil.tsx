import Head from 'next/head';
import PageLayout from '../components/layouts/PageLayout';
import GamemodeSection from '../components/sections/GamemodeSection';
import PromotionSection from '../components/sections/PromotionSection';
import TitleSection from '../components/sections/TitleSection';
import { gamemodeData } from '../data/gamemode.data';
import { Gamemode } from '../utils/types/gamemode';
import { NextPageWithLayout } from '../utils/types/page';

const Games: NextPageWithLayout<{ gamemodes: Gamemode[] }> = ({
  gamemodes,
}) => {
  return (
    <>
      <Head>
        <title>Spil | Heidelife</title>
        <meta
          name="description"
          content="På Heidelife.dk serveren har vi mange forskellige gamemodes."
        />
        <meta name="og:description" content="Gamemodes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <TitleSection title="Heidelifes spil" />
      <GamemodeSection gamemodes={gamemodes} />
      <PromotionSection />
    </>
  );
};

Games.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export async function getStaticProps() {
  const gamemodes = gamemodeData;

  return {
    props: {
      gamemodes,
    },
  };
}

export default Games;
