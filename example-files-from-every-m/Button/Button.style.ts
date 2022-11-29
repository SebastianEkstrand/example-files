// Styled components for Button.tsx

import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin: 0;

  svg.loading{
    height: 50%;
    width: auto;
  }
`;

export const StyledH5 = styled.h5`
  margin: 0 0 0.5rem 0;
`;

export const HelpText = styled.p`
  margin: 0.5rem 0;
  font-size: var(--font-xs);
  opacity: 0.5;
`;

export const StyledCustomButton = styled.button`
display: inline-flex;
cursor: pointer;
align-items: center;
text-align: center;
border: 0;
background-color: transparent;

&:focus{
  transition: all 0.01s ease-in;
  outline: none;
}
`;

export const StyledButton = styled.a`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 0.25rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: var(--button-radius);
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  border: 0;

  &.btn{
      span.label{
      position: relative;
      z-index: 1;
      text-shadow: 0 1px 1px rgba(0,0,0,0.3);
    }
  }
  &.x-small{
    line-height: 2rem;
    height: 2rem;
    padding: 0 0.5rem;
    font-size: var(--font-xs);

    &.has-icon{
      padding-left: 0.25rem;
    }
  }
  &.small{
    line-height: 2rem;
    height: 2rem;
    padding: 0 1rem;
    font-size: var(--font-s);

    &.has-icon{
      padding-left: 0.75rem;
    }
  }
  &.medium{
    line-height: 2.5rem;
    height: 2.5rem;
    padding: 0 1rem;
    font-size: var(--font-s);

    &.has-icon{
      padding-left: 0.75rem;
    }
  }
  &.large{
    line-height: 3rem;
    height: 3rem;
    padding: 0 2rem;
    font-size: var(--font-n);

    &.has-icon{
      padding-left: 1.75rem;
    }
  }
  &.medium-circle{
    line-height: 3rem;
    height: 3rem;
    padding: 0;
    width: 3rem;
    border-radius: 1.5rem;
    font-size: var(--font-n);

    span.icon{
      margin: 0;
    }
  }
  &.small-circle{
    line-height: 2.5rem;
    height: 2.5rem;
    padding: 0;
    width: 2.5rem;
    border-radius: 1.25rem;
    font-size: var(--font-n);

    span.icon{
      margin: 0;
    }
  }

  &.primary{
    background-color: var(--primary-button-bg-color);
    color: var(--primary-button-text-color);
    border: 0;

    span.effects{
      background-color: rgba(255,255,255, 0.3);
    }
  }
  &.secondary{
    background-color: var(--secondary-button-bg-color);
    color: var(--secondary-button-text-color);
    border: var(--secondary-button-border-width) solid var(--secondary-button-border-color);
    backdrop-filter: blur(10px);

    span.effects{
      background-color: rgba(0,0,0, 0.1);
    }
    
    span.label{
      text-shadow: none;
    }
  }
  &.link{
    background-color: transparent;
    padding: 0;

    height: auto;
    line-height: 1em;
    font-weight: 600;
    color: var(--primary-button-bg-color);

    span.effects{
      display: none;
    }
  }
  &.frosted-light{
    background-color: rgba(255,255,255,0.66);
    backdrop-filter: blur(10px);
    
    color: #000;
    border: 0;

    span.effects{
      background-color: rgba(255,255,255, 0.5);
    }

    span.label{
      position: relative;
      z-index: 1;
      text-shadow: 0 1px 1px rgba(255,255,255,0.3);
    }
  }
  &.frosted-dark{
    background-color: rgba(0,0,0,0.66);
    backdrop-filter: blur(10px);
    
    color: #fff;
    border: 0;

    span.effects{
      background-color: rgba(0,0,0, 0.5);
    }

    span.label{
      position: relative;
      z-index: 1;
      text-shadow: 0 1px 1px rgba(0,0,0,0.3);
    }
    svg path{
      fill: #fff;
    }
  }

  &.full{
    width: 100%;
    min-width: 100%;
    display: flex;
  }

  &.dark-mode{
    &.primary{
    background-color: var(--primary-button-bg-color-darkmode);
    color: var(--primary-button-text-color-darkmode);
    border: 0;
    }
    &.secondary{
      background-color: var(--secondary-button-bg-color-darkmode);
      color: var(--secondary-button-text-color-darkmode);
      border: var(--secondary-button-border-width) solid var(--secondary-button-border-color-darkmode);
    }
    &.link{
      color: var(--secondary-button-text-color-darkmode);
    }
  }

  span.effects{
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 0.25rem;
    transition: all 0.3s ease-in-out;
  }

  &:hover{
    span.effects{
      transition: all 0.01s ease-in;
      opacity: 1;
    }

    &.link{
      text-decoration: underline;
    }
  }

  &:focus{
    transition: all 0.01s ease-in;
    outline: none;
    span.effects{
      transition: all 0.01s ease-in;
      opacity: 1;
    }
  }

  span.icon{
    margin-right: 0.25rem;
    position: relative;
    z-index: 2;
  }
  
`;