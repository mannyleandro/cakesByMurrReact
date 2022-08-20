import React from "react"
import style from "./NavBar.css"
export default function NavBar (){
    return(
        <div className="navBar--box"><link rel="stylesheet" href={style}></link>
        <nav className="navBar--container">
            <h2 className="navBar--RaQ"><a href="google.com">Request a Quote</a></h2>
            <h1 className="navBar--Logo"><a href=".navBar--box">Cakes by Murr</a></h1>
            <svg viewBox="0 0 24 24" className="navBar--dropMenu">
                <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg> 
        </nav>
        </div>
    )
}