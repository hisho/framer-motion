export const pagesPath = {
  "card": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/card/[id]' as const, query: { id }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/card' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
