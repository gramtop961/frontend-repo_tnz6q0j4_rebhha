function Strategy() {
  return (
    <section id="strategy" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-['Mona_Sans'] text-2xl font-semibold sm:text-3xl">Strategy Overview</h2>
          <p className="mt-2 text-white/70">Discipline first. Liquidity second. Alpha through structure.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Market Regimes</h3>
            <p className="mt-2 text-sm text-white/70">
              Top-down assessment across trend, volatility, and funding landscapes to define trade envelopes and throttle risk.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/70">
              <li>Trend + mean-reversion blends</li>
              <li>Volatility expansion/decay signals</li>
              <li>Funding and basis dynamics</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Execution & Risk</h3>
            <p className="mt-2 text-sm text-white/70">
              Position sizing via Kelly caps and drawdown constraints. Execution via TWAP/Sniper with slippage controls.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/70">
              <li>Hard stop + time stop rules</li>
              <li>Correlated exposure netting</li>
              <li>Exchange + custody diversification</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Universe</h3>
            <p className="mt-2 text-sm text-white/70">
              Liquid majors and selected perp markets with robust depth, enabling consistent deployment at scale.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/70">
              <li>BTC, ETH, SOL core</li>
              <li>Perps with sustained liquidity</li>
              <li>Spot for structural carry</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Strategy;
