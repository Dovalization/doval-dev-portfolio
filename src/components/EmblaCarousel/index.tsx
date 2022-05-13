import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { ReactNode, useCallback } from "react";
import * as S from "./styles";

interface EmblaCarouselProps {
  options?: EmblaOptionsType;
  children: ReactNode[];
}

export const EmblaCarousel = ({
  children: slides,
  options,
}: EmblaCarouselProps) => {
  const autoplayOptions: AutoplayOptionsType = {
    playOnInit: true,
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const autoplay = Autoplay(autoplayOptions);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay]);

  const scrollToClickedSlide = useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const handleSlideClick = useCallback(
    (index: number) => {
      scrollToClickedSlide(index);
    },
    [scrollToClickedSlide]
  );

  return (
    <S.Wrapper className="embla" ref={emblaRef}>
      <S.Container className="embla__container">
        {slides.map((slide, index) => (
          <S.Slide
            className="embla__slide"
            key={index}
            onClick={() => handleSlideClick(index)}
          >
            {slide}
          </S.Slide>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};
