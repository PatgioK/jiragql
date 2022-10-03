import React from "react";
import { NavBar } from "./NavBar";

export const Layout = ({ children }: any) => {
    return (
        <>
            <div className="d-flex flex-row h-7 bg-transparent sticky overflow-hidden top-0">
                <NavBar />
            </div>
            {children}
        </>
    )
}