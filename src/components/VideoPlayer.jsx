import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl, captions, currentTime }) => {
  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    // Update time when currentTime changes
    setTime(currentTime);
  }, [currentTime]);

  return (
    <div style={{ position: "relative", width: "fit-content" }}>
      {/* Video Player */}
      <ReactPlayer
        url={videoUrl}
        controls
        playing
        onProgress={({ playedSeconds }) => setTime(playedSeconds)} // Update time here
        width="640px"
        height="360px"
      />

      {/* Captions Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "18px",
          background: "rgba(0, 0, 0, 0.5)",
        }}
      >
        {captions.map((caption, index) =>
          time >= caption.start && time <= caption.end ? (
            <p key={index}>{caption.text}</p>
          ) : null
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
