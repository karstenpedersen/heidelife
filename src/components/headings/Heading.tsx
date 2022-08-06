import { createElement } from "react";
import { IconType } from "react-icons/lib";

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const headingClasses = {
  h1: "title-1 mb-4",
  h2: "title-2 mb-4",
  h3: "title-3 mb-4",
  h4: "title-4 mb-2",
  h5: "title-5 mb-2",
  h6: "title-6 mb-2 ",
};

const iconClasses = {
  h1: "text-6xl",
  h2: "text-5xl",
  h3: "text-4xl",
  h4: "text-3xl",
  h5: "text-2xl",
  h6: "text-xl",
};

export interface IHeading {
  title: string;
  startIcon?: IconType;
  endIcon?: IconType;
  headingType?: HeadingType;
  className?: string;
  titleClassName?: string;
  iconClassName?: string;
}

const Heading: React.FC<IHeading> = ({
  title,
  startIcon,
  endIcon,
  headingType = "h1",
  className,
  titleClassName,
  iconClassName,
}) => {
  return (
    <>
      {createElement(
        headingType,
        {
          className: `text-inherit ${titleClassName} ${headingClasses[headingType]}`,
        },
        <div className={`flex items-center gap-3 ${className}`}>
          {startIcon &&
            createElement(startIcon, {
              className: `${iconClassName} ${iconClasses[headingType]}`,
            })}
          {title}
          {endIcon &&
            createElement(endIcon, {
              className: `${iconClassName} ${iconClasses[headingType]}`,
            })}
        </div>
      )}
    </>
  );
};

export default Heading;
