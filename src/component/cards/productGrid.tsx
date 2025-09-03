import React from 'react'
import { products } from '../../models/box'
import ProductCard from './productCard'
import { MibileSlider } from '../sliders/mobile-slider'

const ProductGrid: React.FC = () => {
  return (
    <>
      <div className="flex w-full flex-wrap gap-6 box_none">
        {products?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div className="mobile_slider">
        <MibileSlider />
      </div>
    </>
  )
}

export default ProductGrid
