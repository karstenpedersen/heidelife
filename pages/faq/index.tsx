import Head from 'next/head';
import { allFaqs } from '../../.contentlayer/generated/';
import FaqContainer from '../../components/container/FaqContainer';
import PageLayout from '../../components/layouts/PageLayout';
import FaqDiscordSection from '../../components/sections/FaqDiscordSection';
import TitleSection from '../../components/sections/TitleSection';
import Section from '../../components/utils/Section';
import Wrapper from '../../components/utils/Wrapper';
import { faqContainerData } from '../../data/faq.data';
import { FaqCategory } from '../../utils/types/faq-container';
import { NextPageWithLayout } from '../../utils/types/page';

const FAQS: NextPageWithLayout<{ faqCategories: FaqCategory[] }> = ({
  faqCategories,
}) => {
  return (
    <>
      <Head>
        <title>FAQ | Heidelife</title>
        <meta name="description" content="Få hjælp til dine spørgsmål" />
        <meta name="og:description" content="FAQ - Ofte stillet spørgsmål" />
      </Head>

      <TitleSection title="Ofte stillede spørgsmål" />
      <Section id="faq">
        <Wrapper>
          <div className="grid gap-10 md:grid-cols-2">
            {faqCategories.map((faqCategory, index) => {
              return (
                <FaqContainer
                  key={index}
                  title={faqCategory.faqContainer.title}
                  iconTitle={faqCategory.faqContainer.iconTitle}
                  items={faqCategory.faqs}
                />
              );
            })}
          </div>
        </Wrapper>
      </Section>

      <FaqDiscordSection />
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
  let faqCategories: FaqCategory[] = [];

  faqContainerData.map((faqContainer, i) => {
    faqCategories[i] = { faqContainer, faqs: [] };
  });

  allFaqs.map((faq, i) => {
    const faqContainer = faqContainerData.find(({ category }) => {
      return category === faq.category;
    });

    if (faqContainer) {
      let faqCategory = faqCategories[faqContainer.id];

      if (faqCategory) {
        faqCategory.faqs.push(faq);
        faqCategories[faqContainer.id] = faqCategory;
      }
    }
  });

  return {
    props: {
      faqCategories,
    },
  };
}

export default FAQS;
