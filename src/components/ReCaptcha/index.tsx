import { forwardRef } from "react";
import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha";
import * as S from "./styles";
type RecaptchaProps = Omit<ReCAPTCHAProps, "sitekey">;

export const ReCaptcha = forwardRef<ReCAPTCHA, RecaptchaProps>((props, ref) => (
  <S.Wrapper>
    <ReCAPTCHA
      ref={ref}
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
      {...props}
      size="invisible"
    />
  </S.Wrapper>
));

ReCaptcha.displayName = "ReCaptcha";
