"use client";
import styled from "styled-components";

interface gridProps {
  children: React.ReactNode;
  columns: string;
}

const GridWrapper = styled.div<{ columns: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  grid-gap: 5rem;
  width: 100%;
`;

export const Grid: React.FC<gridProps> = ({ children, columns }) => {
  return <GridWrapper columns={columns}>{children}</GridWrapper>;
};
