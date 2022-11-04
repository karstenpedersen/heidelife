import Heading from '../components/headings/Heading';
import IpButton from '../components/utils/IpButton';
import Section from '../components/utils/Section';
import Wrapper from '../components/utils/Wrapper';

export interface IPromotionSection {}

const PromotionSection: React.FC<IPromotionSection> = () => {
  return (
    <Section
      id="promotion"
      className="relative h-[350px]"
      backgroundImgSrc="/images/backgrounds/lobby-blured.png"
    >
      <Wrapper className="flex flex-col items-center justify-center gap-4">
        <Heading
          title="Spil nu på"
          className="!text-4xl text-light"
          decoration={false}
        />
        <IpButton size="lg" variant="primary" />
      </Wrapper>
    </Section>
  );
};

export default PromotionSection;
