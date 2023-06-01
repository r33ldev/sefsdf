"use client";

import React from "react";
import { CSSProperties } from "styled-components";
interface textProps {
  text: string;
  type: string;
  color?: string;
  size?: CSSProperties["fontSize"];
  weight?: CSSProperties["fontWeight"];
  underline?: string;
  styles?: CSSProperties;
  whiteSpace?: CSSProperties["whiteSpace"];
}

export const Text: React.FC<textProps> = ({
  text,
  type,
  color,
  size,
  weight,
  underline,
  whiteSpace,
  styles = {},
}) => {
  styles.color = color || "#212121";
  styles.fontSize = size;
  styles.fontWeight = weight;
  styles.textDecoration = underline;
  styles.whiteSpace = whiteSpace;
  if (type === "p") return <p style={{ ...styles }}>{text}</p>;
  if (type === "span") return <span style={{ ...styles }}> {text}</span>;
  if (type === "h1") return <h1 style={{ ...styles }}>{text}</h1>;
  if (type === "h2") return <h2 style={{ ...styles }}>{text}</h2>;
  if (type === "h3") return <h3 style={{ ...styles }}>{text}</h3>;
  return <div>{text}</div>;
};
export default Text;
