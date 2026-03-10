import React, { FC, ReactNode } from "react";

interface PhotoThumbProps {
  children?: ReactNode;
}

const PhotoThumb: FC<PhotoThumbProps> = ({ children }) => {
  return <div className="component">{children}</div>;
};

export default PhotoThumb;
