import { Container } from '@mantine/core'
import { List } from '@src/pages/card/component/List'
import type { NextPageWithLayout } from 'next'

/**
 * server side & redirect ...
 */

const Page: NextPageWithLayout = () => {
  return (
    <Container>
      <List />
    </Container>
  )
}

export default Page
