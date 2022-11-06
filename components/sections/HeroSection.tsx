import { motion } from 'framer-motion';
import Image from 'next/image';
import IpButton from '../utils/IpButton';
import Section from '../utils/Section';

const scaleVariants = {
  initial: { y: 0 },
  animate: { y: '-8%' },
};

export interface IHeroSection {}

const HeroSection: React.FC<IHeroSection> = () => {
  return (
    <Section
      id="hero"
      className="h-screen"
      padding={false}
      background="bg-gradient-to-b from-accent-2 to-accent-front"
    >
      <div className="flex h-full flex-col items-center justify-center">
        <motion.div
          variants={scaleVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="relative aspect-square w-[420px] max-w-[65vw]"
        >
          <Image
            src="/images/logos/logo-detailed.png"
            alt=""
            layout="fill"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <IpButton />
        </motion.div>
      </div>
    </Section>
  );
};

export default HeroSection;
