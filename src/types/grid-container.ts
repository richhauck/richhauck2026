import type { DetailedHTMLProps, HTMLAttributes } from "react";

interface ContainerAttributes extends HTMLAttributes<HTMLElement> {
  size?: string;
}
interface ColAttributes extends HTMLAttributes<HTMLElement> {
  span?: string;
}
declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "grid-container": DetailedHTMLProps<ContainerAttributes, HTMLElement>;
      "grid-row": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      "grid-col": DetailedHTMLProps<ColAttributes, HTMLElement>;
      "flex-container": DetailedHTMLProps<ContainerAttributes, HTMLElement>;
      "flex-row": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      "flex-col": DetailedHTMLProps<ColAttributes, HTMLElement>;
    }
  }
}
