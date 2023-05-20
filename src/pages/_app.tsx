import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../common/components/Layout/Layout"
import {MantineProvider} from "@mantine/core";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../dev";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
            >
                <Layout>
                    <DevSupport ComponentPreviews={ComponentPreviews}
                                useInitialHook={useInitial}
                    >
                        <Component {...pageProps} />
                    </DevSupport>
                </Layout>
            </MantineProvider>
        </>
    )
}
