import Heading from '../components/headings/Heading';
import ImageSplitter from '../components/utils/ImageSplitter';
import Section from '../components/utils/Section';
import Wrapper from '../components/utils/Wrapper';

export interface IAboutSection {}

const AboutSection: React.FC<IAboutSection> = () => {
  return (
    <Section id="om-os">
      <Wrapper>
        <ImageSplitter
          imageSrc="/images/backgrounds/lobby.png"
          imageAlt="Heidelife lobby"
          reverseAfterBreak
          reverseBeforeBreak={false}
        >
          <Heading title="Om Heidelife" />
          <p>
            HeideLife er den oplagte mulighed for at spille med dine venner på
            en server der har fællesskabet i fokus. Siden serveren blev
            annonceret i august 2022 har spillertallet steget ekstremt. Alle
            vores servere kører på maskiner i høj kvalitet, så vores spillere er
            sikret en god oplevelse!
          </p>
          <br />
          <p>
            HeideLife er i konstant udvikling og sætter altid spillernes ønsker
            højt. Hvis du vil have indflydelse der hvor du bruger din tid, så
            vælger du HeideLife.
          </p>
          <br />
          <p>
            På nuværende tidspunkt består serveren af Survival og Skyblock, med
            flere på vej!
          </p>
        </ImageSplitter>
      </Wrapper>
    </Section>
  );
};

export default AboutSection;
