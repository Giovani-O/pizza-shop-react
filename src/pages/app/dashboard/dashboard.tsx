import { Helmet } from 'react-helmet-async'
import { MonthlyRevenueCard } from './monthly-revenue-card'
import { MonthlyOrdersAmountCard } from './montly-orders-amount-card'
import { DailyOrdersAmountCard } from './daily-orders-amount-card'
import { MonthlyCanceledOrdersAmount } from './monthly-canceled-orders-amount'
import { RevenueChart } from './revenue-chart'
import { PropularProductsChart } from './popular-products-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthlyRevenueCard />
          <MonthlyOrdersAmountCard />
          <DailyOrdersAmountCard />
          <MonthlyCanceledOrdersAmount />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PropularProductsChart />
        </div>
      </div>
    </>
  )
}
