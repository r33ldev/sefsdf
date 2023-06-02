"use client";

import React, { useState } from "react";
import styled from "styled-components";
import HelpCenterSearchBar from "./helpCenterSearchBar";
import Dropdown from "./dropdown";

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #707070;
  border-radius: 2.8rem;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  height: 5.4rem;
  & > div {
    width: 33% !important;
    border-left: 1px solid #707070;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

function VideoFilter() {
  const items1 = [
    { label: "General Support", key: 1 },
    {
      label: "Payment",
      key: 2,
    },
    {
      label: "Ordering",
      key: 3,
    },
    {
      label: "Shipping",
      key: 4,
    },
    {
      label: "Returns",
      key: 5,
    },
    {
      label: "Product",
      key: 6,
    },
    {
      label: "Warranty",
      key: 7,
    },
    {
      label: "Other",
      key: 8,
    },
  ];
  const items2 = [
    { label: "Apartment", key: 1 },
    {
      label: "House",
      key: 2,
    },
    {
      label: "Condo",
      key: 3,
    },
    {
      label: "Townhouse",
      key: 4,
    },
    {
      label: "Mobile Home",
      key: 5,
    },
    {
      label: "Other",
      key: 6,
    },
  ];
  const [active1, setActive1] = useState(items1[0].label);
  const [active2, setActive2] = useState(items2[0].label);
  return (
    <Wrapper>
      <Dropdown
        value={active1}
        items={items1}
        onClick={(e) => setActive1(items1[Number(e.key) - 1].label)}
      />
      <Dropdown
        value={active2}
        items={items2}
        onClick={({ key }) => setActive2(items2[Number(key) - 1].label)}
      />
      <HelpCenterSearchBar
        inputStyles={{ border: "none" }}
        width="30%"
        handleSubmit={() => confirm(`wanna search??  `)}
      />
    </Wrapper>
  );
}

export default VideoFilter;