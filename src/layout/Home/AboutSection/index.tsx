import { Button } from "@/components/Button";
import Image from "next/image";
import { Download } from "styled-icons/feather/";
import * as S from "./styles";

export const AboutSection = () => {
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <S.CopyContainer>
          <S.Copy>
            Guilherme Doval tem 27 anos e{" "}
            <strong>
              é Mestre em Design e Cultura Visual e Tecnólogo em Jogos Digitais.
            </strong>{" "}
            Ele é um profissional <strong>altamente versátil,</strong> com foco
            em <strong>acessibilidade,</strong> ética e utilizando de uma{" "}
            <strong>perspectiva humanista e abrangente.</strong> Por sua própria
            definição: um <strong>solucionador de problemas criativo.</strong>
            <br />
            <br />
            Guilherme trabalha com <strong>Programação Web,</strong>
            especializado em <strong>Front-End,</strong> e com as tecnologias
            mais recentes do mercado. Aliado a habilidades de{" "}
            <strong>UX/UI Design,</strong> ele é capaz de conduzir um projeto
            digital desde sua concepção até sua implementação em código,
            resultando em{" "}
            <strong>
              {" "}
              sites responsivos, rápidos e que trazem resultados.
            </strong>
          </S.Copy>
          <S.ButtonContainer>
            <Button
              link="documents/guilherme-doval-cv-2022.pdf"
              icon={Download}
              download
            >
              Download CV
            </Button>
          </S.ButtonContainer>
        </S.CopyContainer>
        <S.ImageWrapper>
          <Image
            src="/images/doval-dev-profile.jpg"
            alt="Doval"
            layout="responsive"
            objectFit="contain"
            width={1000}
            height={1000}
            quality={100}
          />
        </S.ImageWrapper>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
