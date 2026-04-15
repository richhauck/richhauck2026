import type { Photo } from "#/types/photo";
import { useState } from "react";

interface PhotoThumbProps {
  props: Photo;
}

const PhotoThumb: FC<PhotoThumbProps> = ({ props }) => {
  const initialWidth = props.width ? `${props.width}px` : "450px";
  const [thumbWidth, setThumbWidth] = useState(initialWidth);
  const permalink = props.title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
  return (
    <a
      className="thumb"
      href={props.src}
      data-src={props.src}
      data-slide-name={permalink}
      data-sub-html={`<h3>${props.title}</h3><p>${props.caption}</p>`}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${props.src})`,
        backgroundPosition: "center",
        width: `${thumbWidth}`,
        height: "350px",
        margin: "0 5px 5px 0",
        flex: "1 0 auto",
        display: "flex",
      }}
    ></a>
  );
};

export default PhotoThumb;
