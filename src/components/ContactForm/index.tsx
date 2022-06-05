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
});

export const ContactForm = () => {
  const { formState, handleSubmit, setValue, register, ...rest } =
    useForm<SubcriptionFormFields>({
      resolver: yupResolver<yup.AnyObjectSchema>(SubscriptionFormSchema),
    });

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [submitButtonState, setSubmitButtonState] = useState<
    "default" | "loading" | "success"
  >("default");

  const { isSubmitSuccessful, isSubmitting } = formState;

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

  const onSubmitWithReCAPTCHA = useCallback(async () => {
    const token = await recaptchaRef.current?.executeAsync();

    if (!token) {
      return;
    }

    return token;
  }, []);

  const submitForm = useCallback(
    async (formData: SubcriptionFormFields) => {
      const token = await onSubmitWithReCAPTCHA();

      if (!token) {
        return;
      }

      const payload = {
        ...formData,
        token,
      };

      try {
        const res = await axios.post("/api/contact", payload);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
      console.log(formData);
    },
    [onSubmitWithReCAPTCHA]
  );

  return (
    <FormProvider {...{ formState, handleSubmit, setValue, register, ...rest }}>
      <S.Wrapper
        onSubmit={handleSubmit(submitForm)}
        $isSubmitSuccessful={isSubmitSuccessful}
      >
        <S.FieldsContainer layout="position">
          <Input
            name="name"
            id="name"
            type="text"
            placeholder="Seu Nome"
            disabled={isSubmitSuccessful}
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@address.com"
            disabled={isSubmitSuccessful}
          />
          <Input
            id="message"
            name="message"
            type="textarea"
            placeholder="Escreva sua mensagem aqui."
            disabled={isSubmitSuccessful}
          />
        </S.FieldsContainer>

        <S.SuccessMessage open={isSubmitSuccessful}>
          Obrigado por seu contato! {"👋🏻"}
          <span>
            Podes também conhecer mais sobre mim em meu{" "}
            <Link href="https://www.linkedin.com/in/guilherme-doval/">
              LinkedIn.
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
        <ReCaptcha ref={recaptchaRef} size="invisible" hidden={true} />
      </S.Wrapper>
    </FormProvider>
  );
};
