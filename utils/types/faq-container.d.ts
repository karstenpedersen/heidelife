export type FaqContainer = {
  id: number;
  category: string;
  title: string;
  iconTitle:
    | 'FaDiscord'
    | 'FaCog'
    | 'FaStar'
    | 'FaRuler'
    | 'FaQuestionCircle'
    | 'FaShoppingCart';
};

export type FaqCategory = { faqContainer: FaqContainer; faqs: Faq[] };
