import { NextPageContext } from 'next';
import Head from 'next/head';
import { FaExternalLinkAlt } from 'react-icons/fa';
import PageLayout from '../components/layouts/PageLayout';
import IconLink from '../components/utils/IconLink';
import Wrapper from '../components/utils/Wrapper';
import { NextPageWithLayout } from '../utils/types/page';

const Error: NextPageWithLayout<{ statusCode?: number }> = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>Fejl | Heidelife</title>
        <meta name="description" content="Heidelife.dk's forside" />
        <meta name="og:description" content="Dansk Minecraft Server" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Wrapper>
        <div className="mt-[90px] min-h-[calc(100vh-90px)]">
          {statusCode ? (
            <div className="wrapper absolute top-1/3">
              <h1 className="mb-2 text-3xl font-bold before:mr-2 before:font-bold before:text-accent before:content-['/']">
                Fejl {statusCode}
              </h1>
              <p className="mb-10 text-lg">Kontakt support på vores discord</p>
              <IconLink
                text="Heidelife Discord"
                href="https://discord.gg/NBppK3W76m"
                endIcon={FaExternalLinkAlt}
                className="hover:text-accent"
              />
            </div>
          ) : (
            <div className="wrapper absolute top-1/3">
              <h1 className="mb-2 text-3xl font-bold before:mr-2 before:font-bold before:text-accent before:content-['/']">
                Der skete en fejl...
              </h1>
              <p className="mb-10 text-lg">Kontakt support på vores discord</p>
              <IconLink
                text="Heidelife Discord"
                href="https://discord.gg/NBppK3W76m"
                endIcon={FaExternalLinkAlt}
                className="hover:text-accent"
              />
            </div>
          )}
        </div>
      </Wrapper>
    </>
  );
};

Error.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
