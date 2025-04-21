import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from "react";
//https://dev.to/ornio/add-google-analytics-through-gtm-google-tag-manager-on-next-js-5e4f
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps}
    }

    render() {
        return (
            <Html lang="en">
                 <title>Kitman Yiu | Full Stack Developer ©</title>
                <meta name="description"
                      content={"Hello I'm enthusiastic, self-motivated, reliable, responsible and hard working full stack developer who works in Sydney"}/>
                <meta property="og:title" content="Kitman Yiu | Full Stack Developer | Home" key="title"/>
                <meta property="og:description"
                      content={"Hi I'm enthusiastic, self-motivated, reliable, responsible and hard working full stack developer who works in Sydney"}/>
                <meta name="twitter:title" content={"Kitman Yiu | Full Stack Developer | Home"}/>
                <meta name="twitter:description"
                      content={"Hello I'm enthusiastic, self-motivated, reliable, responsible and hard working full stack developer who works in Sydney"}/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"/>
            <meta property="og:type" content="website"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <meta property="og:site_name" content={"Kitman Yiu | Full Stack Developer"}/>
            <meta property="og:image" content={"https://www.kitmanyiu.com/website.png"}/>
            <meta property="og:url" content={"https://www.kitmanyiu.com"}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image" content={"https://www.kitmanyiu.com/website.png"}/>
            <link rel="icon" type="image/png" href={"./k.png"} sizes="16x16"/>
            <link rel="icon" type="image/png" href={"./k.png"} sizes="32x32"/>
            <link rel="apple-touch-icon" href={"./k.png"}/>
            <link rel="apple-touch-icon" sizes="180x180" href={"https://www.kitmanyiu.com/img/k.png"}/>
            <link rel="shortcut icon" href={""}/>
            <Head/>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </Html>
        )
    }
}

export default MyDocument
