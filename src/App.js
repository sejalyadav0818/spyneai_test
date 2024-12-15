import React, { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import CaptionForm from "./components/CaptionForm";
import "./App.css";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);

  const addCaption = (caption) => {
    setCaptions([...captions, caption]);
  };

  return (
    <div className="App">
      <h1>Video Caption App</h1>

      {/* Video URL Input */}
      <div className="url-input-container">
        <input
          type="text"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </div>

      {/* Video Player */}
      {videoUrl && (
        <div className="video-container">
          <VideoPlayer
            videoUrl={videoUrl}
            captions={captions}
            currentTime={currentTime}
          />
        </div>
      )}

      {/* Caption Form */}
      <div className="caption-form-container">
        <CaptionForm addCaption={addCaption} />
      </div>

      {/* Display Captions */}
      <div className="captions-list">
        <h3>Captions:</h3>
        {captions.map((caption, index) => (
          <div key={index} className="caption-item">
            <p>
              {caption.start}s - {caption.end}s: {caption.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
