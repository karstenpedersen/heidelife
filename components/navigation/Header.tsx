import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaDiscord, FaShoppingCart } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import IconLink from '../utils/IconLink';
import Contacts from './Contacts';
import MobileNav from './MobileNav';
import Navigation from './Navigation';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ ..._ }) => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [showBg, setShowBg] = useState(false);

  // Toggle mobile nav's visibility
  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  const handleScroll = () => {
    // Hide background at top
    setShowBg(window.scrollY > 10);
  };

  useEffect(() => {
    setShowBg(window.scrollY > 10);

    window.addEventListener('scroll', (e) => handleScroll());

    return () => {
      window.removeEventListener('scroll', (e) => handleScroll());
    };
  }, []);

  return (
    <>
      <header
        className={`wrapper fixed inset-x-0 top-0 z-50 bg-header transition-all ${
          showBg ? 'bg-opacity-100 shadow-md' : 'bg-opacity-0'
        }`}
      >
        <div className="flex h-[90px] items-center justify-between text-lg font-semibold text-header-front">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Image
                src="/images/logos/logo.png"
                alt="heidelife logo"
                width={60}
                height={60}
              />
            </Link>
            <div className="hidden items-center gap-7 md:flex">
              {/* Nav links */}
              <Navigation
                className="flex gap-7"
                itemClassName="transition-colors hover:!text-header-frontHover"
              />

              {/* Shop link */}
              <IconLink
                text="Butik"
                startIcon={FaShoppingCart}
                href="https://heidelife.tebex.io/"
                className="transition-colors hover:!text-header-frontHover"
              />

              {/* Discord link */}
              <IconLink
                text="Discord"
                startIcon={FaDiscord}
                href="https://discord.gg/NBppK3W76m"
                className="transition-colors hover:!text-header-frontHover"
              />
            </div>
          </div>

          <Contacts
            className="hidden gap-5 text-2xl md:flex"
            itemClassName="hover:text-header-frontHover transition-colors"
          />

          {/* Mobile menu button */}
          <HiMenuAlt3
            className="text-[42px] transition-colors hover:text-header-frontHover md:hidden"
            role="button"
            onClick={toggleMobileNav}
          />
        </div>
      </header>

      {/* Mobile Nav */}
      <MobileNav display={mobileNavVisible} toggleMobileNav={toggleMobileNav} />
    </>
  );
};

export default Header;
