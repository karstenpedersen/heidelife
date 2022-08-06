import Image from "next/image";
import { ReactNode } from "react";
import Splitter from "./Splitter";

export interface IIMageSplitter {
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  reverseAfterBreak?: boolean;
  reverseBeforeBreak?: boolean;
}

const ImageSplitter: React.FC<IIMageSplitter> = ({
  children,
  imageSrc,
  imageAlt,
  className,
  reverseAfterBreak,
  reverseBeforeBreak,
}) => {
  return (
    <Splitter
      leftChildren={children}
      rightChildren={
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="object-cover"
          layout="fill"
        />
      }
      leftClassName={className}
      rightClassName="relative h-[300px]"
      reverseAfterBreak={reverseAfterBreak}
      reverseBeforeBreak={reverseBeforeBreak}
    />
  );
};

export default ImageSplitter;
