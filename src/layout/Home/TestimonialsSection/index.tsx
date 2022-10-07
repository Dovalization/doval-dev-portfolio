import { EmblaCarousel } from "@/components/EmblaCarousel";
import { Testimonial } from "@/components/Testimonial";
import { ITestimonialFields } from "@/types/contentful.pages";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types";
import { Entry } from "contentful";
import * as S from "./styles";
interface TestimonialsSectionProps {
  testimonials: Entry<ITestimonialFields>[];
  title: Document;
  subtitle: string;
}

const RICHTEXT_OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{children}</p>;
    },
    [MARKS.BOLD]: (node, children) => {
      return <span>{children}</span>;
    },
  },
};

export const TestimonialsSection = ({
  testimonials,
  subtitle,
  title,
}: TestimonialsSectionProps) => {
  return (
    <S.Wrapper>
      <S.CopyContainer>
        <S.Heading>
          {documentToReactComponents(title, RICHTEXT_OPTIONS)}
        </S.Heading>
        <S.Subheading>{subtitle}</S.Subheading>
      </S.CopyContainer>
      <EmblaCarousel options={{ loop: true, align: "center", speed: 5 }}>
        {testimonials.map((testimonial, index) => (
          <Testimonial
            authorAvatar={testimonial.fields.authorAvatar}
            authorName={testimonial.fields.authorName}
            authorTitle={testimonial.fields.authorTitle}
            testimonialText={testimonial.fields.testimonialText}
            key={index}
          />
        ))}
      </EmblaCarousel>
    </S.Wrapper>
  );
};
