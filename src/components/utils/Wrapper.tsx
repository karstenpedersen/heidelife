import { ReactNode } from 'react';

export interface IWrapper extends React.ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

const Wrapper: React.FC<IWrapper> = ({
  children,
  className = '',
  containerClassName = '',
  ..._
}) => {
  return (
    <div className={`h-full w-full bg-inherit ${containerClassName}`}>
      <div className={`mx-auto h-full w-[90vw] max-w-[75rem] ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
