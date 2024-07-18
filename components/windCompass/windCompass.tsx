import React from "react";

interface WindCompassProps {
  direction: number; // Angle of wind direction in degrees
}

const WindCompass: React.FC<WindCompassProps> = ({ direction }) => {
  // Function to determine wind direction class
  const getDirectionClass = (): string => {
    // Define wind directions and corresponding classes
    const directions = [
      { label: "N", angle: 0 },
      { label: "NE", angle: 45 },
      { label: "E", angle: 90 },
      { label: "SE", angle: 135 },
      { label: "S", angle: 180 },
      { label: "SW", angle: 225 },
      { label: "W", angle: 270 },
      { label: "NW", angle: 315 },
    ];

    // Find the closest direction based on the given angle
    const closest = directions.reduce((prev, curr) => {
      return Math.abs(curr.angle - direction) < Math.abs(prev.angle - direction)
        ? curr
        : prev;
    });

    // Return the corresponding class
    return `wind-icon wi wi-wind towards-${closest.label.toLowerCase()}-deg`;
  };

  return (
    <div className="wind-compass">
      <i className={getDirectionClass()}></i>
    </div>
  );
};

export default WindCompass;
