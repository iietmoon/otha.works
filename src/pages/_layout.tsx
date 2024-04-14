import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                {/* Basic SEO */}
                <title>Othmane N. - Senior Full-Stack Developer</title>
                <meta name="description" content="Experienced senior full-stack developer with expertise in web/mobile development." />

                {/* Viewport for responsiveness */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Favicon */}
                <link rel="icon" type="image/png" href="/favicon.png" />

                {/* Open Graph (OG) tags for social media sharing */}
                <meta property="og:title" content="Othmane N. - Senior Full-Stack Developer" />
                <meta property="og:description" content="Experienced senior full-stack developer with expertise in web development." />
                <meta property="og:image" content="https://otha.works/og-image.jpg" /> {/* Replace with your actual image URL */}
                <meta property="og:url" content="https://otha.works" />

                {/* Twitter Card tags for Twitter sharing */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Othmane N. - Senior Full-Stack Developer" />
                <meta name="twitter:description" content="Experienced senior full-stack developer with expertise in web development." />
                <meta name="twitter:image" content="https://otha.works/og-image.jpg" /> {/* Replace with your actual image URL */}

                {/* Canonical URL for preventing duplicate content */}
                <link rel="canonical" href="https://otha.works" />

                {/* Additional meta tags */}
                <meta name="author" content="Othmane N." />
                <meta name="keywords" content="senior developer, full-stack, web development" />

                {/* MS Tile Color (for Windows tiles) */}
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />

                {/* CDN or external libraries, if necessary */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </Head>
            <main className="container">
                <div className="row justify-content-center">
                    <div className="col-9 main-container">
                        <Header></Header>
                        {children}
                        <Footer></Footer>
                    </div>
                </div>
            </main>
        </>

    );
}

export default Layout;
