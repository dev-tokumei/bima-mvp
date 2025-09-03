import footerDecor from '@/assets/svg/footer-decor.svg'
import footerLogo from '@/assets/svg/footerLogo.svg'

import appstore from '@/assets/svg/btn_appstore.svg'
import googleplay from '@/assets/svg/btn_googleplay.svg'
import AccordionItem from './accordionItem'
import { LinkItems } from './link-items'

export default function Footer() {
  return (
    <footer className="bg-[#222] text-white relative mt-5">
      {/* Декоративная линия */}
      <img src={footerDecor} alt="" className="w-full" />

      <div className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Лого и инфо */}
          <div>
            <img src={footerLogo} alt="BIMA" className="h-12 mb-4" />
            <p className="text-gray-300 text-sm mb-4">
              ООО "Страховая и перестраховочная организация БИМА" <br />
              Режим работы: пн–пт с 09:00 до 18:00 <br />
              (Перерыв: 12:00 – 13:00)
            </p>
            <LinkItems />

            {/* Магазины */}
            <div className="flex space-x-2">
              <a
                href="https://apps.apple.com/ru/app/bima/id6446894765"
                target="_blank"
              >
                <img src={appstore} alt="App Store" className="h-10" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=tj.bima"
                target="_blank"
              >
                <img src={googleplay} alt="Google Play" className="h-10" />
              </a>
            </div>
          </div>
          <div className="col-span-3 grid md:grid-cols-3 gap-6">
            <AccordionItem title="Компания">
              <a href="/blog/o-nas">О нас</a>
              <a href="/leaders">Руководство</a>
              <a href="/offices">Офисы</a>
              <a href="/vacancies">Вакансии</a>
              <a href="/docs">Документация</a>
            </AccordionItem>

            <AccordionItem title="Услуги">
              <a href="/blog/dostavka-korobochnyh-polisov">
                Доставка коробочных полисов
              </a>
              <a href="/blog/konsultacii-specialistov-bima">
                Консультации специалистов
              </a>
              <a href="/blog/treningi-po-finansovoy-gramotnosti">
                Тренинги по финансовой грамотности
              </a>
            </AccordionItem>

            <AccordionItem title="Свяжитесь с нами">
              <a href="mailto:mail@bima.tj">mail@bima.tj</a>
              <a href="tel:+992446015511">+992 44 601 5511</a>
              <a href="/offices">г. Душанбе, ул. Нусратулло Махсум, 74/3</a>
              <a href="/offices">Почтовый индекс 734001</a>
            </AccordionItem>
          </div>
        </div>
      </div>

      {/* Нижняя линия */}
      <div className="bg-black/80 text-gray-400 text-xs py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span>© BIMA Insurance 2021-2025 All rights reserved</span>
          <span>powered by AISWARE</span>
        </div>
      </div>
    </footer>
  )
}
