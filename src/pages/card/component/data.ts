const range = (length: number) => Array.from({ length }, (v, k) => k)
const createText = (length: number) =>
  range(length)
    .map(() => 'text')
    .join('')

export const items = [
  {
    backgroundColor: '#814A0E',
    category: 'Pizza',
    id: 'pizza',
    image: '/images/cat01.jpg',
    text: createText(40),
    title: '5 Food Apps Delivering the Best of Your City',
  },
  {
    backgroundColor: '#959684',
    category: 'How to',
    id: 'how-to',
    image: '/images/cat02.jpg',
    text: createText(10),
    title: 'Arrange Your Apple Devices for the Gram',
  },
  {
    backgroundColor: '#5DBCD2',
    category: 'Pedal Power',
    id: 'pedal-power',
    image: '/images/cat03.jpg',
    text: createText(30),
    title: 'Map Apps for the Superior Mode of Transport',
  },
  {
    backgroundColor: '#8F986D',
    category: 'Holidays',
    id: 'holidays',
    image: '/images/cat04.jpg',
    text: createText(100),
    title: 'Our Pick of Apps to Help You Escape From Apps',
  },
  {
    backgroundColor: '#FA6779',
    category: 'Photography',
    id: 'photography',
    image: '/images/cat05.jpg',
    text: createText(80),
    title: 'The Latest Ultra-Specific Photography Editing Apps',
  },
  {
    backgroundColor: '#282F49',
    category: "They're all the same",
    id: 'same',
    image: '/images/cat01.jpg',
    text: createText(15),
    title: '100 Cupcake Apps for the Cupcake Connoisseur',
  },
  {
    backgroundColor: '#AC7441',
    category: 'Cats',
    id: 'cats',
    image: '/images/cat02.jpg',
    text: createText(400),
    title: 'Yes, They Are Sociopaths',
  },
] as const

export const openSpring = {
  damping: 30,
  stiffness: 200,
  type: 'spring',
} as const
