import type { Testimonial as TestimonialT } from "@/types/common";
import Image from "next/image";
import * as S from "./styles";

export const Testimonial = ({
  authorName,
  authorTitle,
  avatar,
  id,
  text,
}: TestimonialT) => {
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <S.QuoteWrapper>
          <Image
            src="/images/quote.svg"
            alt="quote"
            layout="responsive"
            width="100%"
            height="100%"
          />
        </S.QuoteWrapper>
        <S.Text>{text}</S.Text>
      </S.ContentContainer>
      <S.AuthorContainer>
        <S.AvatarWrapper>
          <Image
            src={avatar}
            layout="responsive"
            objectFit="cover"
            width={100}
            height={100}
            alt={`Picture of ${authorName}`}
          />
        </S.AvatarWrapper>
        <S.AuthorInfo>
          <S.AuthorName>{authorName}</S.AuthorName>
          <S.AuthorTitle>{authorTitle}</S.AuthorTitle>
        </S.AuthorInfo>
      </S.AuthorContainer>
    </S.Wrapper>
  );
};
