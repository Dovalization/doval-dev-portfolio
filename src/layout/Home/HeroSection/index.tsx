import { Button } from "@/components/Button";
import { Typer } from "@/components/Typer";
import { useScrollTo } from "@/hooks/useScrollTo";
import heroBgMobile from "@public/images/doval-dev-hero-mobile.jpg";
import heroBgDesktop from "@public/images/doval-dev-hero.png";
import Image from "next/image";
import { Mail } from "styled-icons/feather";
import * as S from "./styles";

// Sections are used to group related components together
// they're also used to hold state related to specific layout sections

// Naming convention:
// - SectionName: "MySection"
// - SectionNameProps: "MySectionProps"

interface HeroSectionProps {
  title: string;
}

export const HeroSection = ({ title }: HeroSectionProps) => {
  const clickHandler = useScrollTo("contact-section");
  return (
    <S.Wrapper>
      <S.HeroBackgroundDesktop>
        <Image
          src={heroBgDesktop}
          layout="fill"
          objectFit="cover"
          alt="hero"
          quality={100}
          placeholder="blur"
          priority
        />
      </S.HeroBackgroundDesktop>
      <S.HeroBackgroundMobile>
        <Image
          src={heroBgMobile}
          layout="fill"
          objectFit="cover"
          alt="hero"
          quality={100}
          placeholder="blur"
          priority
        />
      </S.HeroBackgroundMobile>
      <S.ContentContainer>
        <S.HeroContent>
          <h1>{title}</h1>
          <Typer
            typingSpeed={40}
            deleteSpeed={40}
            strings={[
              "Criação de Sites Personalizados 💻",
              "Desenvolvimento de Landing Pages 📃",
              "E-Commerce e Lojas Virtuais 🛒",
              "Aplicativos Mobile e Web 📱",
              "Dados sobre seu Público Alvo 📊",
              "Soluções para Marketing Digital 📈",
              "Consultoria em Tecnologia 💡",
              "Design UX/UI ✒️",
            ]}
            autoStart
            shouldLoop
          />
          <Button icon={Mail} onClick={clickHandler}>
            Quero Inovar!
          </Button>
        </S.HeroContent>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
