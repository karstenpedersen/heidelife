import { FaExternalLinkAlt } from "react-icons/fa";
import IconLink from "../components/utils/IconLink";
import ImageBackground from "../components/utils/ImageBackground";
import Wrapper from "../components/utils/Wrapper";

export interface IFaqDiscordSection {}

const FaqDiscordSection: React.FC<IFaqDiscordSection> = () => {
  return (
    <section id="discord" className="h-[400px]">
      <ImageBackground imageSrc="/images/hero.jpg" darkBg>
        <Wrapper className="flex flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-between gap-8 rounded bg-surface p-8 shadow-md md:flex-row md:gap-10">
            <div className="text-center md:text-left">
              <p className="mb-2 text-3xl font-bold">Flere spørgsmål?</p>
              <p>Kontakt os på vores discord</p>
            </div>
            <IconLink
              href="/"
              endIcon={FaExternalLinkAlt}
              text="Gå til Heidelife Discord"
              className="rounded bg-primary px-6 py-4 font-semibold text-surface hover:bg-primary-variant"
            />
          </div>
        </Wrapper>
      </ImageBackground>
    </section>
  );
};

export default FaqDiscordSection;
