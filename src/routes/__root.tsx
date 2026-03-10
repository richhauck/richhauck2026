import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import "../styles.css";
import Header from "#/components/Header";
import Footer from "#/components/Footer";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  /**
   * Pulls page slug to use as body#id
   * @param path
   */
  const setBodyId = (path: string) => {
    const pName = path.substring(1, path.length);
    const bodyId = pName === "" ? "home" : pName;
    document.body.setAttribute("id", bodyId);
  };
  useEffect(() => setBodyId(location.pathname), [location.pathname]);
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
