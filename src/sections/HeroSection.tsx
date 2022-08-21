import { motion } from "framer-motion";
import Image from "next/image";
import ImageBackground from "../components/utils/ImageBackground";
import IpButton from "../components/utils/IpButton";

const scaleVariants = {
  small: { width: "50%", height: "50%" },
  large: { width: "100%", height: "100%" },
};

const floatVariants = {
  inital: {
    y: 0,
  },
  animate: {
    y: 10,
    transition: {
      yoyo: Infinity,
    },
  },
};

export interface IHeroSection {}

const HeroSection: React.FC<IHeroSection> = () => {
  return (
    <section id="hero" className="h-screen">
      <ImageBackground imageSrc="/images/backgrounds/sky.png" darkBg>
        <div className="flex h-full flex-col items-center justify-center">
          <div className="flex h-[260px] w-[260px] items-center justify-center transition-all sm:h-[400px] sm:w-[400px] lg:h-[420px] lg:w-[420px]">
            <motion.div
              variants={scaleVariants}
              initial="small"
              animate="large"
              transition={{
                duration: 1,
              }}
              className="relative"
            >
              <Image
                src="/images/logos/logo-detailed.png"
                alt="logo"
                layout="fill"
                priority
              />
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
      </ImageBackground>
    </section>
  );
};

export default HeroSection;
