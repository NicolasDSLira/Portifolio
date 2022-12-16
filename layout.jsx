import Head from "next/head"
import Footer from "./footer"
import Navbar from "./navbar"

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="My portifolio"
                />
                <link rel="shortcut icon" href="/NL.png" type="image/x-icon" />
                <meta
                    name="og:title"
                    content="Nicolas Lira"
                />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            </Head>
            <Navbar />
           {children}

            <Footer />

        </>
    )
}