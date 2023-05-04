import React from "react";

interface updatesProps {
  children: React.ReactNode;
}

export const UpdateLayout: React.FC<updatesProps> = ({ children }) => {
  return (
    <div>
      <span style={{ fontSize: "1rem" }}>update</span>
      <div>{children}</div>
    </div>
  );
};
export default UpdateLayout;
