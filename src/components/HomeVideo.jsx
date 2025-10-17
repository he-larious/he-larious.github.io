import React from "react";
import "./HomeVideo.css";

function HomeVideo() {
  return (
    <div className="video-container">
      <video
        src="/Intro.mp4"
        autoPlay
        loop
        controls
        playsInline
        className="video-bg"
      />
    </div>
  );
}

export default HomeVideo;
