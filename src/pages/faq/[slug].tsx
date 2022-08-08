import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { allFaqs } from "../../../.contentlayer/generated/";
import type { Faq } from "../../../.contentlayer/generated/types";
import { faqContainerData } from "../../../data/faq.data";
import PageLayout from "../../components/layouts/PageLayout";
import IconLink from "../../components/utils/IconLink";
import ImageBackground from "../../components/utils/ImageBackground";
import Wrapper from "../../components/utils/Wrapper";
import TitleSection from "../../sections/TitleSection";
import { FaqContainer } from "../../utils/types/faq-container";
import { NextPageWithLayout } from "../../utils/types/page";

type FaqProps = {
  faq: Faq;
  allFaqs2: Faq[];
  faqContainerData2: FaqContainer[];
};

const FAQ: NextPageWithLayout<{
  faq: Faq;
  allFaqs2: Faq[];
  faqContainerData2: FaqContainer[];
}> = ({ faq, allFaqs2, faqContainerData2 }: FaqProps) => {
  const Component = useMDXComponent(faq.body.code);

  return (
    <>
      <Head>
        <title>{`${faq.question} | FAQ | Heidelife`}</title>
        <meta name="description" content="Få hjælp til dine spørgsmål" />
        <meta name="og:description" content={faq.question} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <TitleSection title="Spørgsmål og svar" />

      {/* FAQ */}
      <section id="svar" className="bg-surface py-10 sm:py-14 lg:bg-background">
        <Wrapper className="relative flex gap-6">
          {/* Navigation */}
          <div className="sticky top-10 hidden lg:block">
            <div className="space-y-2 py-2 px-3">
              <ul className="flex flex-col gap-2">
                {faqContainerData2.map((faqContainer, index) => {
                  return (
                    <li key={index}>
                      <Link href={`/faq/${faqContainer.category}/`}>
                        <a
                          className={`font-semibold hover:text-primary ${
                            faq.category === faqContainer.category &&
                            "border-l-2 border-primary pl-2"
                          }`}
                        >
                          {faqContainer.title}
                        </a>
                      </Link>

                      {faqContainer.category === faq.category && (
                        <ul className="ml-2 flex flex-col gap-[4px]">
                          {allFaqs2.map((selectedFaq) => {
                            return (
                              <li key={index}>
                                <Link href={`/faq/${selectedFaq.slug}`}>
                                  <a
                                    className={`text-zinc-500 hover:text-secondary ${
                                      faq.slug === selectedFaq.slug &&
                                      "border-l-2 border-secondary pl-2 !text-zinc-700"
                                    }`}
                                  >
                                    {selectedFaq.question}
                                  </a>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="prose prose-zinc h-full rounded bg-surface sm:prose-lg md:prose-xl lg:min-h-[400px] lg:!max-w-none lg:py-10 lg:px-16 lg:shadow-md">
              <h1>{faq.question}</h1>
              <Component />
            </div>
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
  const paths = allFaqs.map((faq) => ({ params: { slug: faq.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const faq = allFaqs.find((faq) => faq.slug === params.slug);

  const faqContainerData2 = faqContainerData;

  return { props: { faq, allFaqs2: allFaqs, faqContainerData2 } };
}

export default FAQ;
