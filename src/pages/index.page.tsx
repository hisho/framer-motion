import { IndexContents } from '@src/pages/index.contents'
import type { NextPageWithLayout } from 'next'

/**
 * server side & redirect ...
 */

const Home: NextPageWithLayout = () => {
  return <IndexContents />
}

Home.getLayout = (page) => {
  return <>{page}</>
}

export default Home
