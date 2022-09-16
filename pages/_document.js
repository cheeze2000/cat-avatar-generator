import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="A free and open-source API to generate cat avatars" />
                <meta name="theme-color" content="#A5C2E1" />
                <meta property="og:description" content="A free and open-source API to generate cat avatars" />
                <meta property="og:image" content="/logo.png" />
                <meta property="og:title" content="Cat Avatar Generator" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://cat-avatars.vercel.app" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Nunito:wght@400;700&family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
