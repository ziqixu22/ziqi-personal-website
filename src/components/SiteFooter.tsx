import { type Language, site } from "../content/site";
export function SiteFooter({ language, showQuote = false }: { language: Language; showQuote?: boolean }) {
  const quote = language === "en"
    ? "I’m not afraid of difficulty or challenge. What I fear more is losing my spark, so I want to keep learning and sharing."
    : "我不怕困难和挑战，我比较害怕自己是一个暗淡的人。所以我希望自己持续学习，保持分享。";
  return <footer className={showQuote ? "site-footer site-footer-home" : "site-footer"}>{showQuote ? <q>{quote}</q> : null}<span>© {new Date().getFullYear()} {site.name}</span></footer>;
}
