import Heading from '../components/headings/Heading';
import Wrapper from '../components/utils/Wrapper';

export interface INewsSection {}

const NewsSection: React.FC<INewsSection> = () => {
  return (
    <section id="nyheder" className="bg-background py-10 sm:py-14">
      <Wrapper>
        <Heading title="Nyheder" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          vel, minus asperiores deserunt deleniti, autem exercitationem quasi
          nisi corrupti nam cum! Aliquam et harum reprehenderit consequatur
          corrupti sapiente quod adipisci repellendus beatae, quo, ad amet
          nesciunt soluta dolor illo pariatur? Porro dolorum hic fugit nam.
          Ipsam consectetur voluptates dicta eos omnis rem, libero eligendi
          beatae, nemo ex ea. Aliquam, obcaecati, consequuntur autem quas aut,
          debitis rerum quia cumque iusto magnam explicabo facilis molestias
          deleniti. Minima, illo odit repellendus vitae, rerum velit fuga unde
          officia culpa error quis impedit obcaecati atque nihil cum inventore.
          Est consectetur laudantium error id repellat. Hic.
        </p>
      </Wrapper>
    </section>
  );
};

export default NewsSection;
