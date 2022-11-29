import Link from "next/link";
import React from "react";

import { Icon, IconSize } from "../Icon/Icon";
import { ButtonWrapper, HelpText, StyledButton, StyledCustomButton, StyledH5 } from "./Button.style";

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Link = "link",
  Custom = "custom",
  FrostedLight = "frosted-light",
  FrostedDark = "frosted-dark",
}

export enum ButtonSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
  XSmall = "x-small",
  MediumCircle = "medium-circle",
  SmallCircle = "small-circle",
}

export interface IButtonProps {
  label?: string;
  href?: string;
  type?: ButtonType;
  size?: ButtonSize;
  icon?: string;
  disabled?: boolean;
  darkMode?: boolean;
  fullWidth?: boolean;
  className?: string;
  overheadLabel?: string;
  helpText?: string;
  onClickFunc?: () => void;
  tabIndex?: number;
  isLoading?:boolean;
}

export const Button: React.FC<IButtonProps> = ({
  label,
  href = "",
  type = ButtonType.Link,
  size = ButtonSize.Medium,
  fullWidth = false,
  darkMode = false,
  className = "",
  icon = "",
  children,
  overheadLabel = "",
  helpText = "",
  onClickFunc,
  tabIndex,
  disabled = false,
  isLoading = false
}) => {
  const onClickEvent = (e) => {
    e.preventDefault();
    onClickFunc && onClickFunc();
  };

  const isButton = () => {
    return type !== ButtonType.Link;
  };

  const ButtonClassName = (): string => {
    return `${isButton() && "btn"} ${type} ${size} ${fullWidth ? "full" : ""} ${
      darkMode ? "dark-mode" : ""
    } ${icon !== "" ? "has-icon" : ""} ${className}`;
  };

  const useIcon =
    icon !== "" ? <Icon size={IconSize.Medium} name={icon} /> : null;


  const LoadingSVG = <svg className="loading" version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
  viewBox="0 0 100 40" enableBackground="new 0 0 0 0">
  <circle fill="#fff" stroke="none" cx="30" cy="20" r="6">
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite"
      begin="0.1"/>    
  </circle>
  <circle fill="#fff" stroke="none" cx="50" cy="20" r="6">
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite" 
      begin="0.2"/>       
  </circle>
  <circle fill="#fff" stroke="none" cx="70" cy="20" r="6">
    <animate
      attributeName="opacity"
      dur="1s"
      values="0;1;0"
      repeatCount="indefinite" 
      begin="0.3"/>     
  </circle>
</svg>


const TextOrLoading = isLoading ? LoadingSVG : <>{useIcon}
<span className="label">{label}</span>
<span className="effects"></span></>;

  const StandardLinkButton = (
    <Link href={href} passHref prefetch={false}>
        <StyledButton className={ButtonClassName()} tabIndex={tabIndex}>
            {TextOrLoading}
        </StyledButton>
    </Link>
  );

  const StandardButton = (
    <ButtonWrapper>
      {overheadLabel && <StyledH5>{overheadLabel}</StyledH5>}
      <StyledButton className={ButtonClassName()} onClick={onClickEvent} tabIndex={tabIndex} >
        {TextOrLoading}
      </StyledButton>
      {helpText && <HelpText>{helpText} </HelpText>}
    </ButtonWrapper>
  );

  const CustomButtonLink = (
    <Link href={href} passHref prefetch={false}>
      <StyledCustomButton className="custom" tabIndex={tabIndex}>{children ? children : label}</StyledCustomButton>
    </Link>
  );
  const CustomButton = (
    <StyledCustomButton onClick={onClickEvent} className="custom" tabIndex={tabIndex} disabled={disabled}>
      {children ? children : label}
    </StyledCustomButton>
  );

  const LinkButton =
    type === ButtonType.Custom ? CustomButtonLink : StandardLinkButton;
  const EventButton =
    type === ButtonType.Custom ? CustomButton : StandardButton;

  return href && href !== '' ? LinkButton : EventButton;
};
