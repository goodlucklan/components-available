import React from "react";
import styled from "styled-components";
import IconArrow from "../../assets/icon-rightArrow.svg";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  borderColor: string;
  backgroundColor: string;
  backgroundColorHover: string;
  backgroundColorActive: string;
  iconRight?: boolean;
}

const WrapperDialogButtonA = styled.button<ButtonProps>`
  width: 100%;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 4px;
  color: #ffffff;
  background-color: ${({ backgroundColor }) => backgroundColor};

  &:hover {
    background-color: ${({ backgroundColorHover }) => backgroundColorHover};
  }

  &:focus,
  &:active {
    background-color: ${({ backgroundColorActive }) => backgroundColorActive};
  }

  @media (min-width: 768px) {
    width: max-content;
  }
`;

const ImgIcon = styled.img`
  display: inline;
  vertical-align: middle;
  margin-left: 4px;
  margin-top: -2px;
  fill: white;
`;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  borderColor,
  backgroundColor,
  backgroundColorActive,
  backgroundColorHover,
  iconRight,
}) => {
  return (
    <WrapperDialogButtonA
      data-testid="button-component"
      onClick={onClick}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      backgroundColorActive={backgroundColorActive}
      backgroundColorHover={backgroundColorHover}
    >
      {children}
      {iconRight && <ImgIcon src={IconArrow} alt="actionArrow" />}
    </WrapperDialogButtonA>
  );
};

export default Button;
