import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.background};

  h1 {
    color: ${(props) => props.theme.color};
  }
`;

export default Header;
