import { Button } from "@/components/Button";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types";
import { Asset } from "contentful";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Download } from "styled-icons/feather/";
import * as S from "./styles";

const RICHTEXT_OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{children}</p>;
    },
    [MARKS.BOLD]: (node, children) => {
      return <b>{children}</b>;
    },
  },
};

interface IAboutSectionProps {
  aboutText: Document;
  cvFile: Asset;
}

export const AboutSection = ({ aboutText, cvFile }: IAboutSectionProps) => {
  const [aboutSectionText, setAboutSectionText] = useState(aboutText);

  useEffect(() => {
    setAboutSectionText(aboutText);
  }, [aboutText]);
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <S.CopyContainer>
          <S.CopyTextWrapper>
            {documentToReactComponents(aboutSectionText, RICHTEXT_OPTIONS)}
          </S.CopyTextWrapper>
          <S.ButtonContainer>
            <Button link={`https:${cvFile.fields.file.url}`} icon={Download}>
              Download CV
            </Button>
          </S.ButtonContainer>
        </S.CopyContainer>
        <S.ImageWrapper>
          <Image
            src="/images/doval-dev-profile.jpg"
            alt="Doval"
            layout="responsive"
            objectFit="contain"
            width={1000}
            height={1000}
            quality={100}
          />
        </S.ImageWrapper>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
