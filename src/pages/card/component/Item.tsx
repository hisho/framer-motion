import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Card,
  Space,
  Text,
  Title,
} from '@mantine/core'
import { pagesPath } from '@src/lib/pathpida/$path'
import { items } from '@src/pages/card/component/data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export const Item = ({
  backgroundColor,
  category,
  id,
  text,
  title,
}: typeof items[number]) => {
  return (
    <>
      <Box
        animate={{ opacity: 1 }}
        component={motion.div}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        initial={{ opacity: 0 }}
        sx={{
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          inset: 0,
          pointerEvents: 'auto',
          position: 'fixed',
          willChange: 'opacity',
          zIndex: 1,
        }}
        transition={{ delay: 0.15, duration: 0.2 }}
      />
      <Box
        sx={{
          display: 'grid',
          inset: 0,
          padding: 20,
          placeContent: 'center',
          position: 'fixed',
          zIndex: 10000,
        }}
      >
        <Card
          component={motion.div}
          layoutId={`card-container-${id}`}
          sx={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 400,
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
            <Title order={2}>{title}</Title>
            <Badge color={'pink'} variant={'light'}>
              {category}
            </Badge>
          </Box>
          <Text
            animate
            className={'content-container'}
            component={motion.div}
            sx={{ overflowY: 'auto' }}
          >
            {text}
          </Text>
          <Space h={20} />
          <Link passHref href={pagesPath.card.$url()} scroll={false}>
            <Button component={'a'} sx={{ marginTop: 'auto' }}>
              Next link button
            </Button>
          </Link>
        </Card>
      </Box>
    </>
  )
}
