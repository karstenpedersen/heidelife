import Head from "next/head";
import { FaExternalLinkAlt } from "react-icons/fa";
import Heading from "../../components/headings/Heading";
import PageLayout from "../../components/layouts/PageLayout";
import IconLink from "../../components/utils/IconLink";
import ImageBackground from "../../components/utils/ImageBackground";
import Wrapper from "../../components/utils/Wrapper";
import { getAllFaqPaths, getFaqData } from "../../lib/faqs";
import TitleSection from "../../sections/TitleSection";
import { Faq } from "../../utils/types/faq";
import { NextPageWithLayout } from "../../utils/types/page";

const FAQ: NextPageWithLayout<{ faq: Faq | null }> = ({ faq }) => {
  return (
    <>
      <Head>
        <title>FAQ | Heidelife</title>
        <meta name="description" content="Få hjælp til dine spørgsmål" />
        <meta name="og:description" content="FAQ - Ofte stillet spørgsmål" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TitleSection title="Spørgsmål og svar" />
      <section id="svar" className="sm:py-18 bg-background py-14">
        <Wrapper>
          {faq && (
            <>
              <Heading title={faq.question} />
              <p className="text-lg">Svar: {faq.answer}</p>
            </>
          )}
        </Wrapper>
      </section>
      <section className="h-[400px]">
        <ImageBackground imageSrc="/images/hero.jpg" darkBg>
          <Wrapper className="flex flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center justify-between gap-8 rounded bg-surface p-8 shadow-md md:flex-row md:gap-10">
              <div className="text-center md:text-left">
                <p className="mb-2 text-3xl font-bold">Flere spørgsmål?</p>
                <p>Kontakt os på vores discord</p>
              </div>
              <IconLink
                href="/"
                endIcon={FaExternalLinkAlt}
                text="Discord"
                className="rounded bg-primary px-6 py-4 font-semibold text-surface hover:bg-primary-variant"
              />
            </div>
          </Wrapper>
        </ImageBackground>
      </section>
    </>
  );
};

FAQ.getLayout = (page) => {
  return (
    <>
      <PageLayout>{page}</PageLayout>
    </>
  );
};

export async function getStaticPaths() {
  const paths = await getAllFaqPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const faq: Faq | null = await getFaqData(params.slug);

  return { props: { faq } };
}

export default FAQ;
