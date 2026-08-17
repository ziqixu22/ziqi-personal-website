import { useEffect, useState } from "react";
import { getStoredLanguage, languageStorageKey } from "../i18n/language";
import { pages, type Language, type PageSlug } from "../content/site";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { HomePage } from "../pages/HomePage";
import { ResearchPage } from "../pages/ResearchPage";
import { ProjectsPage } from "../pages/ProjectsPage";
const validPages=new Set<PageSlug>(pages.map(page=>page.slug));
function readPage():PageSlug{const hash=window.location.hash.slice(1) as PageSlug;return validPages.has(hash)?hash:"home"}
export function App(){const[page,setPage]=useState<PageSlug>(readPage);const[language,setLanguage]=useState<Language>(()=>getStoredLanguage(window.localStorage));useEffect(()=>{const update=()=>setPage(readPage());window.addEventListener("hashchange",update);return()=>window.removeEventListener("hashchange",update)},[]);useEffect(()=>{window.localStorage.setItem(languageStorageKey,language);document.documentElement.lang=language==="zh"?"zh-CN":"en"},[language]);return <div className="site-shell"><SiteHeader language={language} page={page} onLanguageChange={setLanguage}/><main>{page==="research"?<ResearchPage language={language}/>:page==="projects"?<ProjectsPage language={language}/>:<HomePage language={language}/>}</main><SiteFooter language={language}/></div>}
