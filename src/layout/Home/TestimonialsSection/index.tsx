import { EmblaCarousel } from "@/components/EmblaCarousel";
import { Testimonial } from "@/components/Testimonial";
import { Testimonial as TestimonialT } from "@/types/common";
import * as S from "./styles";

interface TestimonialsSectionProps {
  testimonials: TestimonialT[];
}

export const TestimonialsSection = ({
  testimonials,
}: TestimonialsSectionProps) => {
  return (
    <S.Wrapper>
      <S.Heading>
        Quem é <span>Guilherme Doval?</span>
      </S.Heading>
      <EmblaCarousel options={{ loop: true, align: "center", speed: 5 }}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </EmblaCarousel>
    </S.Wrapper>
  );
};
