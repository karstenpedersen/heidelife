import Link from "next/link";
import { IconType } from "react-icons/lib";
import IconText from "./IconText";

export interface IInternalIconLink {
  href: string;
  text?: string;
  startIcon?: IconType;
  endIcon?: IconType;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  variant?: "primary" | "secondary";
}

const InternalIconLink: React.FC<IInternalIconLink> = ({
  text,
  href,
  startIcon,
  endIcon,
  className,
  textClassName,
  iconClassName,
}) => {
  return (
    <Link href={href}>
      <a className="group max-w-max">
        <IconText
          text={text}
          startIcon={startIcon}
          endIcon={endIcon}
          className={className}
          textClassName={`${textClassName}`}
          iconClassName={`${iconClassName}`}
        />
      </a>
    </Link>
  );
};

export default InternalIconLink;
