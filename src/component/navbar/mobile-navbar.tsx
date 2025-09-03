import logo from '@/assets/svg/logo.svg'
import menu from '@/assets/svg/menu.svg'
import close from '@/assets/svg/close.svg'
import Button from '../ui/button'
import { useState, type FC } from 'react'
import { model, type modelType } from './navbar.component'
import { DropDown } from '../ui/drop-down/drop-down'
import { ApplicationForm } from '../ui/forms/applicationForm'

type MobileNavbarProps = {
  isOpen: boolean
  handleClick: () => void
}

export const MobileNavbar: FC<MobileNavbarProps> = ({
  isOpen,
  handleClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const handleModalClick = () => {
    setIsModalOpen(!isModalOpen)
    handleClick()
  }
  return (
    <>
      <div className="w-full  py-5 bg-white z-10 mb-60 mobile_navbar border-b-[1px] fixed border-amber-50 ">
        <div className="w-full flex items-center justify-between mx-auto max-w-[87.1%]">
          <div onClick={handleClick}>
            {isOpen ? (
              <img className="w-[30px] h-[30px]" src={close} alt={close} />
            ) : (
              <img className="w-[35px] h-[35px]" src={menu} alt={menu} />
            )}
          </div>
          <div className="w-[70px] h-[30px]">
            <img src={logo} alt={logo} />
          </div>
          <div>
            <Button variant="primary">Войти</Button>
          </div>
        </div>
        {isOpen && (
          <div className="max-w-[768px] px-7">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col pt-10">
                <span className="w-[75px] border-b-2 text-[#6d6d73] border-[#fbbe07]">
                  Клиентам
                </span>
                <span className=" text-[#6d6d73]">Бизнез</span>
              </div>
              <div>
                <DropDown />
              </div>
            </div>
            <span onClick={handleModalClick} className="text-[#fbbe07]">
              Оставить заявку
            </span>
            <ul className=" py-5">
              {model?.map(({ id, name }: modelType) => (
                <li
                  key={id}
                  className="hover:text-[#fbbe07] transition-colors duration-300 text-[#6d6d73]"
                >
                  {name}
                </li>
              ))}
            </ul>
            <div className="flex flex-col">
              <span className="text-[#6d6d73]">Клиентам</span>
              <span className="text-[#6d6d73]">Бизнез</span>
            </div>
          </div>
        )}
      </div>
      <ApplicationForm isOpen={isModalOpen} handleClick={handleModalClick} />
    </>
  )
}
