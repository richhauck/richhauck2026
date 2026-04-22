import { Outlet, createRootRoute, useRouter } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import "../styles.css";
import Header from "#/components/Header";
import Footer from "#/components/Footer";
import { useCallback, useEffect, useRef } from "react";
import useMobileStore from "#/stores/useMobileStore";
import gsap from "gsap";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { setIsMobile } = useMobileStore();
  const contentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;

      const anchor = (e.target as HTMLElement).closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) return;

      e.preventDefault();

      const section = contentRef.current?.querySelector("section");
      if (!section) {
        router.history.push(href);
        return;
      }

      gsap.to(section, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set(section, { opacity: 1 });
          router.history.push(href);
        },
      });
    },
    [router]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [handleClick]);

  return (
    <div id="top-gradient">
      <grid-container size="lg">
        <Header />
        <div id="content" ref={contentRef}>
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
