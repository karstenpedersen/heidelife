import PageLayout from "../components/layouts/PageLayout";
import { NextPageWithLayout } from "../utils/types/page";

const Test: NextPageWithLayout = () => {
  return (
    <>
      <h1>TEST</h1>
    </>
  );
};

Test.getLayout = (page) => {
  return (
    <>
      <PageLayout>{page}</PageLayout>
    </>
  );
};

export default Test;
