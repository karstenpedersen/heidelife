import Heading from "../components/headings/Heading";
import ImageSplitter from "../components/utils/ImageSplitter";
import Wrapper from "../components/utils/Wrapper";
import { Gamemode } from "../utils/types/gamemode";

export interface IGamemodeSection {
  gamemodes: Gamemode[];
}

const GamemodeSection: React.FC<IGamemodeSection> = ({ gamemodes }) => {
  return (
    <section id="gamemodes" className="bg-background py-10 sm:py-14">
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
    </section>
  );
};

export default GamemodeSection;
