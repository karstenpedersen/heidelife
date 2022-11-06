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
  imageClassName?: string;
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
  imageClassName = '',
}) => {
  return (
    <Splitter
      leftChildren={children}
      rightChildren={
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="rounded object-cover"
          layout={layout}
          width={width}
          height={height}
        />
      }
      leftClassName={className}
      rightClassName={`relative ${imageClassName}`}
      reverseAfterBreak={reverseAfterBreak}
      reverseBeforeBreak={reverseBeforeBreak}
      breakPoint="md"
    />
  );
};

export default ImageSplitter;
