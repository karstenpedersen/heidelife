import { ReactNode } from 'react';
import Section from '../utils/Section';
import Wrapper from '../utils/Wrapper';

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
    <Section
      id="title"
      className="h-[250px] md:h-[300px]"
      padding={false}
      background="bg-accent-2"
    >
      <Wrapper className="flex flex-col items-center justify-center gap-7 pt-[60px] text-accent-front ">
        {children ? (
          children
        ) : (
          <div className="relative flex flex-col items-center justify-center gap-3">
            <h1
              className={`text-center text-3xl font-bold uppercase sm:text-5xl ${className}`}
            >
              {title}
            </h1>
            <div className="bg-light h-[5px] w-[50%] rounded-full" />
          </div>
        )}
      </Wrapper>
    </Section>
  );
};

export default TitleSection;
