import { Faq } from "contentlayer/generated";
import { createElement } from "react";
import {
  FaCog,
  FaDiscord,
  FaFileAlt,
  FaQuestionCircle,
  FaRuler,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import InternalIconLink from "../utils/InternalIconLink";

export interface IFaqContainer {
  title: string;
  items: Faq[];
  iconTitle:
    | "FaDiscord"
    | "FaCog"
    | "FaStar"
    | "FaRuler"
    | "FaQuestionCircle"
    | "FaShoppingCart";
}

const FaqContainer: React.FC<IFaqContainer> = ({ title, items, iconTitle }) => {
  const icons = {
    FaDiscord: FaDiscord,
    FaCog: FaCog,
    FaStar: FaStar,
    FaRuler: FaRuler,
    FaShoppingCart: FaShoppingCart,
    FaQuestionCircle: FaQuestionCircle,
  };

  return (
    <div className="flex gap-6 rounded bg-surface p-4 shadow-md sm:p-8">
      <div className="hidden sm:block md:hidden lg:block">
        {createElement(icons[iconTitle], {
          className: `text-4xl text-light`,
        })}
      </div>
      <div className="w-full">
        <h1 className="title-3 mb-3">{title}</h1>
        <ul className="flex flex-col gap-3">
          {items.map((item, index) => {
            return (
              <li
                key={index}
                className="relative z-20 w-full text-light hover:text-secondary"
              >
                <InternalIconLink
                  href={`/faq/${item.category}/${item.slug}`}
                  text={item.question}
                  startIcon={FaFileAlt}
                  className="px-1 py-[1px]"
                  stayInTop
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FaqContainer;
