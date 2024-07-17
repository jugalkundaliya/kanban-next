import React from "react";
import { ImageContainer } from "./style";
type PersonImage = {
  src: any;
  onClick?: () => void;
};
const PersonImage = ({ src, onClick }: PersonImage) => {
  return (
    <ImageContainer
      src={src}
      onClick={onClick}
      height={40}
      width={40}
      alt="Image Person"
    />
  );
};

export default PersonImage;
