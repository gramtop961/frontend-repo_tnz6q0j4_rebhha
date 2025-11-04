function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 text-center backdrop-blur">
          <h2 className="font-['Mona_Sans'] text-2xl font-semibold sm:text-3xl">Let’s Connect</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Interested in allocations, strategy deep-dives, or audited track records? Reach out for a private briefing and data room access.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:trader@yourdomain.com"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-black shadow-sm transition hover:bg-white/90"
            >
              Email Me
            </a>
            <a
              href="https://cal.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              Book a Call
            </a>
          </div>
          <p className="mt-6 text-xs text-white/50">For professional and institutional inquiries only.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
