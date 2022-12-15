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
                <meta
                    property="og:image"
                    content={'https:og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'}
                />
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