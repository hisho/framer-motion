/**
 * @see https://medium.com/@keeganfamouss/accessibility-on-demand-with-chakra-ui-and-focus-visible-19413b1bc6f9
 */
import 'focus-visible'

import {Box, ChakraProvider} from "@chakra-ui/react";
import type { AppPropsWithLayout } from 'next/app'
import {LayoutGroup} from "framer-motion";

/**
 * @see https://nextjs.org/docs/basic-features/typescript#custom-app
 */
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ChakraProvider>
      <LayoutGroup id={'test'}>
        <Box w={"full"} maxW={'1000px'} px={'20px'} mx={'auto'}>

        {getLayout(<Component {...pageProps} />, pageProps)}
        </Box>
      </LayoutGroup>
    </ChakraProvider>
  )
}

export default MyApp
