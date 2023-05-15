"use client";
import React from "react";
import { Pagination as AntdPagination } from "antd";
import Flex from "../atoms/flex";

interface paginationProps {
  onChange: (page: number) => void;
  total: number;
  current: number;
  limit: number;
}

function Pagination({onChange, total, limit, current}: paginationProps) {
  return (
    <Flex justify="center">
      <AntdPagination
        current={current}
        total={total}
        onChange={onChange}
        defaultPageSize={limit}
      />
    </Flex>
  );
}

export default Pagination;
