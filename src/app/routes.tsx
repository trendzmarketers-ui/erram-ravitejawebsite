import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";

/**
 * Lazy-load non-critical route pages so the initial JS bundle
 * only contains the HomePage code. Other pages are fetched on demand.
 */
const PrivacyPolicy = lazy(() =>
  import("./pages/PrivacyPolicy").then((m) => ({ default: m.PrivacyPolicy }))
);
const TermsConditions = lazy(() =>
  import("./pages/TermsConditions").then((m) => ({ default: m.TermsConditions }))
);
const ExperiencePage = lazy(() =>
  import("./components/ExperiencePage").then((m) => ({ default: m.ExperiencePage }))
);
const BlogPage = lazy(() =>
  import("./pages/BlogPage").then((m) => ({ default: m.BlogPage }))
);

/** Minimal loading fallback — matches site bg to prevent flash */
function LazyFallback() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      <div
        className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: "#C6A769", borderTopColor: "transparent" }}
      />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/experience",
    element: (
      <Suspense fallback={<LazyFallback />}>
        <ExperiencePage />
      </Suspense>
    ),
  },
  {
    path: "/blog",
    element: (
      <Suspense fallback={<LazyFallback />}>
        <BlogPage />
      </Suspense>
    ),
  },
  {
    path: "/privacy",
    element: (
      <Suspense fallback={<LazyFallback />}>
        <PrivacyPolicy />
      </Suspense>
    ),
  },
  {
    path: "/terms",
    element: (
      <Suspense fallback={<LazyFallback />}>
        <TermsConditions />
      </Suspense>
    ),
  },
]);