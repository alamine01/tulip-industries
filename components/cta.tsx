export default function Cta() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-8 py-12 shadow-2xl md:px-12 md:py-20" data-aos="zoom-y-out">
          {/* Background decoration */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 -z-10 translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
          </div>

          <div className="flex flex-col items-center text-center md:flex-row md:text-left md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="mb-4 text-3xl font-bold text-gray-100 md:text-4xl">
                Let's build the future <span className="text-blue-500 italic">together.</span>
              </h2>
              <p className="text-lg text-gray-400">
                Contact us today to discuss your industrial technology needs. From kiosks to telemedicine, we have the solution.
              </p>
            </div>
            <div>
              <a
                className="btn bg-blue-600 text-white shadow-sm hover:bg-blue-700 px-8 py-4 text-lg font-bold"
                href="mailto:contact@tulipindustries.com"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-800 text-gray-400">
            <div>
              <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">Call Us</h4>
              <p>+224 622 35 41 53</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">Visit Us</h4>
              <p>Sonfonia Gare, Conakry, Guinea</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">Email Us</h4>
              <p>contact@tulipindustries.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
