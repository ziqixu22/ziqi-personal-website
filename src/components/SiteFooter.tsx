import { type Language, site } from "../content/site";
export function SiteFooter({ language, showQuote = false }: { language: Language; showQuote?: boolean }) {
  const quote = language === "en"
    ? "I’m not afraid of difficulty or challenge. What I fear more is losing my spark. Stay hungry, stay foolish"
    : "我不怕困难和挑战，我比较害怕自己是一个暗淡的人。持续学习，长期主义。";
  return <footer className={showQuote ? "site-footer site-footer-home" : "site-footer"}>{showQuote ? <q>{quote}</q> : null}<span>© {new Date().getFullYear()} {site.name}</span></footer>;
}
