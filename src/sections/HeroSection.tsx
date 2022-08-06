import { motion } from "framer-motion";
import Image from "next/image";
import IpButton from "../components/utils/IpButton";

export interface IHeroSection {}

const HeroSection: React.FC<IHeroSection> = () => {
  return (
    <section id="hero" className="h-[400px] sm:h-[550px]">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative flex h-[250px] w-[250px] items-center justify-center transition-all sm:h-[350px] sm:w-[350px]">
          <motion.div
            initial={{ width: "50%", height: "50%" }}
            animate={{ width: "100%", height: "100%" }}
            transition={{
              duration: 1,
            }}
            className="relative"
          >
            <Image src="/images/logos/logo.png" alt="logo" layout="fill" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <IpButton />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
