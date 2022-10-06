import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { SocialIcon } from "@/components/SocialIcon";
import { Mail, MapPin, Phone } from "styled-icons/feather/";
import * as S from "./styles";

export const ContactSection = () => {
  return (
    <S.Wrapper id="contact-section">
      <S.ContentContainer>
        <S.LeftContainer>
          <S.Heading>
            No que <span>posso te ajudar?</span>
          </S.Heading>
          <div>
            <S.Subheading>
              Ficarei feliz em te ajudar a esclarecer qualquer dúvida que você
              tenha sobre meus serviços e espero poder trabalhar com você em
              breve!
            </S.Subheading>
            <S.Subheading>
              Todos projetos são feitos sob medida, então não hesite em me
              contactar para solicitar um orçamento ou para conversar sobre suas
              ideias e objetivos.
            </S.Subheading>
          </div>
          <S.ContactsContainer>
            <Button link="tel:+5551995808044" icon={Phone}>
              +55 (51) 9 9580-8044
            </Button>
            <Button link="mailto:me@doval.dev" icon={Mail}>
              me@doval.dev
            </Button>
            <Button
              link="https://pt.wikipedia.org/wiki/Porto_Alegre"
              icon={MapPin}
            >
              Porto Alegre, Brasil
            </Button>
          </S.ContactsContainer>
          <S.SocialLinksContainer>
            <SocialIcon type="GitHub" url="https://github.com/dovalization" />
            <SocialIcon
              type="LinkedIn"
              url="https://www.linkedin.com/in/guilherme-doval/"
            />
          </S.SocialLinksContainer>
        </S.LeftContainer>
        <S.RightContainer>
          <ContactForm />
        </S.RightContainer>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
