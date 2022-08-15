import { ReactNode } from "react";
import ImageBackground from "../components/utils/ImageBackground";
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
      <ImageBackground imageSrc="/images/backgrounds/sky.png" darkBg>
        <Wrapper className="flex flex-col items-center justify-center gap-7 pt-[60px]">
          {children ? (
            children
          ) : (
            <div className="flex flex-col items-center justify-center gap-3">
              <h1
                className={`text-center text-3xl font-bold uppercase text-surface sm:text-5xl ${className}`}
              >
                {title}
              </h1>
              <div className="h-[5px] w-[50%] rounded-full bg-secondary" />
            </div>
          )}
        </Wrapper>
      </ImageBackground>
    </section>
  );
};

export default TitleSection;
