"use client";
import React from "react";
import { Pagination as AntdPagination } from "antd";
import Flex from "../atoms/flex";

interface paginationProps {
  onChange: (page: number) => void;
  total: number;
  current: number;
}

function Pagination({onChange, total, current}: paginationProps) {
  return (
    <Flex justify="center">
      <AntdPagination current={current} total={total} onChange={onChange} />
    </Flex>
  );
}

export default Pagination;
