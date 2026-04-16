import { createFileRoute } from "@tanstack/react-router";
import { SITE_TITLE } from "../constants";
import { useIllustrations } from "#/hooks/useIllustrations";
import { useEffect } from "react";
import type { MediaItem } from "#/types/mediaItem";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import useIllustrationsStore from "#/stores/useIllustrationsStore";
import MediaThumb from "#/components/MediaThumb";
const { VITE_LIGHTGALLERY_LICENSE_KEY } = import.meta.env;

export const Route = createFileRoute("/illustration")({
  component: RouteComponent,
});

function RouteComponent() {
  const { illustrations, setIllustrations } = useIllustrationsStore();
  const { data, error, isLoading, refetch } = useIllustrations();

  useEffect(() => {
    if (illustrations.length === 0) {
      refetch();
    }
  }, []);

  useEffect(() => {
    if (
      data &&
      typeof data === "object" &&
      "illustrations" in data &&
      Array.isArray(data.illustrations)
    ) {
      const illustrationsData: MediaItem[] = data.illustrations as MediaItem[];
      setIllustrations(illustrationsData);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading illustrations</div>;
  }
  return (
    <section id="illustrations">
      <title>{`Illustration - ${SITE_TITLE}`}</title>
      <LightGallery
        licenseKey={VITE_LIGHTGALLERY_LICENSE_KEY}
        speed={500}
        download={false}
        selector=".thumb"
      >
        {illustrations.map((illustration: MediaItem) => (
          <MediaThumb key={illustration.id} props={illustration} />
        ))}
      </LightGallery>
    </section>
  );
}
