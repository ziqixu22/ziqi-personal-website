import { localize, type Language, site } from "../content/site";
export function SiteFooter({language}:{language:Language}){return <footer><span>© {new Date().getFullYear()} {site.name}</span><span>{localize(site.resumeNote,language)}</span><a href="#home">{language==="en"?"Back to top ↑":"返回顶部 ↑"}</a></footer>}
