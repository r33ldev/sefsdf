"use client";

import Image from "next/image";
import styled from "styled-components";
import searchIcon from "../../assets/image/search.svg";
import { Input } from "../atoms/input";

const InputAddonWrapper = styled.div<{ margin: string }>`
  width: 65%;
  position: relative;
  & > img {
    position: absolute;
    right: 2rem;
    top: 1.5rem;
    cursor: pointer;
  }
  margin: ${({ margin }) => (margin ? margin : " 0 auto")};
`;

export default function HelpCenterSearchBar({
  margin = "0 auto",
}: {
  margin?: string;
}) {
  return (
    <InputAddonWrapper
      onKeyUp={(e) => e.key === "Enter" && alert("Wanna search?")}
      margin={margin}
    >
      <Input
        placeholder="Search"
        styles={{
          padding: "0 2rem",
        }}
        size={15}
      />
      <Image
        src={searchIcon}
        alt="search icon"
        onClick={() => {
          alert("Wanna search?");
        }}
      />
    </InputAddonWrapper>
  );
}
