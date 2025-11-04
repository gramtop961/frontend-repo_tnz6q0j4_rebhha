import { TrendingUp, Shield, Clock, BarChart3 } from 'lucide-react';

const stats = [
  {
    label: 'Annualized Return',
    value: '+38.4%',
    sub: 'since 2022',
    icon: TrendingUp,
  },
  {
    label: 'Max Drawdown',
    value: '-7.9%',
    sub: 'capital protected',
    icon: Shield,
  },
  {
    label: 'Sharpe Ratio',
    value: '1.86',
    sub: 'risk-adjusted',
    icon: BarChart3,
  },
  {
    label: 'Trade Horizon',
    value: '1h–5d',
    sub: 'systematic + discretionary',
    icon: Clock,
  },
];

function Stats() {
  return (
    <section className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-['Mona_Sans'] text-2xl font-semibold sm:text-3xl">Performance Snapshot</h2>
          <p className="mt-2 text-white/70">Indicative metrics from audited strategy composites.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ label, value, sub, icon: Icon }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 backdrop-blur transition hover:border-white/20"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-white/70">{label}</p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p>
                  <p className="mt-1 text-xs text-white/60">{sub}</p>
                </div>
                <span className="rounded-md border border-white/10 bg-white/5 p-2 text-white/80">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
