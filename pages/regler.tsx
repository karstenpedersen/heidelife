import Head from 'next/head';
import Heading from '../components/headings/Heading';
import PageLayout from '../components/layouts/PageLayout';
import PromotionSection from '../components/sections/PromotionSection';
import TitleSection from '../components/sections/TitleSection';
import Section from '../components/utils/Section';
import Wrapper from '../components/utils/Wrapper';
import { ruleData } from '../data/rules.data';
import { NextPageWithLayout } from '../utils/types/page';
import { Rule } from '../utils/types/rules';

const Rules: NextPageWithLayout<{ rules: Rule[] }> = ({ rules }) => {
  return (
    <>
      <Head>
        <title>Regler | Heidelife</title>
        <meta name="description" content="Heidelife.dk's regler" />
        <meta name="og:description" content="Server regler" />
      </Head>

      <TitleSection title="Regler" />

      <Section id="regler">
        <Wrapper className="relative flex flex-col gap-10 lg:flex-row">
          {/* Content */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <Heading title="Regler" />
              <p className="text-lg">
                Ved at spille på Heidelife accepterer du at overholde reglerne
                nedenfor, samt konsekvensen af at bryde nogle af reglerne.
                Reglerne kan til enhver tid ændres, og straffen kan variere alt
                efter, hvor voldsom overtrædelsen er.
              </p>
            </div>

            {/* Rules */}
            {rules.map((rule, index) => {
              return (
                <div
                  key={index}
                  className="rounded bg-surface p-4 shadow-md sm:p-8"
                >
                  <h2
                    className={`mb-2 text-lg font-semibold before:mr-2 before:font-bold before:text-accent before:content-['/']`}
                  >
                    {rule.rule}
                  </h2>
                  <p>{rule.description}</p>
                  {rule.note && (
                    <p className="text-zinc-300 mt-4">Note: {rule.note}</p>
                  )}
                </div>
              );
            })}
          </div>
        </Wrapper>
      </Section>
      <PromotionSection />
    </>
  );
};

export async function getStaticProps() {
  const rules = ruleData;

  return {
    props: {
      rules,
    },
  };
}

Rules.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default Rules;
