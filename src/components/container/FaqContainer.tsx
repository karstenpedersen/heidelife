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
          className: `text-4xl`,
        })}
      </div>
      <div className="w-full">
        <h1 className="title-3 mb-3">{title}</h1>
        <ul className="flex flex-col gap-3">
          {items.map((item, index) => {
            return (
              <li
                key={index}
                className="w-full rounded bg-zinc-50 transition-colors hover:bg-secondary hover:text-surface"
              >
                <InternalIconLink
                  href={`/faq/${item.category}/${item.slug}`}
                  text={item.question}
                  startIcon={FaFileAlt}
                  className="px-2 py-2"
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
