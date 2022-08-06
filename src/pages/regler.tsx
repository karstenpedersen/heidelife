import Head from "next/head";
import Heading from "../components/headings/Heading";
import PageLayout from "../components/layouts/PageLayout";
import Wrapper from "../components/utils/Wrapper";
import PromotionSection from "../sections/PromotionSection";
import TitleSection from "../sections/TitleSection";
import { NextPageWithLayout } from "../utils/types/page";

const Rules: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Regler | Heidelife</title>
        <meta name="description" content="Heidelife.dk's regler" />
        <meta name="og:description" content="Server regler" />
      </Head>

      <TitleSection title="Regler" />
      <section id="regler" className="bg-background py-10 sm:py-14">
        <Wrapper>
          <Heading title="Regler" />
        </Wrapper>
      </section>
      <PromotionSection />
    </>
  );
};

Rules.getLayout = (page) => {
  return (
    <>
      <PageLayout>{page}</PageLayout>
    </>
  );
};

export default Rules;
