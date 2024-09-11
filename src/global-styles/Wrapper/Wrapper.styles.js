import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  height: ${(props) => props.height || "auto"};
  background: ${(props) => props.background || "transparent"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};

  /* @media (max-width: 768px) {
    padding: ${(props) => props.paddingMobile || props.padding || "0"};
    margin: ${(props) => props.marginMobile || props.margin || "0"};
  } */
`;
