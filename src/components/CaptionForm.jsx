import React, { useState } from "react";

const CaptionForm = ({ addCaption }) => {
  const [text, setText] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && start && end) {
      addCaption({ text, start: Number(start), end: Number(end) });
      setText("");
      setStart("");
      setEnd("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="caption-form">
      <textarea
        placeholder="Enter caption text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Start time (seconds)"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="End time (seconds)"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        required
      />
      <button type="submit">Add Caption</button>
    </form>
  );
};

export default CaptionForm;
