import type { CurrencyRate } from '../api/currency'

const normalize = (s: string) => s.trim().replace(/\u00A0/g, ' ')

export const parseCSV = (csvText: string): CurrencyRate[] => {
  if (!csvText) return []

  const rows = csvText
    .split(/\r?\n/)
    .map((r) => r.trim())
    .filter(Boolean)

  if (rows.length < 2) return []

  const rates: CurrencyRate[] = []
  for (let i = 1; i < rows.length; i++) {
    const cols = rows[i].split(';').map(normalize)
    if (cols.length < 4) continue

    const code = cols[1].toUpperCase()
    const unit = parseFloat(cols[2].replace(',', '.')) || 1
    const rate = parseFloat(cols[3].replace(',', '.'))
    if (!code || !rate) continue
    const value = rate / unit

    rates.push({ code, buy: value, sell: value })
  }
  if (!rates.some((r) => r.code === 'TJS')) {
    rates.push({ code: 'TJS', buy: 1, sell: 1 })
  }

  return rates
}
