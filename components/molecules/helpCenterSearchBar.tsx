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
  & > div {
    position: absolute;
    right: 6rem;
    top: 18%;
    height: 60%;
    width: 1px;
    background-color: #70707026;
  }

  margin: ${({ margin }) => (margin ? margin : " 0 auto")};
`;

export default function HelpCenterSearchBar({
  margin = "0 auto",
  width = "65%",
  inputStyles,
}: {
  margin?: string;
  width?: string;
  inputStyles?: React.CSSProperties;
}) {
  return (
    <InputAddonWrapper
      onKeyUp={(e) => e.key === "Enter" && confirm("Wanna search?")}
      margin={margin}
      style={{ width }}
    >
      <Input
        placeholder="Search"
        styles={{
          padding: "0 2rem",
          ...inputStyles,
        }}
        size={15}
      />
      <div />
      <Image
        src={searchIcon}
        alt="search icon"
        onClick={() => {
          confirm("Wanna search?");
        }}
      />
    </InputAddonWrapper>
  );
}
