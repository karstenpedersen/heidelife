import Heading from '../headings/Heading';
import ImageSplitter from '../utils/ImageSplitter';
import Section from '../utils/Section';
import Wrapper from '../utils/Wrapper';

export interface IAboutSection {}

const AboutSection: React.FC<IAboutSection> = () => {
  return (
    <Section id="om-os" className="text-lg">
      <Wrapper>
        <ImageSplitter
          imageSrc="/images/screenshots/skyblock-castle.png"
          imageAlt="Heidelife lobby"
          reverseAfterBreak
          reverseBeforeBreak={false}
          className="min-h-[300px]"
        >
          <Heading title="Om Heidelife" />
          <p>
            Heidelife er den ultimative Minecraft oplevelse, hvor du og dine
            venner kan spille sammen og opleve Minecraft på helt nye måder.
            Heidelife indeholder sjove og klassiske gamemodes som Survival og
            Skyblock, som redifinere rammerne om hvad Minecraft er.
          </p>
          <br />
          <p>
            Siden serveren blev annonceret i august 2022 har spillertallet
            steget ekstremt. Alle vores servere kører på maskiner i høj
            kvalitet, så vores spillere er sikret en god oplevelse!
          </p>
        </ImageSplitter>
      </Wrapper>
    </Section>
  );
};

export default AboutSection;
