import { AnimatePresence, motion } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import Backdrop from "../utils/Backdrop";
import IconLink from "../utils/IconLink";
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
            className={`fixed top-0 right-0 z-50 flex h-full w-full flex-col gap-2 bg-white px-[5vw] shadow-lg sm:w-4/5`}
          >
            <div className="flex h-[90px] items-center">
              <FaTimes
                className="ml-auto text-[38px] text-dark transition-colors hover:text-primary"
                role="button"
                onClick={toggleMobileNav}
              />
            </div>

            <div className="flex flex-col items-center gap-12">
              <Navigation
                className="flex h-full flex-col items-center gap-8"
                itemClassName="font-semibold text-2xl transition-colors hover:!text-primary"
                toggleMobileNav={toggleMobileNav}
              />
              <div className="flex flex-col items-center gap-4">
                <li className="list-none">
                  <IconLink
                    text="Butik"
                    endIcon={FaExternalLinkAlt}
                    href="#"
                    textClassName="text-2xl font-semibold"
                    iconClassName="text-2xl"
                    className="transition-colors hover:text-primary"
                  />
                </li>
                <li className="list-none">
                  <IconLink
                    text="Discord"
                    endIcon={FaExternalLinkAlt}
                    href="#"
                    textClassName="text-2xl "
                    iconClassName="text-2xl"
                    className="font-semibold transition-colors hover:text-primary"
                  />
                </li>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
