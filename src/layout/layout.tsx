import type { ReactNode } from 'react'
import { Navbar } from '../component/navbar/navbar.component'
import Footer from '../component/footer/footer'

export const LayoutComponent = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className=" ">
        <div className=" navbar mx-auto max-w-[1280px] ">
          <Navbar />
        </div>
        <main className="py-3 pt-[80px] mx-auto max-w-[1280px] w-[87.1%]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
