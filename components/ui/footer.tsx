import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link href="/" aria-label="Tulip Industries Home">
              <Logo />
            </Link>
            <div className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Tulip Industries Ltd. <br />
              All rights reserved.
            </div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2 text-center sm:text-left">
            <h3 className="text-sm font-medium">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#products">Tenor Kiosk</Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#products">Octopus Medical</Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#products">HealthScan</Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2 text-center sm:text-left">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#services">3D CAD Design</Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#services">Precision Build</Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#services">Remote Support</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2 text-center sm:text-left">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link className="text-gray-600 transition hover:text-gray-900" href="#">Terms of service</Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium" style={{ display: 'none' }}>Social</h3>
            <ul className="flex gap-1" style={{ display: 'none' }}>
              <li>
                <Link className="flex items-center justify-center text-blue-500 transition hover:text-blue-600" href="#" aria-label="LinkedIn">
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.6V8.7c-.1-.5-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.3v7.6zm-1.1-8.5c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3zm10 8.5h-2.3v-3.9c0-.9-.1-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2v4h-2.3V14h2.2v1.1h.1c.3-.6 1-1.3 2.3-1.3 2.4 0 2.8 1.6 2.8 3.7v4.1z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[150px] sm:text-[300px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['TULIP'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['TULIP'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3" aria-hidden="true">
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
