import Link from 'next/link';
import { IconType } from 'react-icons/lib';
import IconText from './IconText';

export interface IInternalIconLink {
  href: string;
  text?: string;
  startIcon?: IconType;
  endIcon?: IconType;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  variant?: 'primary' | 'secondary';
  stayInTop?: boolean;
}

const InternalIconLink: React.FC<IInternalIconLink> = ({
  text,
  href,
  startIcon,
  endIcon,
  className,
  textClassName,
  iconClassName,
  stayInTop = false,
}) => {
  return (
    <Link href={href} className="group max-w-max">
      <IconText
        text={text}
        startIcon={startIcon}
        endIcon={endIcon}
        className={className}
        textClassName={`${textClassName}`}
        iconClassName={`${iconClassName}`}
        stayInTop={stayInTop}
      />
    </Link>
  );
};

export default InternalIconLink;
