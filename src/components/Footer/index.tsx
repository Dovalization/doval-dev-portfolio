import { SocialIcon } from "@components/SocialIcon";
import singleLogo from "@public/images/doval-dev-logo-white-single.svg";
import Image from "next/image";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <S.LogoWrapper>
          <Image
            src={singleLogo}
            alt="Doval Dev Logo"
            layout="responsive"
            objectFit="contain"
          />
        </S.LogoWrapper>
        <S.Copyright>{`Copyright © Doval Dev ${new Date().getFullYear()}`}</S.Copyright>
        <S.SocialIconsContainer>
          <SocialIcon type="GitHub" url="https://github.com/dovalization" />
          <SocialIcon
            type="LinkedIn"
            url="https://www.linkedin.com/in/guilherme-doval/"
          />
        </S.SocialIconsContainer>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
