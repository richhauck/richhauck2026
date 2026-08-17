import { createFileRoute } from "@tanstack/react-router";
import { SITE_TITLE } from "../constants";
import { useIllustrations } from "#/hooks/useIllustrations";
import { useEffect, useState } from "react";
import type { MediaItem } from "#/types/mediaItem";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import useIllustrationsStore from "#/stores/useIllustrationsStore";
import MediaThumb from "#/components/MediaThumb";
import LoadingSpinner from "#/components/LoadingSpinner";
const { VITE_LIGHTGALLERY_LICENSE_KEY } = import.meta.env;

export const Route = createFileRoute("/illustration")({
  component: RouteComponent,
});

function RouteComponent() {
  const { illustrations, setIllustrations } = useIllustrationsStore();
  const { data, error, isLoading, refetch } = useIllustrations();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (illustrations.length === 0) {
      refetch();
    }
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
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
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error loading illustrations</div>;
  }
  return (
    <section id="illustration">
      <title>{`Illustration - ${SITE_TITLE}`}</title>

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
                <h1>Illustration</h1>
                <p>
                  Below you'll find a selection of my illustration work. I'm a
                  regular contributor to{" "}
                  <a
                    href="https://theburgnews.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Burg News
                  </a>
                  , a monthly publication focused on Central PA, for which my
                  work has won over 12 Keystone Media Awards. I am also
                  responsible for the label and packaging design of{" "}
                  <a
                    href="https://www.torchbearersauces.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TorchBearer Sauces
                  </a>
                  , a hot sauce company that's been featured on "Hot Ones".
                </p>
              </div>
            </div>
          </grid-col>
        </grid-row>
      </grid-container>

      <LightGallery
        key={illustrations.length}
        licenseKey={VITE_LIGHTGALLERY_LICENSE_KEY}
        speed={500}
        hideScrollbar={true}
        download={false}
        selector=".thumb"
      >
        {illustrations.map((illustration: MediaItem, index: number) => (
          <MediaThumb
            key={illustration.id}
            props={illustration}
            index={index}
          />
        ))}
      </LightGallery>
    </section>
  );
}
