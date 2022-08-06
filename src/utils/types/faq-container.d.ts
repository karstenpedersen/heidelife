import { Faq } from "./faq";

export type FaqContainer = {
  title: string;
  iconTitle:
    | "FaDiscord"
    | "FaCog"
    | "FaStar"
    | "FaRuler"
    | "FaQuestionCircle"
    | "FaShoppingCart";
  faqs: Faq[];
};
