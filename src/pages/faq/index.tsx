import Head from "next/head";
import { FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import FaqContainer from "../../components/container/FaqContainer";
import PageLayout from "../../components/layouts/PageLayout";
import IconLink from "../../components/utils/IconLink";
import ImageBackground from "../../components/utils/ImageBackground";
import Wrapper from "../../components/utils/Wrapper";
import { getAllFaqContainers } from "../../lib/faqs";
import TitleSection from "../../sections/TitleSection";
import { FaqContainer as FaqContainerType } from "../../utils/types/faq-container";
import { NextPageWithLayout } from "../../utils/types/page";

const FAQS: NextPageWithLayout<{ faqData: FaqContainerType[] }> = ({
  faqData,
}) => {
  return (
    <>
      <Head>
        <title>FAQ | Heidelife</title>
        <meta name="description" content="Få hjælp til dine spørgsmål" />
        <meta name="og:description" content="FAQ - Ofte stillet spørgsmål" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TitleSection>
        <p className="text-center text-2xl font-bold text-white sm:text-4xl">
          Hvordan kan vi hjælpe dig?
        </p>
        <form
          action="submit"
          className="relative mx-auto w-full max-w-lg overflow-hidden rounded-md bg-surface sm:w-[80%]"
        >
          <input
            type="text"
            className="w-full py-4 pl-5 pr-10 text-lg outline-none placeholder:text-gray"
            placeholder="Søg..."
          />
          <button type="submit">
            <FaSearch className="absolute right-5 top-[50%] min-w-max translate-y-[-50%] text-gray" />
          </button>
        </form>
      </TitleSection>
      <section id="faq" className="bg-background py-10 sm:py-14">
        <Wrapper>
          <div className="grid gap-10 md:grid-cols-2">
            {faqData.map((faqContainer, index) => {
              return (
                <FaqContainer
                  key={index}
                  title={faqContainer.title}
                  iconTitle={faqContainer.iconTitle}
                  items={faqContainer.faqs}
                />
              );
            })}
          </div>
        </Wrapper>
      </section>

      <section id="discord" className="h-[400px]">
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
                text="Gå til Heidelife Discord"
                className="rounded bg-primary px-6 py-4 font-semibold text-surface hover:bg-primary-variant"
              />
            </div>
          </Wrapper>
        </ImageBackground>
      </section>
    </>
  );
};

FAQS.getLayout = (page) => {
  return (
    <>
      <PageLayout>{page}</PageLayout>
    </>
  );
};

export async function getStaticProps() {
  const faqData = await getAllFaqContainers();

  return {
    props: {
      faqData,
    },
  };
}

export default FAQS;
