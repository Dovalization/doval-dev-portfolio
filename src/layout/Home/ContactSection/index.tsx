import { ContactForm } from "@/components/ContactForm";
import * as S from "./styles";

export const ContactSection = () => {
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <ContactForm />
      </S.ContentContainer>
    </S.Wrapper>
  );
};
