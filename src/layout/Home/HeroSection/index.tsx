import { Button } from "@/components/Button";
import { useScrollTo } from "@/hooks/useScrollTo";
import heroBgMobile from "@public/images/doval-dev-hero-mobile.jpg";
import heroBgDesktop from "@public/images/doval-dev-hero.png";
import Image from "next/image";
import { Mail } from "styled-icons/feather";
import * as A from "./animations";
import * as S from "./styles";

// Sections are used to group related components together
// they're also used to hold state related to specific layout sections

// Naming convention:
// - SectionName: "MySection"
// - SectionNameProps: "MySectionProps"

interface HeroSectionProps {
  title: string;
  subtitle: string;
  taglines: string[];
}

export const HeroSection = ({
  title,
  subtitle,
  taglines,
}: HeroSectionProps) => {
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
        <S.HeroContent
          variants={A.HeroContentVariants}
          initial="initial"
          animate="animate"
        >
          <S.Title variants={A.SlideInRight}>{title}</S.Title>
          <S.Subtitle variants={A.SlideInRight}>{subtitle}</S.Subtitle>
          {/* <Typer
            typingSpeed={40}
            deleteSpeed={40}
            strings={taglines}
            autoStart
            shouldLoop
            variants={A.SlideInRight}
          /> */}
          <S.ButtonContainer variants={A.SlideInRight}>
            <Button icon={Mail} onClick={clickHandler}>
              Quero Inovar!
            </Button>
          </S.ButtonContainer>
        </S.HeroContent>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
