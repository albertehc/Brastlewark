import React from "react";
import * as S from "./styles";

export default () => (
  <S.SpinnerContainer>
    <S.StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </S.StyledSpinner>
  </S.SpinnerContainer>
);
