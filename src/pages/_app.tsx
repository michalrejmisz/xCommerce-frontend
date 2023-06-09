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
                // withGlobalStyles
                // withNormalizeCSS
                theme={{
                    breakpoints: {
                        sm: '520px',
                        md: '720px',
                        lg: '900px',
                        xl: '1080px',
                        xxl: '1600px',
                    },
                }}
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
