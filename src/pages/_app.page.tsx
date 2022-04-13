/**
 * @see https://medium.com/@keeganfamouss/accessibility-on-demand-with-chakra-ui-and-focus-visible-19413b1bc6f9
 */
import 'focus-visible'
import '@hisho/reset.css'

import { MantineProvider } from '@mantine/core'
import { LayoutGroup } from 'framer-motion'
import type { AppPropsWithLayout } from 'next/app'

/**
 * @see https://nextjs.org/docs/basic-features/typescript#custom-app
 */
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <MantineProvider>
      <LayoutGroup id={'test'}>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </LayoutGroup>
    </MantineProvider>
  )
}

export default MyApp
