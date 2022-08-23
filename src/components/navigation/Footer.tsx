import {
  FaDiscord,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaPlay,
  FaShoppingCart,
} from "react-icons/fa";
import IconLink from "../utils/IconLink";
import IconText from "../utils/IconText";
import Wrapper from "../utils/Wrapper";
import Navigation from "./Navigation";

export interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <footer className="bg-header py-10 text-white">
      <Wrapper className="space-y-14">
        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div>
            <IconText
              text="Om os"
              startIcon={FaPlay}
              textClassName="text-lg font-semibold"
              iconClassName="text-[#3f5c9c]"
            />
            <p className="text-zinc-200">
              HeideLife er den oplagte mulighed for at spille med dine venner på
              en server der har fællesskabet i fokus.
            </p>
          </div>
          <div>
            <IconText
              text="Navigation"
              startIcon={FaInfoCircle}
              textClassName="text-lg font-semibold"
              iconClassName="text-[#3f5c9c] text-xl"
            />
            <Navigation
              className="flex flex-col gap-2"
              itemClassName="hover:underline hover:!text-accent transition-colors"
            />
          </div>
          <div>
            <IconText
              text="Heidelife Discord"
              startIcon={FaDiscord}
              textClassName="text-lg font-semibold"
              iconClassName="text-[#3f5c9c] text-xl"
            />
            <p className="mb-4 text-zinc-200">
              På Discord kan du få hjælp, deltage i giveaways, følge med i
              udviklingen af serveren og få beta-adgang til serverne før de
              åbner.
            </p>
            <IconLink
              href="https://discord.gg/NBppK3W76m"
              text="Join vores Discord"
              endIcon={FaExternalLinkAlt}
              iconClassName="!text-base"
              className="hover:text-accent"
            />
          </div>
          <div className="flex flex-col">
            <IconText
              text="Heidelife Butik"
              startIcon={FaShoppingCart}
              textClassName="text-lg font-semibold"
              iconClassName="text-[#3f5c9c] text-xl"
            />
            <p className="mb-4 flex-grow text-zinc-300">
              Her kan du støtte op om serveren ved at købe donater-ranks, keys
              og mange andre ting.
            </p>
            <IconLink
              href="https://heidelife.tebex.io/"
              text="Gå til vores butik"
              endIcon={FaExternalLinkAlt}
              iconClassName="!text-base"
              className="hover:text-accent"
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 text-zinc-400 sm:flex-row">
          <p>heidelife.dk &copy; 2022</p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
