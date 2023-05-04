import React from "react";
import { headers } from "next/headers";

const BreadCrumb = () => {
  const headersList = headers();
  const header_url = headersList.get("") || "";
  //   console.log("headerList", header_url, header_url);
  //   headers().forEach((item) => console.log(item));

  return (
    <div style={{ display: "flex" }}>
      {header_url.split("/").map((item, index) => (
        <div key={index} style={{ marginRight: "10px" }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
