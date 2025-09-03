import { useState, useEffect } from 'react'
import archoeDown from '@/assets/svg/anchor-down.svg'
import archoeUp from '@/assets/svg/anchor-up.svg'

interface AccordionItemProps {
  title: string
  children: React.ReactNode
}

export default function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    handleResize() 
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(true) 
    } else {
      setIsOpen(false)
    }
  }, [isMobile])

  return (
    <div>
      <button
        className="w-full flex justify-between items-center py-2 font-semibold md:cursor-default"
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        {title}
        {isMobile && (
          <img
            src={isOpen ? archoeUp : archoeDown}
            className="w-4 h-4"
            alt="arrow"
          />
        )}
      </button>

      {isOpen && <div className="flex flex-col space-y-2 mt-2">{children}</div>}
    </div>
  )
}
