// src/components/PageOverlay.jsx
import React from "react";

export default function PageOverlay() {
  setTimeout(() => {
    document.getElementById("overlay").style.height =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) + "px";
  }, 10);
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-[9999] mix-blend-screen"
      id="overlay"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
        opacity: 0.5,
        backgroundSize: "200px 200px",
        animation: "grainMove 30s ease-in-out infinite alternate",
        height: "100vh",
      }}
    ></div>
  );
}
