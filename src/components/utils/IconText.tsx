import { createElement } from 'react';
import { IconType } from 'react-icons/lib';

export interface IIconText {
  text?: string;
  startIcon?: IconType;
  endIcon?: IconType;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  stayInTop?: boolean;
}

const IconText: React.FC<IIconText> = ({
  text,
  startIcon,
  endIcon,
  className,
  textClassName,
  iconClassName,
  stayInTop = false,
}) => {
  return (
    <div className={`flex items-center gap-2 transition-all ${className}`}>
      {startIcon &&
        createElement(startIcon, {
          className: `text-lg ${stayInTop && 'mb-auto mt-1'} ${iconClassName}`,
        })}
      {text && <p className={`${textClassName}`}>{text}</p>}
      {endIcon &&
        createElement(endIcon, {
          className: `text-lg  ${iconClassName}`,
        })}
    </div>
  );
};

export default IconText;
