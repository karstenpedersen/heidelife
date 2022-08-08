import { Faq } from "contentlayer/generated";
import Link from "next/link";
import { FaqContainer } from "../../utils/types/faq-container";

export interface IFaqSidebar {
  allFaqContainers: FaqContainer[];
  currentFaq?: Faq;
  currentFaqContainer?: FaqContainer;
  categoryFaqs?: Faq[];
  currentCategory: string;
}

const FaqSidebar: React.FC<IFaqSidebar> = ({
  allFaqContainers,
  currentFaq,
  currentFaqContainer,
  categoryFaqs,
  currentCategory,
}) => {
  return (
    <div className="sticky top-10 hidden max-w-[200px] lg:block">
      <ul className="flex flex-col gap-3">
        {allFaqContainers.map((faqContainer, index) => {
          return (
            <li key={index}>
              {/* FAQ Category */}
              <Link href={`/faq/${faqContainer.category}/`}>
                <a
                  className={`font-semibold transition-colors hover:text-primary`}
                >
                  {faqContainer.title}
                </a>
              </Link>

              {/* Category FAQS */}
              {faqContainer.category === currentCategory && (
                <ul className="ml-[2px] flex flex-col gap-1 border-l-[3px] border-dotted border-zinc-300 pt-1">
                  {categoryFaqs?.map((faq) => {
                    return (
                      <li
                        key={index}
                        className={`ml-3 ${
                          currentFaq?.slug === faq.slug &&
                          "border-l-[3px] border-secondary pl-2"
                        }`}
                      >
                        <Link href={`/faq/${faq.category}/${faq.slug}`}>
                          <a
                            className={`text-zinc-500 transition-colors hover:text-secondary ${
                              currentFaq?.slug === faq.slug && "!text-zinc-700"
                            }`}
                          >
                            {faq.question}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FaqSidebar;

/*

*/
