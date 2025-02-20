// Path.tsx
import React from "react";

interface PathProps {
  d: string;
  fill: string;
}

const Path: React.FC<PathProps> = ({ d, fill }) => {
  return <path d={d} fill={fill} />;
};

export default Path;
