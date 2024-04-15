import React from "react"
import Navbar from "../components/navbar"
import { Footer } from "../components/footer"

export const Layout: React.FC<{ component: JSX.Element }> = ({ component }) => {
    return (
        <div className="w-100 h-100 " data-bs-theme="dak" >
            <Navbar />
            <div className="mt-5 pt-3">
                {component}
            </div>
            <Footer />
        </div>
    )

}