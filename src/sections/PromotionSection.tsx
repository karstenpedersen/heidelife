import Heading from '../components/headings/Heading';
import ImageBackground from '../components/utils/ImageBackground';
import IpButton from '../components/utils/IpButton';
import Wrapper from '../components/utils/Wrapper';

export interface IPromotionSection {}

const PromotionSection: React.FC<IPromotionSection> = () => {
  return (
    <section
      id="promotion"
      className="relative h-[300px] bg-gradient-to-br from-accent to-accent-variant"
    >
      <ImageBackground imageSrc="/images/backgrounds/lobby-blured.png" darkBg>
        <Wrapper className="flex flex-col items-center justify-center gap-4">
          <Heading
            title="Spil nu på"
            className="!text-4xl text-light"
            decoration={false}
          />
          <IpButton size="lg" variant="primary" />
        </Wrapper>
      </ImageBackground>
    </section>
  );
};

export default PromotionSection;
