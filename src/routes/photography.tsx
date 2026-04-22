import { createFileRoute } from "@tanstack/react-router";
import { SITE_TITLE } from "../constants";
import usePhotosStore from "#/stores/usePhotosStore";
import { usePhotos } from "#/hooks/usePhotos";
import { useEffect } from "react";
import type { MediaItem } from "#/types/mediaItem";
import MediaThumb from "../components/MediaThumb";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import LoadingSpinner from "#/components/LoadingSpinner";
const { VITE_LIGHTGALLERY_LICENSE_KEY } = import.meta.env;

export const Route = createFileRoute("/photography")({
  component: RouteComponent,
});

function RouteComponent() {
  const { photos, setPhotos } = usePhotosStore();
  const { data, error, isLoading, refetch } = usePhotos();

  useEffect(() => {
    if (photos.length === 0) {
      refetch();
    }
  }, []);

  useEffect(() => {
    if (
      data &&
      typeof data === "object" &&
      "photos" in data &&
      Array.isArray(data.photos)
    ) {
      const photosData: MediaItem[] = data.photos as MediaItem[];
      setPhotos(photosData);
    }
  }, [data]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error loading photos</div>;
  }
  return (
    <section id="photos">
      <title>{`Photography - ${SITE_TITLE}`}</title>
      <LightGallery
        licenseKey={VITE_LIGHTGALLERY_LICENSE_KEY}
        speed={500}
        download={false}
        selector=".thumb"
      >
        {photos.map((photo: MediaItem, index: number) => (
          <MediaThumb key={photo.id} props={photo} index={index} />
        ))}
      </LightGallery>
    </section>
  );
}
