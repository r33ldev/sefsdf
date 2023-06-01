'use client'

import React from "react";
import styled, { CSSProperties } from "styled-components";

interface flexProps {
  children: React.ReactNode;
  justify?:
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "flex-start"
    | "flex-end";
  align?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  gap?: string;
  direction?: "row" | "column";
  margin?: string;
  padding?: string;
  width?: string;
  styles?: CSSProperties;
  background?: string;
  borderRadius?: string;
  id?: string;
  overflow?: string;
  wrap?: "wrap" | "nowrap";
  border?: string;
  height?: string;
}

const FlexWrapper = styled.div`
  width: 100%;
`;

export const Flex: React.FC<flexProps> = ({
  children,
  justify,
  align,
  gap,
  direction,
  margin,
  padding,
  background,
  width,
  height,
  borderRadius,
  id,
  overflow,
  wrap,
  border,
}) => {
  console.log("flex", wrap);
  return (
    <FlexWrapper
      id={id}
      style={{
        margin: margin,
        display: "flex",
        justifyContent: justify,
        alignItems: align,
        gap: gap,
        flexDirection: direction,
        background: background,
        width: width,
        overflow: overflow || "hidden",
        borderRadius: borderRadius,
        border: border,
        padding: padding,
        flexWrap: wrap,
        height: height,
      }}
    >
      {children}
    </FlexWrapper>
  );
};
export default Flex;
