interface CurrencyButtonsProps {
  selected: string
  onSelect: (code: string) => void
}

const buttons = [
  { label: 'Интиқолҳо', value: 'transfer' },
  { label: 'Дар хазина', value: 'cash' },
  { label: 'Ғайринақдӣ', value: 'nonCash' },
  { label: 'Бо кортҳо', value: 'cards' },
  { label: 'БМТ', value: 'bmt' },
]

export default function CurrencyButtons({
  selected,
  onSelect,
}: CurrencyButtonsProps) {
  return (
    <div className="hide-scrollbar flex overflow-x-auto px-3.5 md:max-w-[460px] md:flex-wrap md:px-0">
      {buttons.map((btn) => (
        <div
          key={btn.value}
          className="bodySmall md:bodyNormal mr-1 last:mr-0 md:mb-3"
        >
          <button
            type="button"
            aria-label={btn.label}
            onClick={() => onSelect(btn.value)}
            className={`whitespace-nowrap rounded-full leading-5 duration-150 py-1.5 px-3.5
              ${selected === btn.value ? 'bg-darkBlue text-white border-darkBlue' : 'bg-lightGrey text-darkGrey'}
              hover:border-darkBlue hover:text-white hover:bg-darkBlue`}
          >
            <p>{btn.label}</p>
          </button>
        </div>
      ))}
    </div>
  )
}
