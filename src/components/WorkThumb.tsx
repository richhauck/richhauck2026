import type { Project } from "#/types/project";
import { type FC } from "react";

interface MediaThumbProps {
  props: Project;
}

const WorkThumb: FC<MediaThumbProps> = ({ props }) => {
  return (
    <a href={`/portfolio/${props.id}`}>
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
