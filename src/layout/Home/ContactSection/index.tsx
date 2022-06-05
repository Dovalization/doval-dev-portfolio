import { ContactForm } from "@/components/ContactForm";
import * as S from "./styles";

export const ContactSection = () => {
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <div>
          <S.Heading>No que posso te ajudar?</S.Heading>
          <S.Subheading>
            Ficarei feliz em te ajudar a esclarecer qualquer dúvida que você
            tenha sobre meus serviços.
          </S.Subheading>
          <S.Subheading>
            Orçamentos sem compromisso, entre em contato comigo.
          </S.Subheading>
        </div>
        <ContactForm />
      </S.ContentContainer>
    </S.Wrapper>
  );
};
