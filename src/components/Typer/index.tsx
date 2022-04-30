import GraphemeSplitter from "grapheme-splitter";
import { useCallback } from "react";
import Typewriter from "typewriter-effect";
import * as S from "./styles";

type TypeWriterProps = typeof Typewriter;

interface TyperProps {
  typingSpeed?: number;
  deleteSpeed?: number;
  strings: string[] | string;
  shouldLoop?: true;
  autoStart?: true;
}
export const Typer = ({
  typingSpeed,
  deleteSpeed,
  strings,
  autoStart,
  shouldLoop,
}: TyperProps) => {
  const stringSplitter = useCallback((string: string) => {
    const splitter = new GraphemeSplitter();
    const splitString = splitter.splitGraphemes(string);
    return splitString;
    // join the array of graphemes into a string
  }, []);

  return (
    <S.Wrapper>
      <Typewriter
        options={{
          strings: strings,
          stringSplitter: stringSplitter,
          autoStart: autoStart,
          loop: shouldLoop,
          delay: typingSpeed,
          deleteSpeed: deleteSpeed,
          cursor: "_",
          wrapperClassName: "typer-wrapper",
          cursorClassName: "typer-cursor",
        }}
      />
    </S.Wrapper>
  );
};
