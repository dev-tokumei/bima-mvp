import logo from '@/assets/svg/logo.svg'
import Button from '../ui/button'
import phone from '@/assets/svg/phone_icon.svg'
import location from '@/assets/svg/location.svg'
import { MobileNavbar } from './mobile-navbar'
import { useState } from 'react'
import { DropDown } from '../ui/drop-down/drop-down'
import { ApplicationForm } from '../ui/forms/applicationForm'

export type modelType = {
  id: number
  name: string
  route: string
}
export const model: modelType[] = [
  { id: 1, name: 'Автострахование', route: '/auto-inshurens' },
  { id: 2, name: 'Коробочные продукты', route: '/boxes-products' },
  { id: 3, name: 'Банковские продукты', route: '/bank-poduct' },
  { id: 4, name: 'Для путешественников', route: '/for-traveling' },
  { id: 5, name: 'Партнёрские проекты', route: '/partners-projects' },
]

export const Navbar = () => {
  const [isOpen, setIsopen] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleClick = () => setIsopen(!isOpen)
  const handleModalClick = () => setIsModalOpen(!isModalOpen)
  return (
    <>
      <div className="fixed z-10 w-[87.1%] bg-white flex justify-between items-center py-3 px-2 border-b-[0.5px] border-[#ccc] hide_sm ">
        <div className="flex justify-between items-center max-w-[350px] w-full">
          <div className="w-[112px] h-[73]">
            <img className="w-full" src={logo} alt="logo" />
          </div>
          <div>
            <span className="mx-3 border-b-2 border-[#fbbe07] cursor-pointer">
              Клиентам
            </span>
            <span className="mx-3 cursor-pointer">Бизнез</span>
          </div>
        </div>
        <div className="w-full max-w-[320px] flex justify-between items-center cursor-pointer">
          <span onClick={handleModalClick} className="text-[#fbbe07]">
            Оставить заявку
          </span>
          <div className="flex items-center">
            <img className="pr-1" src={location} alt="" />
            Офисы
          </div>
          <div className="flex items-center">
            <img className="pr-1" src={phone} alt="" />
            5511
          </div>
          <DropDown />
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-between items-center hide_sm pt-20">
        <ul className="flex justify-between flex-wrap items-center w-[80%] py-5">
          {model?.map(({ id, name }: modelType) => (
            <li
              key={id}
              className="hover:text-[#fbbe07] transition-colors duration-300 cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>
        <div>
          <Button variant="primary">Войти</Button>
        </div>
      </div>
      <MobileNavbar isOpen={isOpen} handleClick={handleClick} />
      <ApplicationForm isOpen={isModalOpen} handleClick={handleModalClick} />
    </>
  )
}
