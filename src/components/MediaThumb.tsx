import useMobileStore from "#/stores/useMobileStore";
import type { MediaItem } from "#/types/mediaItem";
import { useEffect, useState, type FC } from "react";

interface MediaThumbProps {
  props: MediaItem;
  index?: number;
}

const MediaThumb: FC<MediaThumbProps> = ({ props, index = 0 }) => {
  const initialWidth = props.width ? `${props.width}px` : "450px";
  const [thumbWidth, setThumbWidth] = useState(initialWidth);
  const { isMobile } = useMobileStore();
  const permalink = props.title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

  useEffect(() => {
    if (isMobile) {
      setThumbWidth("100%");
    } else {
      setThumbWidth(initialWidth);
    }
  }, [initialWidth]);

  return (
    <a
      className="thumb"
      href={props.src}
      data-src={props.src}
      data-slide-name={permalink}
      data-sub-html={`<h3>${props.title}</h3><p>${props.caption}</p>`}
      style={{
        animation: `fadeInUp 0.5s ease-out both`,
        animationDelay: `${index * 0.2}s`,
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

export default MediaThumb;
