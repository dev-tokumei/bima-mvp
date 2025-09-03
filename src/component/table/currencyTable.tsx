import type { CurrencyRate } from '../../api/currency'
import Button from '../ui/button'

interface Props {
  rates: CurrencyRate[]
  loading: boolean
  error: string | null
  lastUpdated: string
  onReload: () => void
}

export default function CurrencyTable({
  rates,
  loading,
  error,
  lastUpdated,
  onReload,
}: Props) {
  const displayedRates = rates.filter((r) =>
    ['USD', 'RUB', 'TJS'].includes(r.code)
  )

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Курс валют, за 1 единицу
      </h2>

      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-2">Загрузка...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
          <button
            onClick={onReload}
            className="mt-2 px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200"
          >
            Попробовать снова
          </button>
        </div>
      )}

      {!loading && displayedRates.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-300 text-gray-700">
                <th className="p-3 text-left font-medium">Валюта</th>
                <th className="p-3 text-right font-medium">Курс</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {displayedRates.map((rate) => (
                <tr
                  key={rate.code}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-3 font-medium">1 {rate.code}</td>
                  <td className="p-3 text-right">{rate.buy.toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
        <span>Обновлено: {lastUpdated || 'еще не обновлялось'}</span>
        <div className="w-[100px]">
          <Button onClick={onReload} disabled={loading}>
            {loading ? 'Обновление...' : 'Обновить'}
          </Button>
        </div>
      </div>
    </div>
  )
}
