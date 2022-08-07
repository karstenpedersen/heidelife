import { faqData } from "../../data/faq.data";
import { Faq } from "../utils/types/faq";

export const getAllFaqContainers = async () => {
  return faqData;
};

export const getAllFaqs = async () => {
  const faqList: Faq[] = [];

  const faqData = await getAllFaqContainers();
  faqData.forEach((faqContainer) => {
    faqContainer.faqs.forEach((faq) => {
      faqList.push(faq);
    });
  });
  return faqList;
};

export const getAllFaqPaths = async () => {
  const allFaqs = await getAllFaqs();

  const paths: { params: { slug: string } }[] = [];

  allFaqs.map(async (faq) => {
    paths.push({ params: { slug: faq.slug } });
  });

  return paths;
};

export const getFaqData = async (slug: string) => {
  const allFaqs = await getAllFaqs();

  let f: Faq | null = null;
  allFaqs.map((faq) => {
    if (faq.slug === slug) {
      f = faq;
    }
  });

  return f;
};
