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
          <h3 className="block">{props.name}</h3>
          <span>{props.categories.toString()}</span>
        </figcaption>
      </figure>
    </a>
  );
};

export default WorkThumb;
