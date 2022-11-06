import { Faq } from 'contentlayer/generated';
import Link from 'next/link';
import { FaqContainer } from '../../utils/types/faq-container';

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
    <div className="hidden max-w-[200px] lg:block">
      <ul className="sticky top-[120px] flex flex-col gap-3">
        {allFaqContainers.map((faqContainer, index) => {
          return (
            <li key={index}>
              {/* FAQ Category */}
              <Link
                href={`/faq/${faqContainer.category}/`}
                className={`font-semibold transition-colors hover:text-accent`}
              >
                {faqContainer.title}
              </Link>

              {/* Category FAQS */}
              {faqContainer.category === currentCategory && (
                <ul className="ml-[2px] mt-1 flex flex-col gap-1 border-l-[2px] border-section-frontSoft">
                  {categoryFaqs?.map((faq) => {
                    return (
                      <li
                        key={index}
                        className={`relative ml-[12px]  ${
                          currentFaq?.slug === faq.slug &&
                          "before:absolute before:left-[-15px] before:block before:h-full before:w-[4px] before:rounded-full before:bg-accent before:content-['']"
                        }`}
                      >
                        <Link
                          href={`/faq/${faq.category}/${faq.slug}`}
                          className={`text-zinc-400 transition-colors hover:text-accent ${
                            currentFaq?.slug === faq.slug && '!text-accent'
                          }`}
                        >
                          {faq.question}
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
