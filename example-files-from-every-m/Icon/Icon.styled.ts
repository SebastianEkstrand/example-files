import styled from "styled-components";

export const IconWrapper = styled.span`
display: flex;
width: 1rem;
height: 1rem;
min-width: 1rem;

&:not(.colored){
  svg path{
    fill: currentColor;
  }
}

&.xsmall{
  width: 0.625rem;
  height: 0.625rem;
  min-width: 0.625rem;
}
&.small{
  width: 0.75rem;
  height: 0.75rem;
  min-width: 0.75rem;
}
&.large{
  width: 1.25rem;
  height: 1.25rem;
  min-width: 1.25rem;
}
&.xlarge{
  width: 1.5rem;
  height: 1.5rem;
  min-width: 1.5rem;
}
&.xxlarge{
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
}
&.xxxlarge{
  width: 4rem;
  height: 4rem;
  min-width: 4rem;
}
&.auto{
  width: 100%;
  height: 100%;
  min-width: 100%;
}
`;
