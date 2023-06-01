"use client";
import styled from "styled-components";
import Flex from "../atoms/flex";
import CheckinLogo from "../icons/checkinLogo";
import { useScreenResolution } from "hook/useScreenResolution";

const GuestOrHostButton = styled.div`
  width: 32rem;
  border: 1px solid #0e689d;
  border-radius: 2.8rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  & > a {
    font-size: 1.4rem;
    color: #0e689d;
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 4rem;
  }
`;

const Divider = styled.div`
  height: 65%;
  width: 0.1rem;
  background: #0e689d;
`;

export default function CheckinHelpCenterHeader() {
  const { isMobile } = useScreenResolution();
  return (
    <Flex
      align="center"
      justify="space-between"
      width="85vw"
      margin="2rem auto"
      gap="5rem"
    >
      {/* {!isMobile && ( */}
      <a href="/">
        <Flex align="flex-end" gap="1rem">
          <CheckinLogo size={isMobile ? 35 : 50} />
        </Flex>
      </a>
      {/* )} */}
      <GuestOrHostButton>
        <a href="https://usecheckin.com" target="_blank">
          Book reservation
        </a>
        <Divider />
        <a href="https://host.usecheckin.com" target="_blank">
          Become a host
        </a>
      </GuestOrHostButton>
    </Flex>
  );
}
