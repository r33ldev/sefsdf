"use client";

import Image from "next/image";
import styled from "styled-components";
import searchIcon from "../../assets/image/search.svg";
import { Input } from "../atoms/input";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const InputAddonWrapper = styled.div<{ margin: string }>`
  width: 65%;
  position: relative;
  & > img {
    position: absolute;
    right: 2rem;
    top: 1.5rem;
    cursor: pointer;
    // z-index: -1;
    pointer-events: none;
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
  handleSubmit,
}: {
  margin?: string;
  width?: string;
  inputStyles?: React.CSSProperties;
  handleSubmit?: () => void;
}) {
  const searchParams = useSearchParams();

  const search = searchParams.get("term");
  const [value, setValue] = useState(search || "");
  const router = useRouter();

  function handleSearch() {
    console.log("handle search");
    if (handleSubmit) return handleSubmit();
    value.length > 0 && router.push(`/search?term=${value}`);
  }

  return (
    <InputAddonWrapper
      onKeyUp={(e) => e.key === "Enter" && handleSearch()}
      margin={margin}
      style={{ width }}
    >
      <Input
        placeholder="Search"
        styles={{
          padding: "0 2rem",
          zIndex: '-1',
          ...inputStyles,
        }}
        size={15}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div />
      <Image
        src={searchIcon}
        alt="search icon"
        onClick={() => console.log("hihihi")}
      />
    </InputAddonWrapper>
  );
}
