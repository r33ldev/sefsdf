import React from "react";

interface videoLayoutProps {
  children: React.ReactNode;
}

export const VideoLayout: React.FC<videoLayoutProps> = ({ children }) => {
  return (
    <div>
      <span style={{ fontSize: "1rem" }}>video</span>
      <div>{children}</div>
    </div>
  );
};
export default VideoLayout;
