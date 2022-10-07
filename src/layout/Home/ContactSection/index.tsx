import { Button } from "@/components/Button";
import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types";
import { MapPin, Phone } from "styled-icons/feather/";
import * as S from "./styles";

import { ContactForm } from "@/components/ContactForm";
import { SocialIcon } from "@/components/SocialIcon";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { useMemo } from "react";
import { Mail } from "styled-icons/entypo";

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
export interface IContactSectionProps {
  title: Document;
  text: Document;
  phoneNumber: string;
  contactEmail: string;
  locationName: string;
  locationWikiLink: string;
}

// function will format phone number coming as: "+5511999999999"
// to: "(11) 99999-9999"

const formatPhoneNumber = (phoneNumber: string) => {
  return `(${phoneNumber.replace(/\D/g, "").slice(2, 4)}) ${phoneNumber
    .replace(/\D/g, "")
    .slice(4, 9)}-${phoneNumber.replace(/\D/g, "").slice(9, 13)}`;
};

export const ContactSection = ({
  contactEmail,
  locationName,
  locationWikiLink,
  phoneNumber,
  text,
  title,
}: IContactSectionProps) => {
  const formattedPhoneNumber = useMemo(() => {
    return formatPhoneNumber(phoneNumber);
  }, [phoneNumber]);

  return (
    <S.Wrapper id="contact-section">
      <S.ContentContainer>
        <S.LeftContainer>
          <S.Heading>
            {documentToReactComponents(title, RICHTEXT_OPTIONS)}
          </S.Heading>
          <S.TextContainer>
            {documentToReactComponents(text, RICHTEXT_OPTIONS)}
          </S.TextContainer>
          <S.ContactsContainer>
            <Button link={`tel:${phoneNumber}`} icon={Phone}>
              {formattedPhoneNumber}
            </Button>
            <Button link={`mailto:${contactEmail}`} icon={Mail}>
              {contactEmail}
            </Button>
            <Button link={locationWikiLink} icon={MapPin}>
              {locationName}
            </Button>
          </S.ContactsContainer>
          <S.SocialLinksContainer>
            <SocialIcon type="GitHub" url="https://github.com/dovalization" />
            <SocialIcon
              type="LinkedIn"
              url="https://www.linkedin.com/in/guilherme-doval/"
            />
          </S.SocialLinksContainer>
        </S.LeftContainer>
        <S.RightContainer>
          <ContactForm />
        </S.RightContainer>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
