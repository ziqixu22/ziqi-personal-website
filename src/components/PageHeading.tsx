import type { ReactNode } from "react";
export function PageHeading({label,title,children}:{label:string;title:string;children?:ReactNode}){return <section className="page-heading"><p className="section-label">{label}</p><h1>{title}</h1>{children&&<div className="page-heading-copy">{children}</div>}</section>}
