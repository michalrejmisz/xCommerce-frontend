import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import { useRouter } from 'next/router';
import MainLayout from "../common/components/Layout/Layout";
import AdminLayout from "../components/admin/layout/AdminLayout";
import {MantineProvider} from "@mantine/core";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../dev";

export default function App({Component, pageProps}: AppProps) {

    const router = useRouter();

    // Determine if the current page is part of the admin panel
    const isAdminPanel = router.pathname.startsWith('/admin');
  
    // Choose the correct layout based on the route
    const Layout = isAdminPanel ? AdminLayout : MainLayout;


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
