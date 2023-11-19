import { ReactNode } from 'react';
import Head from "next/head";
import Header from '@/components/header';
import Footer from '@/components/footer';

type LayoutProps = {
    children: ReactNode;
};
export default function Layout({ children }: LayoutProps) {
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
                <meta property="og:image" content="https://iietmoon.me/og-image.jpg" /> {/* Replace with your actual image URL */}
                <meta property="og:url" content="https://iietmoon.me" />

                {/* Twitter Card tags for Twitter sharing */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Othmane N. - Senior Full-Stack Developer" />
                <meta name="twitter:description" content="Experienced senior full-stack developer with expertise in web development." />
                <meta name="twitter:image" content="https://iietmoon.me/twitter-image.jpg" /> {/* Replace with your actual image URL */}

                {/* Canonical URL for preventing duplicate content */}
                <link rel="canonical" href="https://iietmoon.me" />

                {/* Additional meta tags */}
                <meta name="author" content="Othmane N." />
                <meta name="keywords" content="senior developer, full-stack, web development" />

                {/* MS Tile Color (for Windows tiles) */}
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />

                {/* Add your other SEO-related meta tags here, if necessary */}
            </Head>
            <div className="wrapper">
                <Header />
                <div className="content">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}
