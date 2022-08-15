import Heading from "../components/headings/Heading";
import IpButton from "../components/utils/IpButton";
import Wrapper from "../components/utils/Wrapper";

export interface IPromotionSection {}

const PromotionSection: React.FC<IPromotionSection> = () => {
  return (
    <section
      id="promotion"
      className="relative h-[400px] bg-gradient-to-br from-secondary to-secondary-variant"
    >
      <Wrapper className="flex flex-col items-center justify-center gap-4">
        <Heading title="Spil nu på" className="!text-4xl text-surface" />
        <IpButton size="lg" variant="secondary" />
      </Wrapper>
    </section>
  );
};

export default PromotionSection;
