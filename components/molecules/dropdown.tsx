import type { MenuProps } from "antd";
import { Dropdown as AntdDropdown, Space } from "antd";
import React from "react";
import Arrowdown from "../icons/arrowDown";
import Flex from "../atoms/flex";

const style: React.CSSProperties = {
  width: "100%",
  borderRadius: ".8rem",
  overflow: "hidden",
  marginTop: ".5rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
};

interface dropdownInterface {
  onClick: MenuProps["onClick"];
  items: MenuProps["items"];
  value: string;
  children?: React.ReactNode;
}

const Dropdown = ({ onClick, items, value, children }: dropdownInterface) => (
  <AntdDropdown menu={{ items, onClick, style }} trigger={["click"]}>
    <div onClick={(e) => e.preventDefault()}>
      <Flex justify="space-between" padding="0 5rem" align="center">
        {value}
        <Arrowdown />
      </Flex>
    </div>
  </AntdDropdown>
);

export default Dropdown;
