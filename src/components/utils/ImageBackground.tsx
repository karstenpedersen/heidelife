import Image from "next/image";
import { ReactNode } from "react";

export interface IImageBackground {
  children: ReactNode;
  imageSrc: string;
  className?: string;
  darkBg?: boolean;
}

const ImageBackground: React.FC<IImageBackground> = ({
  children,
  imageSrc,
  className,
  darkBg,
}) => {
  return (
    <div className="relative h-full w-full">
      <Image
        src={imageSrc}
        alt="image"
        className="object-cover"
        layout="fill"
      />

      <div
        className={`absolute h-full w-full ${
          darkBg && "bg-black bg-opacity-40"
        } ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ImageBackground;
