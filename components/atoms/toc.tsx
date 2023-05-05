"use client";

import React, { useEffect, useState } from "react";
import Text from "./text";
import styled from "styled-components";

interface tocProps {
    article?: string
}

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

    background: ${(props: any) => props.active ? '#f5f5f5' : 'transparent'};

    &:hover {
        cursor: pointer;
        background: #f5f5f5;
        border-radius: 8px;
    }
`

export const TOC: React.FC<tocProps> = ({ }) => {


    const [tocList, setTocList] = useState<any>([]);
    const [active, setActive] = useState<any>(tocList[0]);
    useEffect(() => {
        const headings = document.querySelectorAll('h1, h2');
        const newList = [];

        for (const heading of headings) {
            newList.push({
                id: heading.id,
                text: (heading as HTMLElement).innerText,
                isSubsection: heading.tagName.toLowerCase() === 'h2',
            });
        }
        setTocList(newList);
        setActive(newList[0])
    }, []);
    return (
        <Wrapper>
            <Text type="h2" text="In this article" size={"2.4rem"} styles={{ padding: '1rem' }} />

            {tocList.map((item: any, id: number) => (
                <TocItem key={id} active={active?.text === item.text} onClick={() => setActive(tocList[id])}>{item.text}</TocItem>
            ))}
        </Wrapper>
    );
};
export default TOC;
