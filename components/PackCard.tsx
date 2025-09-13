"use client";
import { useState } from "react";
import img from "./../public/assets/logo.webp";

interface PackCardProps {
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  features: string[];
}

export default function PackCard({
  title,
  subtitle,
  price,
  duration,
  features,
}: PackCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleActivate = async () => {};

  return (
    <div
      className={`pack-card flip-container${flipped ? " flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
      style={{ cursor: "pointer" }}
    >
      <div className="flipper">
        {/* Front Side */}
        <div className="front">
          <div className="pack-header">
            <h3 className="pack-title">{title}</h3>
            <p className="pack-subtitle">{subtitle}</p>
            <div className="pack-price">{price}</div>
            <div className="pack-duration">{duration}</div>
            <img src={"./../public/assets/logo.webp"}></img>
          </div>
        </div>
        {/* Back Side */}
        <div className="back">
          <div className="pack-body">
            <ul className="pack-features">
              {features.map((feature, index) => (
                <li key={index} className="pack-feature">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="pack-footer">
            <button
              className="pack-button"
              onClick={(e) => {
                e.stopPropagation();
                handleActivate();
              }}
              disabled={false}
            >
              Activate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
