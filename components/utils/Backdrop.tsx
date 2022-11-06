import { motion } from 'framer-motion';

export interface IBackdrop extends React.ComponentPropsWithoutRef<'button'> {
  background?: string;
  animateOpacity?: number;
}

const Backdrop: React.FC<IBackdrop> = ({
  onClick,
  background = 'bg-black',
  ..._
}) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'tween', duration: 0.3 }}
      className={`fixed top-0 left-0 z-50 h-full w-full transition-colors ${background}`}
      onClick={onClick}
    />
  );
};

export default Backdrop;
