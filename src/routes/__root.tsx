import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import "../styles.css";
import Header from "#/components/Header";
import Footer from "#/components/Footer";
import { useEffect } from "react";
import useMobileStore from "#/stores/useMobileStore";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { setIsMobile } = useMobileStore();
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth > 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="top-gradient">
      <grid-container size="lg">
        <Header />
        <div id="content">
          <Outlet />
        </div>
        <Footer />
      </grid-container>
      <TanStackDevtools
        config={{
          position: "bottom-right",
        }}
        plugins={[
          {
            name: "TanStack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </div>
  );
}
