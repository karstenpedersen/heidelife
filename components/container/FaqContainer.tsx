import { Faq } from 'contentlayer/generated';
import { createElement } from 'react';
import {
  FaCog,
  FaDiscord,
  FaFileAlt,
  FaQuestionCircle,
  FaRuler,
  FaShoppingCart,
  FaStar,
} from 'react-icons/fa';
import InternalIconLink from '../utils/InternalIconLink';

export interface IFaqContainer {
  title: string;
  items: Faq[];
  iconTitle:
    | 'FaDiscord'
    | 'FaCog'
    | 'FaStar'
    | 'FaRuler'
    | 'FaQuestionCircle'
    | 'FaShoppingCart';
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
    <div className="flex flex-col overflow-hidden rounded bg-surface text-surface-front shadow-md ">
      <div className="flex gap-4 rounded bg-surface-front px-4 py-3 text-surface shadow-md">
        {createElement(icons[iconTitle], {
          className: `text-3xl sm:text-4xl`,
        })}
        <h1 className="parent-title text-2xl sm:text-3xl">{title}</h1>
      </div>
      <div className="w-full p-4 ">
        <ul className="flex flex-col gap-3">
          {items.map((item, index) => {
            return (
              <li key={index} className="w-full hover:text-accent">
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

{
  /* <div className="flex gap-6 rounded bg-surface p-4 text-surface-front shadow-md sm:p-8">
      <div className="hidden sm:block md:hidden lg:block">
        {createElement(icons[iconTitle], {
          className: `text-4xl text-accent`,
        })}
      </div>
      <div className="w-full">
        <h1 className="title-3 mb-3">{title}</h1>
        <ul className="flex flex-col gap-3">
          {items.map((item, index) => {
            return (
              <li
                key={index}
                className="relative z-20 w-full hover:text-accent"
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
    </div> */
}

export default FaqContainer;
