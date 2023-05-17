"use client";

import React, { useEffect, useState } from "react";
import Text from "./text";
import styled from "styled-components";
import Link from "./link";



const Wrapper = styled.div`
  width: 30%;
  border-radius: 1rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 24px #0000000a;
  height: fit-content;
  padding: 1rem 2rem;
`;

const TocItem = styled.div<{ active: boolean }>`
  font-size: 1.6rem;
  padding: 1.5rem;

  background: ${(props: any) => (props.active ? "#f5f5f5" : "transparent")};

  &:hover {
    cursor: pointer;
    background: #f5f5f5;
    border-radius: 8px;
  }
`;

interface tocProps {
  active: any;
  setActive: any;
  tocList: any;
}

export const TOC: React.FC<tocProps> = ({ active, setActive, tocList }) => {
  return (
    <Wrapper>
      <Text
        type="p"
        text="In this article"
        size={"2.4rem"}
        styles={{ padding: "1rem" }}
      />

      {tocList.map((item: any, id: number) => (
        <a href={`#${item.id}`} key={id}>
          <TocItem
            active={active?.text === item.text}
            onClick={() => setActive(tocList[id])}
          >
            {item.text}
          </TocItem>
        </a>
      ))}
    </Wrapper>
  );
};
export default TOC;
