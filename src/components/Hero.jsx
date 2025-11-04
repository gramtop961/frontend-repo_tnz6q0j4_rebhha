import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Crypto Portfolio • Live Strategies
        </span>
        <h1 className="font-['Mona_Sans'] text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Precision Crypto Trading
          <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">for Institutional Results</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          I design risk-managed, data-driven strategies across spot and derivatives markets. Transparent performance, robust execution, and disciplined risk.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-white/90 px-5 py-3 text-sm font-medium text-black shadow-sm transition hover:bg-white"
          >
            Request Track Record
          </a>
          <a
            href="#strategy"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            View Strategy Overview
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
