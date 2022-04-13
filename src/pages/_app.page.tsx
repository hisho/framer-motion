/**
 * @see https://medium.com/@keeganfamouss/accessibility-on-demand-with-chakra-ui-and-focus-visible-19413b1bc6f9
 */
import 'focus-visible'

import { Box, ChakraProvider } from '@chakra-ui/react'
import { LayoutGroup } from 'framer-motion'
import type { AppPropsWithLayout } from 'next/app'

/**
 * @see https://nextjs.org/docs/basic-features/typescript#custom-app
 */
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ChakraProvider>
      <LayoutGroup id={'test'}>
        <Box maxW={'1000px'} mx={'auto'} px={'20px'} w={'full'}>
          {getLayout(<Component {...pageProps} />, pageProps)}
        </Box>
      </LayoutGroup>
    </ChakraProvider>
  )
}

export default MyApp
