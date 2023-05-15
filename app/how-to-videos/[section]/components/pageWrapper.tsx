"use client";

import React from "react";
import styled from "styled-components";

interface PageWrapperProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  margin-top: 4rem;
  overflow: hidden;
  &  img {
    border-radius: 1.5rem;
    // overflow: hidden;
    transition: all 0.3s ease-in-out;
    &:hover {
      height:4000px;
      transform: scale(1.1);
    }
  }

  & a {
    border: 1px solid #e5e5e5;
    border-radius: 1.5rem;
    overflow: hidden;
    cursor: pointer;
  }

  & figure {
    position: absolute;
    top: 40%;
    left: 40%;
  }
`;

function PageWrapper({ children }: PageWrapperProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default PageWrapper;
