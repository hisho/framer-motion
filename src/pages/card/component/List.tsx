import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Card,
  Space,
  Title,
} from '@mantine/core'
import { pagesPath } from '@src/lib/pathpida/$path'
import { items } from '@src/pages/card/component/data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const HogeCard = ({
  backgroundColor,
  category,
  id,
  title,
}: typeof items[number]) => {
  return (
    <Card
      component={motion.div}
      layoutId={`card-container-${id}`}
      shadow={'sm'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Card.Section
        component={motion.div}
        layoutId={`card-image-container-${id}`}
      >
        <AspectRatio ratio={16 / 9}>
          <Box
            sx={{
              backgroundColor,
            }}
          />
        </AspectRatio>
      </Card.Section>
      <Box component={motion.div} layoutId={`title-container-${id}`}>
        <Title
          order={2}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Title>
        <Badge color={'pink'} variant={'light'}>
          {category}
        </Badge>
      </Box>
      <Space h={20} />
      <Link passHref href={pagesPath.card._id(id).$url()} scroll={false}>
        <Button component={'a'} sx={{ marginTop: 'auto' }}>
          hoge
        </Button>
      </Link>
    </Card>
  )
}

export const List = () => {
  return (
    <Box
      component={'ul'}
      sx={{
        display: 'grid',
        gap: 20,
        gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
      }}
    >
      {items.map((card) => (
        <Box component={'li'} key={card.id}>
          <HogeCard {...card} />
        </Box>
      ))}
    </Box>
  )
}
