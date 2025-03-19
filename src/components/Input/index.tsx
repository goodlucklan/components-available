import React from "react";
import styled from "styled-components";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  iconRight?: string; // URL del icono opcional
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: 10px 16px;
  margin: 8px 0px;
  font-size: 14px;
  border: 1px solid ${({ borderColor }) => borderColor || "#ccc"};
  border-radius: 4px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  color: ${({ textColor }) => textColor || "#000"};
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Icon = styled.img`
  position: absolute;
  right: 10px;
  width: 16px;
  height: 16px;
`;

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  borderColor,
  backgroundColor,
  textColor,
  iconRight,
}) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <InputContainer>
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          textColor={textColor}
        />
        {iconRight && <Icon src={iconRight} alt="icon" />}
      </InputContainer>
    </InputWrapper>
  );
};

export default Input;
