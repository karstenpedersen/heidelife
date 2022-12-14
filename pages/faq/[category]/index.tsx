import Head from 'next/head';
import Link from 'next/link.js';
import { allFaqs } from '../../../.contentlayer/generated/index.mjs';
import { Faq } from '../../../.contentlayer/generated/types.js';
import FaqSidebar from '../../../components/faqs/FaqSidebar';
import PageLayout from '../../../components/layouts/PageLayout';
import FaqDiscordSection from '../../../components/sections/FaqDiscordSection';
import TitleSection from '../../../components/sections/TitleSection';
import Section from '../../../components/utils/Section';
import Wrapper from '../../../components/utils/Wrapper';
import { getAllFaqContainers } from '../../../lib/faqs';
import { FaqContainer } from '../../../utils/types/faq-container';
import { NextPageWithLayout } from '../../../utils/types/page';

const FaqCategory: NextPageWithLayout<{
  faqContainer: FaqContainer;
  categoryFaqs: Faq[];
  allFaqContainers: FaqContainer[];
}> = ({ faqContainer, categoryFaqs, allFaqContainers }) => {
  return (
    <>
      <Head>
        <title>{`${faqContainer.category} | Heidelife`}</title>
        <meta name="description" content="Få hjælp til dine spørgsmål" />
        <meta name="og:description" content="FAQ - Ofte stillet spørgsmål" />
      </Head>

      <TitleSection title={faqContainer.title} />
      <Section id="faq">
        <Wrapper className="relative flex gap-6">
          <FaqSidebar
            allFaqContainers={allFaqContainers}
            currentFaqContainer={faqContainer}
            categoryFaqs={categoryFaqs}
            currentCategory={faqContainer.category}
          />

          {/* Content */}
          <ul className="prose h-full w-full divide-y-2 divide-surface-frontSoft rounded text-surface-front lg:min-h-[400px] lg:!max-w-none lg:bg-surface lg:py-10 lg:px-16 lg:shadow-md">
            {categoryFaqs.map((faq, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`/faq/${faqContainer.category}/${faq.slug}`}
                    className="!no-underline hover:!text-accent hover:!underline"
                  >
                    <h2 className="!mb-0 !mt-2 transition-colors hover:!text-accent">
                      {faq.question}
                    </h2>
                  </Link>
                  <p className="mt-1">{faq.description}</p>
                </li>
              );
            })}
          </ul>
        </Wrapper>
      </Section>

      <FaqDiscordSection />
    </>
  );
};

FaqCategory.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export async function getStaticPaths() {
  const allFaqContainers = getAllFaqContainers();
  const paths = allFaqContainers.map((faqContainer) => ({
    params: { category: faqContainer.category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { category: string };
}) {
  const allFaqContainers = getAllFaqContainers();

  const faqContainer = allFaqContainers.find(
    (faqContainer) => faqContainer.category === params.category
  );

  const categoryFaqs = allFaqs.filter(
    (faq) => faq.category === params.category
  );

  return {
    props: {
      faqContainer,
      categoryFaqs,
      allFaqContainers,
    },
  };
}

export default FaqCategory;
