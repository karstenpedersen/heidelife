import { AnimatePresence, motion } from "framer-motion";
import { FaDiscord, FaShoppingCart, FaTimes } from "react-icons/fa";
import Backdrop from "../utils/Backdrop";
import IconLink from "../utils/IconLink";
import Contacts from "./Contacts";
import Navigation from "./Navigation";

export interface IMobileNav {
  display: boolean;
  toggleMobileNav: () => void;
}

const MobileNav: React.FC<IMobileNav> = ({ display, toggleMobileNav }) => {
  return (
    <AnimatePresence>
      {display && (
        <>
          <Backdrop onClick={toggleMobileNav} />

          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ type: "tween" }}
            className={`fixed top-0 right-0 z-50 flex h-full w-full flex-col gap-2 bg-background px-[5vw] shadow-lg sm:w-4/5`}
          >
            <div className="flex h-[90px] items-center">
              <FaTimes
                className="ml-auto text-[38px] text-light transition-colors hover:text-secondary"
                role="button"
                onClick={toggleMobileNav}
              />
            </div>

            <div className="flex flex-col items-center gap-10">
              <Navigation
                className="flex h-full flex-col items-center gap-5"
                itemClassName="font-semibold text-2xl transition-colors hover:!text-secondary"
                toggleMobileNav={toggleMobileNav}
              />
              <div className="flex flex-col items-center gap-3">
                <li className="list-none">
                  <IconLink
                    text="Butik"
                    startIcon={FaShoppingCart}
                    href="https://heidelife.tebex.io/"
                    textClassName="text-2xl font-semibold"
                    iconClassName="text-2xl"
                    className="transition-colors hover:text-secondary"
                  />
                </li>
                <li className="list-none">
                  <IconLink
                    text="Discord"
                    startIcon={FaDiscord}
                    href="https://discord.gg/NBppK3W76m"
                    textClassName="text-2xl "
                    iconClassName="text-2xl"
                    className="font-semibold transition-colors hover:text-secondary"
                  />
                </li>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="mb-3 font-semibold">Sociale medier</p>
                <Contacts className="flex gap-6 text-3xl" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
