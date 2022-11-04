import Image from 'next/image';
import { ReactNode } from 'react';

export interface ISection extends React.ComponentPropsWithoutRef<'section'> {
  id: string;
  children: ReactNode;
  className?: string;
  padding?: boolean;
  background?: string;
  backgroundImgSrc?: string;
}

const Section: React.FC<ISection> = ({
  id,
  className,
  children,
  padding = true,
  background = 'bg-background',
  backgroundImgSrc,
  ..._
}) => {
  return (
    <section
      id={id}
      className={`relative ${className} ${padding && 'py-10 sm:py-14'} ${
        backgroundImgSrc ? 'bg-transparent' : background
      }`}
    >
      {backgroundImgSrc && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={backgroundImgSrc}
            alt="image"
            className="object-cover"
            layout="fill"
          />
        </div>
      )}

      {children}
    </section>
  );
};

export default Section;
