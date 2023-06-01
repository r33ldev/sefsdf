"use client";

import React from "react";
import styled from "styled-components";
import SectionLayout from "./sectionLayout";
import Flex from "../atoms/flex";
import Link from "../atoms/link";
import Text from "../atoms/text";
import { useScreenResolution } from "hook/useScreenResolution";
const FooterWrapper = styled.footer`
  width: 100%;
  height: 10rem;
  background: #f9f9fc;
  margin-top: 7rem;
  display: flex;
  align-items: center;
`;
export default function HelpCenterFooter() {
  const { isMobile } = useScreenResolution();
  return (
    <FooterWrapper>
      <SectionLayout>
        <Flex gap={isMobile ? "1rem" : "4rem"} align="center">
          <Text
            text={`© ${new Date().getFullYear()} Checkin`}
            type="p"
            size={15}
            styles={{ marginRight: "2rem" }}
            whiteSpace="nowrap"
          />
          <Link
            href="https://usecheckin.com/about"
            text="About"
            className="text-2xl"
          />
          <Link
            href="https://usecheckin.com"
            text="Press"
            className="text-2xl"
          />
          <Link
            href="https://careers.usecheckin.com"
            text="Jobs"
            className="text-2xl"
          />
          <Link href="/" text="Support" className="text-2xl" />
          <Link
            href="https://usecheckin.com/terms"
            text="Terms"
            className="text-2xl"
          />
          <Link
            href="https://usecheckin.com/privacy"
            text="Privacy"
            className="text-2xl"
          />
        </Flex>
      </SectionLayout>
    </FooterWrapper>
  );
}
