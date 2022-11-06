import Heading from '../headings/Heading';
import ImageSplitter from '../utils/ImageSplitter';
import Section from '../utils/Section';
import Wrapper from '../utils/Wrapper';

export interface IDevelopmentSection {}

const DevelopmentSection: React.FC<IDevelopmentSection> = () => {
  return (
    <Section id="development">
      <Wrapper>
        <ImageSplitter
          imageSrc="/images/screenshots/spawn-ship.png"
          imageAlt="Heidelife lobby"
          reverseAfterBreak
          reverseBeforeBreak={false}
          className=""
          imageClassName="w-full aspect-video md:h-full"
        >
          <Heading title="Udvikling" />
          <p className="text-lg">
            HeideLife er i konstant udvikling og sætter altid spillernes ønsker
            højt. Hvis du vil have indflydelse der hvor du bruger din tid, så
            vælger du HeideLife.
          </p>
          <br />
          <p className="text-lg">
            På nuværende tidspunkt består serveren af Survival og Skyblock, med
            flere på vej!
          </p>
        </ImageSplitter>
      </Wrapper>
    </Section>
  );
};

export default DevelopmentSection;
