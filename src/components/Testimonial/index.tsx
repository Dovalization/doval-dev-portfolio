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
        <Image src="/images/quote.svg" width={50} height={50} alt="" />
        <S.Text>{text}</S.Text>
      </S.ContentContainer>
      <S.AuthorContainer>
        <S.AvatarWrapper>
          <Image
            src="/images/testimonial-author.jpg"
            width={100}
            height={100}
            layout="responsive"
            objectFit="contain"
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
