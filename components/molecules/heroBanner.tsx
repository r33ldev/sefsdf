"use client";

import styled from "styled-components";
import Text from "../atoms/text";
import heroBanner from "../../assets/image/home-banner.png";
import { useScreenResolution } from "hook/useScreenResolution";

const Section = styled.section`
  width: 100%;
  height: 33rem;
  background: #6a7a83;
  background-image: url(${heroBanner.src});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
`;

export default function HelpCenterHeroBanner() {
  const { isMobile } = useScreenResolution();
  return (
    <Section>
      <Text
        text="Help center"
        type="p"
        size={isMobile ? "5.5rem" : "6.5rem"}
        weight="800"
        color="white"
      />
      <Text
        text="Hi there, what can we do for you?"
        type="p"
        size="1.5rem"
        color="white"
        weight={100}
      />
    </Section>
  );
}
