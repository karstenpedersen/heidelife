import { ReactNode } from "react";
import Wrapper from "../components/utils/Wrapper";

export interface ITitleSection {
  title?: string;
  className?: string;
  children?: ReactNode;
}

const TitleSection: React.FC<ITitleSection> = ({
  title,
  className,
  children,
}) => {
  return (
    <section id="title">
      <Wrapper className="mt-[160px] mb-[60px] flex flex-col items-center gap-7 sm:mb-[100px] sm:mt-[180px]">
        {children ? (
          children
        ) : (
          <h1
            className={`text-center text-4xl font-bold text-surface sm:text-5xl ${className}`}
          >
            {title}
          </h1>
        )}
      </Wrapper>
    </section>
  );
};

export default TitleSection;
