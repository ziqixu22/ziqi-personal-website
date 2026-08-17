import { type Language, site } from "../content/site";
export function SiteFooter({language}:{language:Language}){return <footer><span>© {new Date().getFullYear()} {site.name}</span></footer>}
