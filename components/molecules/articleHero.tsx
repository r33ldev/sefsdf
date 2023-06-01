"use client";

import React from "react";
import articleBanner from "image/articleBanner.png";
import Image from "next/image";
import { useScreenResolution } from "hook/useScreenResolution";
function ArticleHero({ type }: { type: "videos" | "articles" }) {
  const { isMobile } = useScreenResolution();
  return (
    <div>
      {type === "videos" ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "80vh",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            src="https://www.youtube.com/embed/zxiCNQ2BD08?rel=0"
            title="How to become a host on Checkin"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <Image
          src={articleBanner.src}
          width={1920}
          height={400}
          alt=""
          style={{ ...(isMobile && {height: "100px"})}}
          
        />
      )}
    </div>
  );
}

export default ArticleHero;
