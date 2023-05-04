import React from "react";

interface listsProps {
  children: React.ReactNode;
}

export const ListLayout: React.FC<listsProps> = ({ children }) => {
  return (
    <div>
      {/* <span style={{ fontSize: "1rem" }}>list</span> */}
      <div style={{ display: "flex" }}>{children}</div>
    </div>
  );
};
export default ListLayout;
