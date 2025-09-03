import { useState, useEffect } from 'react'
import type { CurrencyRate } from '../../api/currency'

interface Props {
  rates: CurrencyRate[]
}

export default function CurrencyConverter({ rates }: Props) {
  const [amount, setAmount] = useState('')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('TJS')
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null)

  useEffect(() => {
    const numericAmount = parseFloat(amount)
    if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
      setConvertedAmount(null)
      return
    }

    let result: number

    if (fromCurrency === toCurrency) {
      result = numericAmount
    } else if (fromCurrency === 'TJS') {
      const rate = rates.find((r) => r.code === toCurrency)
      if (!rate) return
      result = numericAmount / rate.buy
    } else if (toCurrency === 'TJS') {
      const rate = rates.find((r) => r.code === fromCurrency)
      if (!rate) return
      result = numericAmount * rate.sell
    } else {
      const fromRate = rates.find((r) => r.code === fromCurrency)
      const toRate = rates.find((r) => r.code === toCurrency)
      if (!fromRate || !toRate) return
      result = (numericAmount * fromRate.sell) / toRate.buy
    }

    setConvertedAmount(parseFloat(result.toFixed(4)))
  }, [amount, fromCurrency, toCurrency, rates])

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Конвертер валют
      </h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Сумма:
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Введите сумму"
            min="0"
            step="0.01"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="from-currency"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Из валюты:
            </label>
            <select
              id="from-currency"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {rates.map((rate) => (
                <option key={`from-${rate.code}`} value={rate.code}>
                  {rate.code}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="to-currency"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              В валюту:
            </label>
            <select
              id="to-currency"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {rates.map((rate) => (
                <option key={`to-${rate.code}`} value={rate.code}>
                  {rate.code}
                </option>
              ))}
            </select>
          </div>
        </div>

        {convertedAmount !== null && (
          <div className="p-4 bg-white border border-gray-200 rounded-md shadow-sm">
            <h3 className="font-semibold text-gray-700 text-sm uppercase">
              Результат:
            </h3>
            <p className="text-xl text-blue-600 font-medium mt-1">
              {parseFloat(amount).toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{' '}
              {fromCurrency} ={' '}
              {convertedAmount.toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 6,
              })}{' '}
              {toCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
