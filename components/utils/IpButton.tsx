import { FaLink } from 'react-icons/fa';
import IconText from './IconText';

const classes = {
  size: {
    md: {
      icon: 'sm:!text-2xl !text-lg',
      text: 'sm:text-3xl text-xl',
    },
    lg: {
      icon: 'sm:!text-3xl !text-lg',
      text: 'sm:text-4xl text-2xl',
    },
  },
  variant: {
    primary: 'text-accent-front hover:bg-accent-2 bg-accent',
    secondary:
      'text-background hover:bg-accent-2 bg-accent-front hover:text-accent-front',
  },
};

export interface IIpButton extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
  size?: 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

const IpButton: React.FC<IIpButton> = ({
  className,
  size = 'md',
  variant = 'primary',
  ..._
}) => {
  return (
    <button
      className={`rounded transition-all ${className} ${classes.variant[variant]}`}
      onClick={() => {
        navigator.clipboard.writeText('mc.heidelife.dk');
      }}
    >
      <IconText
        text="mc.heidelife.dk"
        endIcon={FaLink}
        className="px-2 pb-1"
        textClassName={`font-bold uppercase ${classes.size[size].text}`}
        iconClassName={`${classes.size[size].icon}`}
      />
    </button>
  );
};

export default IpButton;
