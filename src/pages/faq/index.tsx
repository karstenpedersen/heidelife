import Head from "next/head";
import { allFaqs } from "../../../.contentlayer/generated/";
import { faqContainerData } from "../../../data/faq.data";
import FaqContainer from "../../components/container/FaqContainer";
import PageLayout from "../../components/layouts/PageLayout";
import Wrapper from "../../components/utils/Wrapper";
import FaqDiscordSection from "../../sections/FaqDiscordSection";
import TitleSection from "../../sections/TitleSection";
import { FaqCategory } from "../../utils/types/faq-container";
import { NextPageWithLayout } from "../../utils/types/page";

const FAQS: NextPageWithLayout<{ faqCategories: FaqCategory[] }> = ({
  faqCategories,
}) => {
  return (
    <>
      <Head>
        <title>FAQ | Heidelife</title>
        <meta name="description" content="Få hjælp til dine spørgsmål" />
        <meta name="og:description" content="FAQ - Ofte stillet spørgsmål" />
        <meta name="viewport" content="width=device-width, initial-scale=2.0" />
      </Head>
      <TitleSection title="Ofte stillede spørgsmål" />
      <section id="faq" className="bg-background py-10 sm:py-14">
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
      </section>

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
