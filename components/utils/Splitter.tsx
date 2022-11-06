import { ReactNode } from 'react';

type BreakPoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const containerClasses = {
  sm: 'sm:grid sm:grid-cols-10 sm:gap-10',
  md: 'md:grid md:grid-cols-10 md:gap-10',
  lg: 'lg:grid lg:grid-cols-10 lg:gap-10',
  xl: 'xl:grid xl:grid-cols-10 xl:gap-10',
  '2xl': '2xl:grid 2xl:grid-cols-2 2xl:gap-10',
};

const rightClasses = {
  sm: 'sm:order-first',
  md: 'md:order-first',
  lg: 'lg:order-first',
  xl: 'xl:order-first',
  '2xl': '2xl:order-first',
};

export interface ISplitter {
  leftChildren: ReactNode;
  rightChildren: ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
  breakPoint?: BreakPoints;
  reverseAfterBreak?: boolean;
  reverseBeforeBreak?: boolean;
}

const Splitter: React.FC<ISplitter> = ({
  leftChildren,
  rightChildren,
  className,
  leftClassName,
  rightClassName,
  breakPoint = 'md',
  reverseAfterBreak = false,
  reverseBeforeBreak = false,
}) => {
  return (
    <div
      className={`flex gap-8 ${
        reverseBeforeBreak ? 'flex-col-reverse' : 'flex-col'
      } ${containerClasses[breakPoint]} ${className ?? className}`}
    >
      <div className={`col-span-5 ${leftClassName ?? leftClassName}`}>
        {leftChildren}
      </div>
      <div
        className={`col-span-5 ${rightClassName ?? rightClassName} ${
          reverseAfterBreak && rightClasses[breakPoint]
        }`}
      >
        {rightChildren}
      </div>
    </div>
  );
};

export default Splitter;
