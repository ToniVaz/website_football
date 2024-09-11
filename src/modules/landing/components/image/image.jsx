import React from "react";
import styled from "styled-components";

const Article = styled.article`
  min-width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background: rgb(21, 30, 36);
  min-height: 650px;
  display: block;
`;
const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.5fr 1.5fr;
  gap: 0px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const LeftPanel = styled.div`
  color: white;
  width: 35vw;
  display: flex;
  position: relative;
  background: linear-gradient(90deg, rgb(21, 30, 36) 0%, rgba(0, 0, 0, 0) 100%);
  min-height: 650px;
  overflow-y: clip;
  justify-content: center;
  align-items: center;

  &::before {
    background: linear-gradient(
      90deg,
      rgb(21, 30, 36) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    position: absolute;
    content: "";
    width: 100%;
    bottom: 0px;
    top: 0px;
    z-index: 1;
    height: 100%;
    left: calc(100% - 1px);
  }
  @media (max-width: 768px) {
    position: absolute;
    /* background: linear-gradient(
      180deg,
      rgb(21, 30, 36) 0%,
      rgba(0, 0, 0, 0) 100%
    ); */
    width: 100%;
    height: 250px;
    bottom: 0;
    left: auto;
    right: 0;
    z-index: 1;
    justify-content: flex-start;
    padding: 1rem;

    &::before {
      background: linear-gradient(
        transparent 30%,
        transparent 0%,
        rgba(25, 25, 25, 0.5),
        rgb(25, 25, 25)
      );
      height: 100%;
      width: 100%;
      bottom: 0;
      left: auto; /* Asegúrate de que el pseudo-elemento no se desplace fuera del contenedor */
      right: 0;
      z-index: 1;
    }
  }
`;

const Picture = styled.picture`
  display: flex;
  animation: auto ease 0s 1 normal none running none;
  min-height: 650px;
  position: relative;
  align-items: flex-end;
  @media (max-width: 768px) {
    height: 400px;
    width: 100%;
  }
`;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
  width: 65vw;

  @media (max-width: 768px) {
    min-height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column-reverse;
  padding: 1rem 0px 1rem 1rem;
  align-self: center;
  position: absolute;
  width: 850px;
  left: calc(-644px + 50vw);
  top: 100px;
  bottom: auto;
  z-index: 2;

  @media (min-width: 769px) and (max-width: 1200px) {
    left: +50px;
    right: 0;
    padding: initial;
    max-width: 500px;
  }
  @media (max-width: 768px) {
    position: initial;
    padding: initial;
  }
`;

const TextH2 = styled.h2`
  font-size: 60px;
  line-height: 63px;
  font-size: 70px;
  line-height: 75px;
  padding: 1rem 0px;
  display: flex;
  text-shadow: rgba(16, 16, 16, 0.45) 0px 0px 5px;
  font-weight: 800;
  font-family: "Anton";
  order: 1;

  @media (min-width: 769px) and (max-width: 1200px) {
    left: 0;
    right: 0;
  }
  @media (max-width: 768px) {
    font-size: 50px;
    padding: inherit;
  }
`;

const FootballLandingComponent = () => {
  return (
    <Article>
      <Container>
        <LeftPanel>
          <TextContainer>
            <TextH2>¡VIVE LO MEJOR DEL FÚTBOL ECUATORIANO! </TextH2>
          </TextContainer>
        </LeftPanel>
        <Picture>
          <source
            media="(min-width: 1024px)"
            srcSet="https://www.ole.com.ar/images/2024/09/10/73y8xqt4R_1290x760__2.jpg#1725975491296"
          />
          <Img
            alt="Una motivación extra: la buena noticia que recibió Willian Pacho desde Francia"
            width="100"
            height="100"
            src="https://www.ole.com.ar/images/2024/09/10/73y8xqt4R_1290x760__2.jpg#1725975491296"
          />
        </Picture>
      </Container>
    </Article>
  );
};

export default FootballLandingComponent;
