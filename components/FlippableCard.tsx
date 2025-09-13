"use client";
import { useState } from "react";

interface FlippableCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

export default function FlippableCard({ front, back }: FlippableCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-container${flipped ? " flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
      style={{ cursor: "pointer", display: "inline-block" }}
    >
      <div className="flipper">
        <div className="front">{front}</div>
        <div className="back">{back}</div>
      </div>
    </div>
  );
}