import React from "react";
import { StyledWrapper } from "./Wrapper.styles";

const Wrapper = ({
  height,
  background,
  padding,
  margin,
  paddingMobile,
  marginMobile,
  children,
}) => {
  return (
    <StyledWrapper
      height={height}
      background={background}
      padding={padding}
      margin={margin}
      paddingMobile={paddingMobile}
      marginMobile={marginMobile}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
