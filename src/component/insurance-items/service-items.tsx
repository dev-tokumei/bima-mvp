import ShieldIcon from '@/assets/svg/shield-icon.svg'
import WheelIcon from '@/assets/svg/wheel-icon.svg'
import TumblerIcon from '@/assets/svg/tumbler-icon.svg'

interface ServiceItem {
  icon: string
  text: string
}

const items: ServiceItem[] = [
  { icon: ShieldIcon, text: 'Страховой случай' },
  { icon: WheelIcon, text: 'Проверить полис' },
  { icon: TumblerIcon, text: 'Активировать полис' },
]

export const Items = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 py-10">
      {items.map((item, idx) => (
        <button
          key={idx}
          type="button"
          className="flex flex-col items-center justify-center w-full rounded-xl border border-gray-200 bg-white py-4 px-2 
                     hover:bg-[rgba(251,190,7,0.5)] hover:scale-[1.02] transition 
                     focus:outline-none active:outline-none
                     cursor-pointer"
        >
          <img src={item.icon} alt={item.text} className="w-12 h-12 mb-3" />
          <p className="text-gray-800 font-medium">{item.text}</p>
        </button>
      ))}
    </div>
  )
}
