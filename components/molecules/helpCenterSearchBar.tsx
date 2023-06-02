"use client";

import Image from "next/image";
import styled from "styled-components";
import searchIcon from "../../assets/image/search.svg";
import { Input } from "../atoms/input";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Spinner from "../icons/spinner";
import { useScreenResolution } from "hook/useScreenResolution";

const InputAddonWrapper = styled.div<{ margin: string }>`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  width: 65%;
  position: relative;
  & > img,
  & > svg {
    position: absolute;
    z-index: 300;
  }
  & > img {
    cursor: pointer;
    right: 2rem;
    top: 1.5rem;
  }
  & > svg {
    right: 1.4rem;
    top: 1.1rem;
    animation: spin 1s linear infinite;
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
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  function handleSearch() {
    if (handleSubmit) return handleSubmit();
    setSubmitted(true);
    value.length > 0 && router.push(`/search?term=${value}`);
    setSubmitted(false);
  }
  const { isMobile } = useScreenResolution();
  return (
    <InputAddonWrapper
      onKeyUp={(e) => e.key === "Enter" && handleSearch()}
      margin={margin}
      style={{ width: isMobile ? "100%" : width }}
    >
      <Input
        placeholder="Search"
        styles={{
          padding: "0 2rem",
          ...inputStyles,
        }}
        size={15}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div />
      {submitted ? (
        <Spinner />
      ) : (
        <Image src={searchIcon} alt="search icon" onClick={handleSearch} />
      )}
    </InputAddonWrapper>
  );
}
