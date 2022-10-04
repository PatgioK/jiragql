import React from "react";
import { NavBar } from "./NavBar";

export const Layout = ({ children }: any) => {
    return (
        <>
            <div className="d-flex flex-row h-7 bg-transparent">
                <NavBar />
            </div>
            {children}
        </>
    )
}