import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import logo from '@/public/logos/mlclogo-circle.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="MLC">
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={logo} width={50} height={50} alt="Features 01" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
            <li>
                <Link
                  href="/"
                  className="font-medium text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="font-medium text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Materials
                </Link>
              </li>
              <li>
                <Link href="/competition" className="btn-sm text-white bg-green-600 hover:bg-green-700 ml-3">
                  Competitions
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
