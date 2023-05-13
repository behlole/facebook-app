import '../app/globals.css';
import {SessionProvider} from "next-auth/react";
import Head from "next/head";



function MyApp({Component, pageProps}) {
    return (
        <SessionProvider session={pageProps.session}>
            <Head>
                <title>Facebook Clone</title>
                <meta name="description" content="This is my Next.js application."/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <Component {...pageProps}/>
        </SessionProvider>
    )
}

export default MyApp;
