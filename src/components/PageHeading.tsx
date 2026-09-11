import type { ReactNode } from "react";
export function PageHeading({label,title,children}:{label?:string;title:string;children?:ReactNode}){return <section className="page-heading">{label ? <p className="section-label">{label}</p> : null}<h1>{title}</h1>{children ? <div className="page-heading-copy">{children}</div> : null}</section>}
