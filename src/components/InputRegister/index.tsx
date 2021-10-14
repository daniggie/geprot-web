import React, { InputHTMLAttributes, useState, useCallback, useRef, useEffect } from "react";
import { useField } from "@unform/core";

import {Container, Error} from "./styles";

interface InputRegisterProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
}

const InputRegister:React.FC<InputRegisterProps> = ({name, ...rest}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const {fieldName, defaultValue, error, registerField} = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      { error &&(
        <Error title={error}>
            <div className="spanError"></div>
        </Error>
      )}
    </Container>
  );
}

export default InputRegister;