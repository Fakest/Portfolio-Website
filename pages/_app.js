import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/layouts/main'
import theme from '../libs/theme'
import { Roboto } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'

const font = Roboto({ subsets: ['latin'], weight:'300' })

const Website = ({Component, pageProps, router}) => {
    return(
        <main>
            <Analytics />
            <ChakraProvider theme={theme}>
                <Layout router={router}>
                    <Component {...pageProps} key={router.route} />
                </Layout>
            </ChakraProvider>
        </main>
    )
}

export default Website