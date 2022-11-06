import Heading from '../headings/Heading';
import IpButton from '../utils/IpButton';
import Section from '../utils/Section';
import Wrapper from '../utils/Wrapper';

export interface IPromotionSection {}

const PromotionSection: React.FC<IPromotionSection> = () => {
  return (
    <Section
      id="promotion"
      className="relative h-[350px]"
      background="bg-accent"
    >
      <Wrapper className="flex flex-col items-center justify-center gap-4">
        <Heading title="Spil nu på" className="!text-4xl text-accent-front" />
        <IpButton size="lg" variant="secondary" />
      </Wrapper>
    </Section>
  );
};

export default PromotionSection;
