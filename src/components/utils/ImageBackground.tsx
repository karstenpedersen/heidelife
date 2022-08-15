import Image from "next/image";
import { ReactNode } from "react";

export interface IImageBackground {
  children: ReactNode;
  imageSrc: string;
  className?: string;
  darkBg?: boolean;
  gradient?: boolean;
}

const ImageBackground: React.FC<IImageBackground> = ({
  children,
  imageSrc,
  className,
  darkBg,
  gradient = false,
}) => {
  return (
    <div className="relative h-full w-full">
      <Image
        src={imageSrc}
        alt="image"
        className="object-cover"
        layout="fill"
      />

      {gradient && (
        <div className="absolute h-full w-full bg-gradient-to-b from-secondary to-secondary-variant opacity-90" />
      )}

      <div
        className={`absolute h-full w-full ${
          darkBg && "bg-black bg-opacity-20"
        } ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ImageBackground;
