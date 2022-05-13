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
      <h1>
        Quem é <span>Guilherme Doval?</span>
      </h1>
      <EmblaCarousel options={{ loop: true, align: "center", speed: 5 }}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </EmblaCarousel>
    </S.Wrapper>
  );
};
