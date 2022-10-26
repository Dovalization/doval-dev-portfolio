import type { ITestimonialFields } from "@/types/contentful.pages";
import Image from "next/image";
import * as S from "./styles";

export const Testimonial = ({
  authorName,
  authorTitle,
  authorAvatar,
  testimonialText,
}: ITestimonialFields) => {
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <S.QuoteWrapper>
          <Image src="/images/quote.svg" alt="quote" width={50} height={50} />
        </S.QuoteWrapper>
        <S.Text>{testimonialText}</S.Text>
      </S.ContentContainer>
      <S.AuthorContainer>
        <S.AvatarWrapper>
          <Image
            src={`https:${authorAvatar.fields.file.url}`}
            alt={`Picture of ${authorName}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
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
