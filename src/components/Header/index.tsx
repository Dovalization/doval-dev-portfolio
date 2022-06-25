import { SocialIcon } from "@components/SocialIcon";
import fullLogo from "@public/images/doval-dev-logo-white-full.svg";
import Image from "next/image";
import * as A from "./animations";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Wrapper {...A.HeaderVariants}>
      <S.ContentContainer>
        <S.LogoWrapper>
          <Image
            src={fullLogo}
            alt="Doval Dev Logo"
            layout="responsive"
            objectFit="contain"
            priority
          />
        </S.LogoWrapper>
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
