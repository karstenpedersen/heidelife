import Heading from "../components/headings/Heading";
import ImageBackground from "../components/utils/ImageBackground";
import IpButton from "../components/utils/IpButton";
import Wrapper from "../components/utils/Wrapper";

export interface IPromotionSection {}

const PromotionSection: React.FC<IPromotionSection> = () => {
  return (
    <section id="promotion" className="h-[400px]">
      <ImageBackground imageSrc="/images/hero.jpg" darkBg>
        <Wrapper className="flex flex-col items-center justify-center gap-4">
          <Heading title="Spil nu på" className="!text-4xl text-surface" />
          <IpButton size="lg" variant="secondary" />
        </Wrapper>
      </ImageBackground>
    </section>
  );
};

export default PromotionSection;
