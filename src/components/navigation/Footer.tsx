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
    <footer className="bg-zinc-900 py-10 text-white">
      <Wrapper className="space-y-14">
        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div>
            <IconText
              text="Om os"
              startIcon={FaPlay}
              textClassName="text-lg font-semibold"
              iconClassName="text-zinc-500"
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              officiis expedita fuga nisi aperiam. Minus, suscipit? Culpa enim
              nostrum sint.
            </p>
          </div>
          <div>
            <IconText
              text="Navigation"
              startIcon={FaInfoCircle}
              textClassName="text-lg font-semibold"
              iconClassName="text-zinc-500 text-xl"
            />
            <Navigation
              className="flex flex-col gap-2"
              itemClassName="hover:underline"
            />
          </div>
          <div>
            <IconText
              text="Heidelife Discord"
              startIcon={FaDiscord}
              textClassName="text-lg font-semibold"
              iconClassName="text-zinc-500 text-xl"
            />
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
              nemo.
            </p>
            <IconLink
              href="https://discord.gg/NBppK3W76m"
              text="Join vores Discord"
              endIcon={FaExternalLinkAlt}
              iconClassName="!text-lg"
              className="hover:text-primary"
            />
          </div>
          <div>
            <IconText
              text="Heidelife Butik"
              startIcon={FaShoppingCart}
              textClassName="text-lg font-semibold"
              iconClassName="text-zinc-500 text-xl"
            />

            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
              nemo.
            </p>
            <IconLink
              href="https://heidelife.tebex.io/"
              text="Gå til vores butik"
              endIcon={FaExternalLinkAlt}
              iconClassName="!text-lg"
              className="hover:text-primary"
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 text-zinc-500 sm:flex-row">
          <p>heidelife.dk &copy; 2022</p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
