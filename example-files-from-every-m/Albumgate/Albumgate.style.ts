// Styled components for Albumgate.tsx

import styled from "styled-components";
import { MediaQuerys } from "../../../common/MediaBreakpoints";
import { LanguageChooser } from "../../generics";


export const GateWrapper = styled.div`
position: fixed;
background-color: black;
color: white;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 200;
display: flex;
flex-direction: column;
justify-content: space-between;  
`;

export const BottomBar = styled.div`
position: absolute;
z-index: 200;
left: 0;
bottom: 0;
width: 100%;
min-height: 5rem;
padding-top: 5rem;
padding-bottom: 1rem;
//background-color: rgba(255,255,255,0.5);
background: var(--gradient-light-album-gate-bottom);
color: #000;
//backdrop-filter: blur(10px);
display: grid;
justify-items: flex-end;
grid-template-columns: [full-start] 1fr [page-start] 1rem [main-start] minmax(0, var(--page-grid)) [main-end] 1rem [page-end] 1fr [full-end];


  padding-top: 1rem;
  backdrop-filter: blur(10px);
  background-color: rgba(255,255,255,1);

  ${MediaQuerys.tablet} {
    grid-template-columns: [full-start] 1fr [page-start] 2rem [main-start] minmax(0, var(--page-grid)) [main-end] 2rem [page-end] 1fr [full-end];
  }

`;

export const Inner = styled.div`
grid-column: main;
display: flex;
width: 100%;
flex-direction: column;
justify-content: space-between;
align-items: center;

${MediaQuerys.tablet} {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
`;

export const LoginModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;
  width: 100%;
  height: 100%;

  &::before{
    display: block;
    content: ' ';
    position: absolute;
    z-index: 0;
    background-color: var(--mask-bg-color);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`;

export const LoginModalInner = styled.div`
  display: flex;
  color: var(--color-dark-text);
  background-color: white;
  padding: 0 1.5rem 1.5rem;
  min-width: 22rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: var(--album-card-shadow-hover);
  display: flex;
  flex-direction: column;
`;

export const NameModalInner = styled.div`
  display: grid;
  grid-template-columns:  1fr;
  gap: 1rem;
  padding-top: 1rem;
  color: var(--color-dark-text);

  h4{
    font-size: var(--font-m);
    margin: 0 0 0.5rem;
  }
`;

export const Disclaimer = styled.div`
  background-color: rgba(var(--color-every-m-magenta-raw), 0.2);
  color: black;
  padding: 1rem 1.5rem;
  margin: -1rem -1.5rem 0;
  font-weight: normal;
  font-size: var(--font-s);
`;

export const StyledImage = styled.img`
  object-fit: cover;
  width: 100% !important;
  height: calc(100% - 7rem) !important;
  position: absolute;
  top:0;
  left:0;

  ${MediaQuerys.tablet} { 
    height: calc(100% - 4.5rem) !important;
  }
`;

export const ButtonsWrapper = styled.div`
display: flex;

a{
  margin-left: 0.5rem;
}

`;

export const InfoAndLangChooser = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 4rem;
  align-items: flex-start;
  gap: 1rem;

  ${MediaQuerys.tablet} {
    width: auto;
    flex: 1;
    padding-right: 1.5rem;
    align-items: center;
  }

  a{
    margin-top: -0.25rem;
  }
`;

export const AlbumInfo = styled.div`
display: block;
width: 100%;
padding: 0 0 1rem;
z-index: 10;
text-align: left;
position: relative;
left: auto;
top: auto;
color: var(--color-default-dark-text);
text-shadow: 0 1px 2px rgba(255,255,255,0.66);

${MediaQuerys.tablet} {
  width: auto;
  padding: 0;
}


h4{
  margin: 0;
  font-size: var(--font-m);
  line-height: var(--font-m);
  margin-bottom: 0.35rem;
}
h5{
  margin: 0;
  font-size: var(--font-n);
  line-height: var(--font-n);
  font-weight: 400;
  opacity: 0.75;
}

${MediaQuerys.tablet} {
  text-align: left;
}
`;

export const AppIconWrapper = styled.div`
position: absolute;
right: 1rem;
top: 1rem;
z-index: 10;
`;

export const ButtonWrapper = styled.div`
display: grid;
grid-gap: 0.5rem;
width: 100%;
grid-template-columns: 1fr;

${MediaQuerys.tablet} {
  grid-gap: 0.75rem;
  width: auto;
  grid-template-columns: 1fr;
}
`;


export const OverlayGradientTop = styled.div`
display: block;
position: absolute;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 40vh;
background: var(--gradient-light-album-gate-overlay-top);
mix-blend-mode: overlay;
pointer-events: none;
`;

export const OverlayGradientBottom = styled.div`
display: block;
position: absolute;
z-index: 1;
left: 0;
bottom: 0;
width: 100%;
height: 40vh;
background: var(--gradient-light-album-gate-overlay-bottom);
mix-blend-mode: overlay;
pointer-events: none;
`;
