import Head from "next/head";
import { ruleData } from "../../data/rules.data";
import Heading from "../components/headings/Heading";
import PageLayout from "../components/layouts/PageLayout";
import Wrapper from "../components/utils/Wrapper";
import PromotionSection from "../sections/PromotionSection";
import TitleSection from "../sections/TitleSection";
import { NextPageWithLayout } from "../utils/types/page";
import { Rule } from "../utils/types/rules";

const Rules: NextPageWithLayout<{ rules: Rule[] }> = ({ rules }) => {
  return (
    <>
      <Head>
        <title>Regler | Heidelife</title>
        <meta name="description" content="Heidelife.dk's regler" />
        <meta name="og:description" content="Server regler" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <TitleSection title="Regler" />

      <section id="regler" className="bg-background py-10 sm:py-14">
        <Wrapper className="relative flex flex-col gap-10 lg:flex-row">
          {/* Content */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <Heading title="Regler" />
              <p>
                Ved at spille på Heidelife accepterer du at overholde reglerne
                nedenfor, samt konsekvensen af at bryde nogle af reglerne.
                Reglerne kan til enhver tid ændres, og straffen kan variere alt
                efter, hvor voldsom overtrædelsen er.
              </p>
            </div>
            {rules.map((rule, index) => {
              return (
                <div
                  key={index}
                  className="rounded bg-surface p-4 shadow-md sm:p-8"
                >
                  <h2 className="mb-2 text-lg font-semibold">{rule.rule}</h2>
                  <p>{rule.description}</p>
                  {rule.note && (
                    <p className="mt-4 text-zinc-500">Note: {rule.note}</p>
                  )}
                </div>
              );
            })}
          </div>
        </Wrapper>
      </section>
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
  return (
    <>
      <PageLayout>{page}</PageLayout>
    </>
  );
};

export default Rules;
