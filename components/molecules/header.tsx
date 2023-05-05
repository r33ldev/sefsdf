"use client";
import styled from "styled-components";
import Flex from "../atoms/flex";
import CheckinLogo from "../icons/checkinLogo";
import Text from "../atoms/text";

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
  }
`;

const Divider = styled.div`
  height: 65%;
  width: 0.1rem;
  background: #0e689d;
`;

export default function CheckinHelpCenterHeader() {
  return (
    <Flex
      align="center"
      justify="space-between"
      width="85vw"
      margin="2rem auto"
    >
      <a href="/">
        <Flex align="flex-end">
          <CheckinLogo />
          <Text size="2.2rem" color="#0E689D" type="p" text="Usecheckin" />
        </Flex>
      </a>
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
