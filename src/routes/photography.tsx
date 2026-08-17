import { createFileRoute } from "@tanstack/react-router";
import { SITE_TITLE } from "../constants";
import usePhotosStore from "#/stores/usePhotosStore";
import { usePhotos } from "#/hooks/usePhotos";
import { useEffect, useState } from "react";
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (photos.length === 0) {
      refetch();
    }
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
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

      <grid-container size="lg" style={{ margin: "0 auto", padding: "0" }}>
        <grid-row style={{ alignItems: "stretch" }}>
          <grid-col span="12" style={{ display: "flex" }}>
            <div
              className="box content-box element-fade"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(1rem)",
              }}
            >
              <div className="content-box-inner">
                <h1>Photography</h1>
                <p>
                  I started shooting digitally with a 2-megapixel(!) Kodak
                  camera back in 2000. Since that time, I've worked commerically
                  and have also taught photography at the college-level. These
                  days, it remains primarily a hobby and a record of where I've
                  been.
                </p>
              </div>
            </div>
          </grid-col>
        </grid-row>

        <LightGallery
          key={photos.length}
          licenseKey={VITE_LIGHTGALLERY_LICENSE_KEY}
          speed={500}
          hideScrollbar={true}
          download={false}
          selector=".thumb"
        >
          {photos.map((photo: MediaItem, index: number) => (
            <MediaThumb key={photo.id} props={photo} index={index} />
          ))}
        </LightGallery>
      </grid-container>

      {/* */}
    </section>
  );
}
