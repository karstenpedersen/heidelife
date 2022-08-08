import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import { FaExternalLinkAlt } from "react-icons/fa";
import { allFaqs } from "../../../../../.contentlayer/generated";
import type { Faq } from "../../../../../.contentlayer/generated/types";
import FaqSidebar from "../../../../components/faqs/FaqSidebar";
import PageLayout from "../../../../components/layouts/PageLayout";
import IconLink from "../../../../components/utils/IconLink";
import ImageBackground from "../../../../components/utils/ImageBackground";
import Wrapper from "../../../../components/utils/Wrapper";
import { getAllFaqContainers } from "../../../../lib/faqs";
import TitleSection from "../../../../sections/TitleSection";
import { FaqContainer } from "../../../../utils/types/faq-container";
import { NextPageWithLayout } from "../../../../utils/types/page";

const FAQ: NextPageWithLayout<{
  faq: Faq;
  faqContainer: FaqContainer;
  allFaqs2: Faq[];
  allFaqContainers: FaqContainer[];
  categoryFaqs: Faq[];
}> = ({ faq, faqContainer, allFaqs2, allFaqContainers, categoryFaqs }) => {
  const Component = useMDXComponent(faq.body.code);

  return (
    <>
      <Head>
        <title>{`${faq.question} | FAQ | Heidelife`}</title>
        <meta name="description" content="Få hjælp til dine spørgsmål" />
        <meta name="og:description" content={faq.question} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <TitleSection title={faqContainer.title} />

      {/* FAQ */}
      <section id="svar" className="bg-surface py-10 sm:py-14 lg:bg-background">
        <Wrapper className="relative flex gap-6">
          <FaqSidebar
            allFaqContainers={allFaqContainers}
            currentFaq={faq}
            currentCategory={faq.category}
            categoryFaqs={categoryFaqs}
          />

          {/* Content */}
          <div className="prose prose-zinc h-full w-full rounded-md bg-surface sm:prose-lg md:prose-xl lg:min-h-[400px] lg:!max-w-none lg:py-10 lg:px-16 lg:shadow-md">
            <h1>{faq.question}</h1>
            <Component />
          </div>
        </Wrapper>
      </section>

      {/* Discord promo */}
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
  const paths = allFaqs.map((faq) => ({
    params: { category: faq.category, slug: faq.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const faq = allFaqs.find((faq) => faq.slug === params.slug);

  const allFaqContainers = getAllFaqContainers();

  const faqContainer = allFaqContainers.find(
    (faqContainer) => faqContainer.category === params.category
  );

  const categoryFaqs = allFaqs.filter(
    (faq) => faq.category === params.category
  );

  return {
    props: {
      faq,
      faqContainer,
      allFaqs2: allFaqs,
      allFaqContainers,
      categoryFaqs,
    },
  };
}

export default FAQ;
