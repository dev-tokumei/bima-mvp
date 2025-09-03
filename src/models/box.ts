import salomSosed from '@/assets/salom-sosed.png'
import telohranitel from '../assets/telohranitel.png'
import telohranitelPlus from '../assets/telohranitel-plus.png'
import supergeroy from '../assets/superhero.png'
import supersemeyka from '../assets/supersemeyka.png'

export interface Product {
  id: number
  label: string
  title: string
  description: string
  image: string
  buyLink: string
  moreLink: string
}

export const products: Product[] = [
  {
    id: 1,
    label: 'Коробочный',
    title: 'Салом, Сосед!',
    description:
      'Страхование квартиры от пожаров, затопления и других бытовых неприятностей!',
    image: salomSosed,
    buyLink: 'https://activation.bima.tj/sale/salom-sosed/?lang=ru',
    moreLink: '/boxes/salom-sosed',
  },
  {
    id: 2,
    label: 'Коробочный',
    title: 'Телохранитель',
    description:
      'Данный полис зарекомендовал себя как надежный помощник в случае непредвиденных ситуаций.',
    image: telohranitel,
    buyLink: 'https://activation.bima.tj/sale/telohranitel-2/?lang=ru',
    moreLink: '/boxes/telohranitel-2',
  },
  {
    id: 3,
    label: 'Коробочный',
    title: 'Телохранитель +',
    description:
      'Страхование от несчастных случаев с опцией стационарного лечения, скорой помощи и лекарственного обеспечения.',
    image: telohranitelPlus,
    buyLink: 'https://activation.bima.tj/sale/telohranitel/?lang=ru',
    moreLink: '/boxes/telohranitel',
  },
  {
    id: 4,
    label: 'Коробочный',
    title: 'Супергерой',
    description:
      'Супергерой поможет Вам получить финансовую помощь для лечения и восстановления здоровья Вашего ребенка.',
    image: supergeroy,
    buyLink: 'https://activation.bima.tj/sale/supergeroy/?lang=ru',
    moreLink: '/boxes/supergeroy',
  },
  {
    id: 5,
    label: 'Коробочный',
    title: 'Суперсемейка',
    description:
      'Суперсемейка — это подушка безопасности, которая поддержит Вас  в сложных и непредвиденных жизненных ситуациях.',
    image: supersemeyka,
    buyLink: 'https://activation.bima.tj/sale/supersemeyka/?lang=ru',
    moreLink: '/boxes/supersemeyka',
  },
]
