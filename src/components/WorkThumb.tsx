import type { Project } from "#/types/project";
import { type FC } from "react";

interface MediaThumbProps {
  props: Project;
  index?: number;
}

const WorkThumb: FC<MediaThumbProps> = ({ props, index = 0 }) => {
  return (
    <a
      href={`/portfolio/${props.id}`}
      style={{
        animation: `fadeInUp 0.5s ease-out both`,
        animationDelay: `${index * 0.2}s`,
        color: `var(--color-text)`,
        textDecoration: "none",
      }}
    >
      <figure>
        <img src={props.imageUrl} alt={props.name} />
        <figcaption>
          <h3>{props.name}</h3>
          <span>{props.categories.join(", ")}</span>
        </figcaption>
      </figure>
    </a>
  );
};

export default WorkThumb;
