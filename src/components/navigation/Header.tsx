import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaDiscord, FaShoppingCart } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import IconLink from "../utils/IconLink";
import Wrapper from "../utils/Wrapper";
import Contacts from "./Contacts";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";

export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

const Header: React.FC<IHeader> = ({ ..._ }) => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [showBg, setShowBg] = useState(false);

  // Toggle mobile nav's visibility
  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  const handleScroll = () => {
    setShowBg(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll());

    return () => {
      window.removeEventListener("scroll", (e) => handleScroll());
    };
  }, []);

  useEffect(() => {});

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 h-[90px] w-full  bg-white transition-all ${
          showBg
            ? "bg-opacity-100 text-inherit shadow-md"
            : "bg-opacity-0 text-white"
        }`}
      >
        <Wrapper className="flex items-center justify-between text-lg font-semibold">
          <div className="flex items-center gap-6">
            <Link href="/">
              <a>
                <Image
                  src="/images/logos/logo.png"
                  alt="heidelife logo"
                  width={60}
                  height={60}
                />
              </a>
            </Link>
            <div className="hidden items-center gap-7 md:flex">
              <Navigation
                className="flex gap-7"
                itemClassName="hover:!text-primary transition-colors"
              />
              <li className="list-none">
                <IconLink
                  text="Butik"
                  startIcon={FaShoppingCart}
                  href="https://heidelife.tebex.io/"
                  className="transition-colors hover:text-primary"
                />
              </li>
              <li className="list-none">
                <IconLink
                  text="Discord"
                  startIcon={FaDiscord}
                  href="https://discord.gg/NBppK3W76m"
                  className="transition-colors hover:text-primary"
                />
              </li>
            </div>
          </div>

          <Contacts
            className="hidden gap-5 text-2xl md:flex"
            itemClassName="hover:text-primary transition-colors"
          />

          <HiMenuAlt3
            className="text-[42px] transition-colors hover:text-primary md:hidden"
            role="button"
            onClick={toggleMobileNav}
          />
        </Wrapper>
      </header>

      {/* Mobile Nav */}
      <MobileNav display={mobileNavVisible} toggleMobileNav={toggleMobileNav} />
    </>
  );
};

export default Header;
