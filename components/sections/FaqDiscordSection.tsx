import { FaExternalLinkAlt } from 'react-icons/fa';
import IconLink from '../utils/IconLink';
import Section from '../utils/Section';
import Wrapper from '../utils/Wrapper';

export interface IFaqDiscordSection {}

const FaqDiscordSection: React.FC<IFaqDiscordSection> = () => {
  return (
    <Section id="discord" className="h-[400px]" background="bg-accent">
      <Wrapper className="flex flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-between gap-8 rounded bg-surface p-8 shadow-md md:flex-row md:gap-10">
          <div className="text-center md:text-left">
            <p className="mb-2 text-3xl font-bold">Flere spørgsmål?</p>
            <p>Kontakt os på vores discord</p>
          </div>
          <IconLink
            href="https://discord.gg/NBppK3W76m"
            endIcon={FaExternalLinkAlt}
            text="Gå til Heidelife Discord"
            className="rounded bg-accent px-6 py-4 font-semibold text-accent-front transition-all hover:bg-accent-2"
          />
        </div>
      </Wrapper>
    </Section>
  );
};

export default FaqDiscordSection;
