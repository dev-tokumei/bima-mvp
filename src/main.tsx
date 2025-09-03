import { createRoot } from 'react-dom/client'
import { LayoutComponent } from './layout/layout'
import { Items } from './component/insurance-items/service-items'
import { Heading } from './component/ui/typography/heading'
import ProductGrid from './component/cards/productGrid'
import { MainSlider } from './component/sliders/mainSlider'
import { PartnersSlider } from './component/sliders/partnersSlider'
import { BlogSlider } from './component/sliders/blog-slider'
import CurrencyConverter from './component/currency/currencySection'

createRoot(document.getElementById('root')!).render(
  <LayoutComponent>
    <MainSlider />
    <Items />
    <Heading title="Популярные продукты" />
    <ProductGrid />
    <Heading title="Курс валюты" />
    <CurrencyConverter />
    <Heading title="Наши партнеры" />
    <PartnersSlider />
    <Heading title="#Bima.Блог" />
    <BlogSlider />
  </LayoutComponent>
)
