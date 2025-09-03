import { useState, useEffect } from 'react'
import { fetchCurrencyRates, type CurrencyRate } from '../../api/currency'
import CurrencyTable from '../table/currencyTable'
import CurrencyConverter from './сurrencyConverter'

export default function CurrencySection() {
  const [rates, setRates] = useState<CurrencyRate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState('')

  const loadRates = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchCurrencyRates()
      if (data.length === 0)
        throw new Error('Не удалось распарсить курсы валют')
      setRates(data)
      setLastUpdated(new Date().toLocaleString('ru-RU'))
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Неизвестная ошибка'
      setError(errorMessage)
      console.error('Ошибка загрузки курсов валют:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadRates()
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shdw">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Курс валют НБТ (к сомони)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CurrencyTable
          rates={rates}
          loading={loading}
          error={error}
          lastUpdated={lastUpdated}
          onReload={loadRates}
        />
        <CurrencyConverter rates={rates} />
      </div>
    </div>
  )
}
