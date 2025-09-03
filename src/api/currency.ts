import { parseCSV } from '../utils/parsercsv'

export interface CurrencyRate {
  code: string
  buy: number
  sell: number
}

export const fetchCurrencyRates = async (): Promise<CurrencyRate[]> => {
  const today = new Date().toISOString().split('T')[0]
  const url = `https://nbt.tj/en/kurs/export_csv.php?date=${today}`

  const res = await fetch(
    `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`
  )
  if (!res.ok) throw new Error('Failed to fetch currency rates')

  const csvText = await res.text()

  const parsed = parseCSV(csvText)

  if (!parsed.length) {
    throw new Error('Не удалось распарсить курсы валют')
  }

  return parsed
}
