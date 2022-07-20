import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../public/kinegroepzuid_logo.png'
import { nav } from '../../config/nav'
import { getCurrentYear } from '../../utils/date'

export const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <Link href="/" aria-label="Home">
            <a
              title="Kinegroepzuid"
              className="flex items-center justify-center"
            >
              <div style={{ lineHeight: 0 }}>
                <Image src={logo} alt="Kinegroepzuid" width={48} height={48} />
              </div>
              <h1 className="ml-4 text-fuchsia-800 text-xl">Kine Groep Zuid</h1>
            </a>
          </Link>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              {nav.map((navItem) => (
                <Link href={navItem.path} key={navItem.label}>
                  <a
                    className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    href={navItem.path}
                  >
                    {navItem.label}
                  </a>
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <div className="flex justify-center border-t border-slate-400/20 py-10">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright © {getCurrentYear()} Kine Groep Zuid. Alle rechten
            gereserveerd.
          </p>
        </div>
      </div>
    </footer>
  )
}
