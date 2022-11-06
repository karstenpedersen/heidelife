import { IconType } from 'react-icons/lib';
import IconText from './IconText';

export interface IIconLink {
  href: string;
  text?: string;
  startIcon?: IconType;
  endIcon?: IconType;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
}

const IconLink: React.FC<IIconLink> = ({
  text,
  href,
  startIcon,
  endIcon,
  className,
  textClassName,
  iconClassName,
}) => {
  return (
    <a
      href={href}
      target={'_blank'}
      rel="noreferrer"
      className="group max-w-max"
    >
      <IconText
        text={text}
        startIcon={startIcon}
        endIcon={endIcon}
        className={className}
        textClassName={`${textClassName}`}
        iconClassName={`${iconClassName}`}
      />
    </a>
  );
};

export default IconLink;
