import Link from "next/link"
import Navbar from "./navbar"


export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}