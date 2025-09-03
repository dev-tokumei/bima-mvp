import { useState, useRef, useEffect } from 'react'

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('ru')
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const languages = [
    {
      code: 'ru',
      label: 'RU',
      img: 'https://bima.tj/static/media/ru.7e04b988.svg',
    },
    {
      code: 'tj',
      label: 'TJ',
      img: 'https://bima.tj/static/media/tj.4c009c91.svg',
    },
    {
      code: 'en',
      label: 'EN',
      img: 'https://bima.tj/static/media/en.516897fd.svg',
    },
  ]
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLang = languages.find((l) => l.code === selected)

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div
        className="flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-[35px] h-[35px]">
          <img
            className="w-full h-full"
            src={currentLang?.img}
            alt={currentLang?.img}
          />
        </div>
      </div>

      {isOpen && (
        <div className=" absolute mt-2 bg-white shadow-lg rounded-md z-50 w-[39px] ml-2">
          {languages
            .filter((lang) => lang.code !== selected)
            .map((lang) => (
              <div
                key={lang.code}
                className="w-[30px] flex items-centerpx-1 py-1 cursor-pointer hover:bg-gray-100 m-1"
                onClick={() => {
                  setSelected(lang.code)
                  setIsOpen(false)
                }}
              >
                <img
                  className="w-full h-full object-contain"
                  src={lang.img}
                  alt={lang.img}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  )
}
