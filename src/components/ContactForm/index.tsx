import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FormProvider, useForm } from "react-hook-form";
import { CheckCircle, Loader, Send } from "styled-icons/feather/";
import * as yup from "yup";
import { Button } from "../Button";
import { Input } from "../Input";
import { ReCaptcha } from "../ReCaptcha";
import * as S from "./styles";

interface SubcriptionFormFields {
  email: string;
  name: string;
  message: string;
  recaptcha: boolean;
}

const SubscriptionFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("O e-mail é obrigatório"),
  name: yup
    .string()
    .min(2, "Deve ter no mínimo 2 caracteres")
    .required("O nome é obrigatório"),
  message: yup
    .string()
    .min(10, "Deve ter no mínimo 10 caracteres")
    .required("A mensagem é obrigatória"),
  recaptcha: yup
    .boolean()
    .required("Por favor, confirme que você não é um robô")
    .oneOf([true], "Por favor, resolva o captcha"),
});

export const ContactForm = () => {
  const { formState, handleSubmit, setValue, register, ...rest } =
    useForm<SubcriptionFormFields>({
      resolver: yupResolver<yup.AnyObjectSchema>(SubscriptionFormSchema),
    });

  const [captcha, setCaptcha] = useState<boolean>(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [submitButtonState, setSubmitButtonState] = useState<
    "default" | "loading" | "success"
  >("default");

  const { isSubmitSuccessful, isSubmitting } = formState;

  useEffect(() => {
    register("recaptcha", { required: true, value: false });
  }, [register]);

  useEffect(() => {
    if (captcha) {
      setValue("recaptcha", captcha);
    }
  }, [captcha, setValue]);

  const onCaptchaChange = useCallback((value: string | null) => {
    if (!value) {
      setCaptcha(false);
    }

    setCaptcha(Boolean(value));
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      setSubmitButtonState("success");
    }

    if (isSubmitting) {
      setSubmitButtonState("loading");
    }

    if (!isSubmitting && !isSubmitSuccessful) {
      setSubmitButtonState("default");
    }
  }, [isSubmitSuccessful, isSubmitting]);

  const submitButtonIcons = {
    default: Send,
    loading: Loader,
    success: CheckCircle,
  };

  const submitButtonText = {
    default: "Enviar",
    loading: "Enviando...",
    success: "Enviado!",
  };

  const submitForm = useCallback(async (data: SubcriptionFormFields) => {
    if (!data.recaptcha) {
      return;
    }

    if (data.recaptcha) {
      try {
        const res = await axios.post("/api/contact", data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
      console.log(data);
    }
  }, []);

  return (
    <FormProvider {...{ formState, handleSubmit, setValue, register, ...rest }}>
      <S.Wrapper
        onSubmit={handleSubmit(submitForm)}
        $isSubmitSuccessful={isSubmitSuccessful}
      >
        <S.Title>
          Entre em <span>Contato</span>
        </S.Title>
        <S.FieldsContainer>
          <Input
            name="name"
            type="text"
            placeholder="Nome"
            disabled={isSubmitSuccessful}
          />
          <Input
            name="email"
            type="email"
            placeholder="E-mail"
            disabled={isSubmitSuccessful}
          />
          <Input
            name="message"
            type="textarea"
            placeholder="Mensagem..."
            disabled={isSubmitSuccessful}
          />
        </S.FieldsContainer>
        {!isSubmitSuccessful && (
          <ReCaptcha ref={recaptchaRef} onChange={onCaptchaChange} />
        )}

        <S.SuccessMessage open={isSubmitSuccessful}>
          Obrigado por seu contato! {"👋🏻"}
          <span>
            Podes também conhecer mais sobre mim em meu{" "}
            <Link href="https://www.linkedin.com/in/guilherme-doval/">
              LinkedIn
            </Link>
          </span>
        </S.SuccessMessage>
        <Button
          type="submit"
          icon={submitButtonIcons[submitButtonState]}
          disabled={isSubmitting || isSubmitSuccessful}
        >
          {submitButtonText[submitButtonState]}
        </Button>
      </S.Wrapper>
    </FormProvider>
  );
};
