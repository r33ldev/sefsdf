"use client";

import styled from "styled-components";

export default styled.section<{ margin?: string }>`
  width: 90vw;
  margin: ${(props) => props?.margin || "0 auto"};
`;
