import Link from "next/link";
import {
  FaDiscord,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaPlay,
  FaShoppingCart,
} from "react-icons/fa";
import Heading from "../headings/Heading";
import IconLink from "../utils/IconLink";
import Wrapper from "../utils/Wrapper";
import Navigation from "./Navigation";

export interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <footer className="bg-zinc-900 py-10 text-white">
      <Wrapper className="space-y-14">
        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div>
            <Heading
              title="Om os"
              startIcon={FaPlay}
              headingType="h6"
              iconClassName="text-zinc-500"
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              officiis expedita fuga nisi aperiam. Minus, suscipit? Culpa enim
              nostrum sint.
            </p>
          </div>
          <div>
            <Heading
              title="Navigation"
              startIcon={FaInfoCircle}
              headingType="h6"
              iconClassName="text-zinc-500"
            />
            <Navigation
              className="flex flex-col gap-2"
              itemClassName="hover:underline"
            />
          </div>
          <div>
            <Heading
              title="Discord"
              startIcon={FaDiscord}
              headingType="h6"
              iconClassName="text-zinc-500"
            />
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
              nemo.
            </p>
            <IconLink
              href="#"
              text="Join vores Discord"
              endIcon={FaExternalLinkAlt}
              iconClassName="!text-lg"
              className="hover:text-primary"
            />
          </div>
          <div>
            <Heading
              title="Heidelife Webshop"
              startIcon={FaShoppingCart}
              headingType="h6"
              iconClassName="text-zinc-500"
            />
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
              nemo.
            </p>
            <IconLink
              href="#"
              text="Gå til vores butik"
              endIcon={FaExternalLinkAlt}
              iconClassName="!text-lg"
              className="hover:text-primary"
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 text-zinc-500 sm:flex-row">
          <p>heidelife.dk &copy; 2022</p>
          <div>
            <Link href="/">
              <a className="hover:underline">Servicevilkår</a>
            </Link>
            {" | "}
            <Link href="/">
              <a className="hover:underline">Fortrolighedspolitik</a>
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
