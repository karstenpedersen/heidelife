import { FaExternalLinkAlt } from 'react-icons/fa';
import Heading from '../headings/Heading';
import IconLink from '../utils/IconLink';
import ImageSplitter from '../utils/ImageSplitter';
import Section from '../utils/Section';
import Wrapper from '../utils/Wrapper';

export interface IDiscordSection {}

const DiscordSection: React.FC<IDiscordSection> = () => {
  return (
    <Section id="discord">
      <Wrapper>
        <ImageSplitter
          imageSrc="/images/screenshots/group-pic.png"
          imageAlt="Heidelife gruppe billede"
          reverseBeforeBreak={false}
        >
          <Heading title="Fællesskab" />
          <p className="text-lg">
            HeideLife er den oplagte mulighed for at spille Minecraft med dine
            venner på. Serveren sætter fællesskabet i fokus, og sikre
            retfærdighed og ikke mindst en sjov tid.
          </p>
          <br />
          <p className="text-lg">
            På vores Discord server kan du og dine venner joine Heidelife
            fællesskabet og chatte, være med i giveaways og meget mere.
          </p>
          <IconLink
            href="https://discord.gg/NBppK3W76m"
            endIcon={FaExternalLinkAlt}
            text="Gå til Heidelife Discord"
            className="mt-[80px] max-w-max rounded bg-accent px-6 py-4 font-semibold text-accent-front transition-all hover:bg-accent-2"
          />
        </ImageSplitter>
      </Wrapper>
    </Section>
  );
};

export default DiscordSection;
