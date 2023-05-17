import React from "react";
import NextLink from "next/link";
interface linkProps {
  href: string;
  children?: React.ReactNode;
  text?: string;
  className?: string;
  scroll?: boolean;
}

export const Link: React.FC<linkProps> = (props) => {
  return (
    <NextLink {...props}>
      {props.children ? props.children : props.text}
    </NextLink>
  );
};
export default Link;
