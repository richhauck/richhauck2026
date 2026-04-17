import type { DetailedHTMLProps, HTMLAttributes } from "react";

interface GridContainerAttributes extends HTMLAttributes<HTMLElement> {
  size?: string;
}
interface GridColAttributes extends HTMLAttributes<HTMLElement> {
  span?: string;
}
declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "grid-container": DetailedHTMLProps<GridContainerAttributes, HTMLElement>;
      "grid-row": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      "grid-col": DetailedHTMLProps<GridColAttributes, HTMLElement>;
      "flex-container": DetailedHTMLProps<GridContainerAttributes, HTMLElement>;
      "flex-row": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      "flex-col": DetailedHTMLProps<GridColAttributes, HTMLElement>;
  }
}

/*
import "react";

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "grid-container": {};
      "grid-col": { id: string; span: string };
      "grid-row": {};
    }
  }
}
*/
