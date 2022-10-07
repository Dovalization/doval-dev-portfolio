import type { ITestimonialFields } from "@/types/contentful.pages";
import Image from "next/image";
import * as S from "./styles";

export const Testimonial = ({
  authorName,
  authorTitle,
  authorAvatar,
  testimonialText,
}: ITestimonialFields) => {
  console.log({ authorAvatar, testimonialText, authorName, authorTitle });
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
        <S.Text>{testimonialText}</S.Text>
      </S.ContentContainer>
      <S.AuthorContainer>
        <S.AvatarWrapper>
          <Image
            src={`https:${authorAvatar.fields.file.url}`}
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
