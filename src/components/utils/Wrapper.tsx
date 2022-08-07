import { ReactNode } from "react";

export interface IWrapper extends React.ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

const Wrapper: React.FC<IWrapper> = ({
  children,
  className,
  containerClassName,
  ..._
}) => {
  return (
    <div
      className={`h-full w-full bg-inherit ${
        containerClassName ?? containerClassName
      }`}
    >
      <div
        className={`max-w-[75rem mx-auto h-full w-[90vw] ${
          className ?? className
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
