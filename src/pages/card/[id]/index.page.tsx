import { Container } from '@mantine/core'
import { items } from '@src/pages/card/component/data'
import { Item } from '@src/pages/card/component/Item'
import { List } from '@src/pages/card/component/List'
import { AnimatePresence } from 'framer-motion'
import type { NextPageWithLayout } from 'next'
import { useRouter } from 'next/router'

/**
 * server side & redirect ...
 */

const Page: NextPageWithLayout = () => {
  const { query } = useRouter()
  console.log(query)
  const id =
    'id' in query && typeof query.id === 'string' ? query.id : undefined
  const item = items.find((n) => n.id === id)
  return (
    <Container>
      <List />
      <AnimatePresence>
        {id && item && <Item {...item} key={'item'} />}
      </AnimatePresence>
    </Container>
  )
}

export default Page
