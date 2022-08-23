import Image from 'next/image';
import { ReactNode } from 'react';
import Splitter from './Splitter';

export interface IIMageSplitter {
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  reverseAfterBreak?: boolean;
  reverseBeforeBreak?: boolean;
  layout?: 'fill' | 'responsive';
  width?: number;
  height?: number;
}

const ImageSplitter: React.FC<IIMageSplitter> = ({
  children,
  imageSrc,
  imageAlt,
  className,
  reverseAfterBreak,
  reverseBeforeBreak,
  layout = 'fill',
  width,
  height,
}) => {
  return (
    <Splitter
      leftChildren={children}
      rightChildren={
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="object-cover"
          layout={layout}
          width={width}
          height={height}
        />
      }
      leftClassName={className}
      rightClassName="relative"
      reverseAfterBreak={reverseAfterBreak}
      reverseBeforeBreak={reverseBeforeBreak}
      breakPoint="md"
    />
  );
};

export default ImageSplitter;
