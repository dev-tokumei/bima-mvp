import React from 'react'
import type { Product } from '../../models/box'
import Button from '../ui/button'

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { label, title, description, image, id } = product

  return (
    <div
      className={`${id === 1 ? 'w-[823px] h-[400px]' : 'flex w-[400px] '} flex-col border-[0.5px] border-[#fbbe0780] overflow-hidden bg-white h-[400px] `}
    >
      <span className="text-xs font-semibold w-[150px] h-[24px] absolute pt-1 text-center text-[#666] bg-[#f6f6f6] px-5 mt-3 rounded mb-2">
        {label}
      </span>
      <div
        className={`${id === 1 ? ' flex justify-between items-center flex-row-reverse h-full' : ''} px-5`}
      >
        <div>
          <img src={image} alt={title} className="object-contain h-full" />
        </div>
        <div className={'flex flex-col justify-between w-2/3 mt-4'}>
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="primary">Купить</Button>
            <Button variant="outline">Подробнее</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
