import { Typer } from "@/components/Typer";
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
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <S.HeroContainer>
          <S.HeroBackground>
            <video
              src="/videos/doval-dev-hero-bg.mp4"
              autoPlay
              loop
              muted
              width="100%"
            />
          </S.HeroBackground>
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
          </S.HeroContent>
        </S.HeroContainer>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
