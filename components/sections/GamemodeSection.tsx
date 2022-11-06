import { Gamemode } from '../../utils/types/gamemode';
import Heading from '../headings/Heading';
import ImageSplitter from '../utils/ImageSplitter';
import Section from '../utils/Section';
import Wrapper from '../utils/Wrapper';

export interface IGamemodeSection {
  gamemodes: Gamemode[];
}

const GamemodeSection: React.FC<IGamemodeSection> = ({ gamemodes }) => {
  return (
    <Section id="gamemodes" className="bg-background py-10 sm:py-14">
      <Wrapper>
        <div className="grid gap-14">
          {gamemodes.map((gamemode, index) => {
            return (
              <ImageSplitter
                key={index}
                imageSrc={gamemode.imageSrc}
                imageAlt={`${gamemode.title} image`}
                reverseAfterBreak={index % 2 != 0}
                reverseBeforeBreak={false}
                layout="responsive"
                width={16}
                height={9}
              >
                <Heading title={gamemode.title} headingType="h2" />
                <p className="max-w-lg text-lg">{gamemode.description}</p>
              </ImageSplitter>
            );
          })}
        </div>
      </Wrapper>
    </Section>
  );
};

export default GamemodeSection;
