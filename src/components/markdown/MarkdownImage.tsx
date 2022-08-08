import Image from "next/image";

export interface IMarkdownImage {
  src: string;
  alt?: string;
}

const MarkdownImage: React.FC<IMarkdownImage> = ({ src, alt = "" }) => {
  return (
    <div className="h-[200px] w-[200px]">
      <Image src={src} alt={alt} layout="fill" />;
    </div>
  );
};

export default MarkdownImage;
