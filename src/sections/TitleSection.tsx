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
    <section id="title" className="h-[250px] md:h-[300px]">
      <div className="relative h-full">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-accent to-accent-variant" />

        <Wrapper className="flex flex-col items-center justify-center gap-7 pt-[60px]">
          {children ? (
            children
          ) : (
            <div className="relative flex flex-col items-center justify-center gap-3">
              <h1
                className={`text-center text-3xl font-bold uppercase text-light sm:text-5xl ${className}`}
              >
                {title}
              </h1>
              <div className="h-[5px] w-[50%] rounded-full bg-light" />
            </div>
          )}
        </Wrapper>
      </div>
    </section>
  );
};

export default TitleSection;
