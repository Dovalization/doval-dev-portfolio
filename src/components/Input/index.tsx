import { AnimatePresence } from "framer-motion";
import { InputHTMLAttributes, useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";
import * as A from "./animations";
import * as S from "./styles";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  name: string;
  type?: "textarea" | "text" | "email" | "password";
}

export const Input = ({ name, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const {
    watch,
    formState: { errors },
    register,
  } = useFormContext();

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!watch(name));
  }, [name, watch]);

  return (
    <AnimatePresence>
      <S.Container>
        <S.Wrapper
          $isErrored={!!errors[name]}
          $isFilled={isFilled}
          $isFocused={isFocused}
        >
          {props.type === "textarea" ? (
            <textarea
              {...props}
              {...register(name)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          ) : (
            <input
              {...props}
              {...register(name)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          )}
        </S.Wrapper>
        {errors[name] && (
          <S.Error {...A.ErrorVariant}>{errors[name]?.message}</S.Error>
        )}
      </S.Container>
    </AnimatePresence>
  );
};
