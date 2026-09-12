import { lazy, Suspense, useEffect, useState } from "react";
import { getStoredLanguage, languageStorageKey } from "../i18n/language";
import { type Language } from "../content/site";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { HomePage } from "../pages/HomePage";
import { ResearchPage } from "../pages/ResearchPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { parseRoute } from "./routes";

const ProjectDetailPage = lazy(() =>
  import("../pages/ProjectDetailPage").then((module) => ({
    default: module.ProjectDetailPage,
  })),
);

function readRoute() {
  return parseRoute(window.location.hash);
}

export function App() {
  const [route, setRoute] = useState(readRoute);
  const [language, setLanguage] = useState<Language>(() => getStoredLanguage(window.localStorage));
  const page = route.kind === "project" ? "projects" : route.page;

  useEffect(() => {
    const update = () => setRoute(readRoute());
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  useEffect(() => {
    if (route.kind === "project") window.scrollTo({ top: 0 });
  }, [route]);

  return (
    <>
      <SiteHeader language={language} page={page} onLanguageChange={setLanguage} />
      <div className="site-shell">
        <main>
          {route.kind === "project" ? (
            <Suspense fallback={<p className="page-loading">Loading project…</p>}>
              <ProjectDetailPage language={language} slug={route.slug} />
            </Suspense>
          ) : route.page === "research" ? (
            <ResearchPage language={language} />
          ) : route.page === "projects" ? (
            <ProjectsPage language={language} category={route.category} />
          ) : (
            <HomePage language={language} />
          )}
        </main>
        <SiteFooter language={language} showQuote={route.kind === "page" && route.page === "home"} />
      </div>
    </>
  );
}
