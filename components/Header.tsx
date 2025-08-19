import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logotipo-marta-amalia.png"
              alt="Marta Amália Estética Integrativa"
              width={160}
              height={60}
              className="h-14 w-auto"
              priority={false}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-pink-600 transition-colors">
              Início
            </Link>
            <Link href="#servicos" className="text-gray-700 hover:text-pink-600 transition-colors">
              Serviços
            </Link>
            <Link href="#sobre" className="text-gray-700 hover:text-pink-600 transition-colors">
              Sobre
            </Link>
            <Link href="#depoimentos" className="text-gray-700 hover:text-pink-600 transition-colors">
              Depoimentos
            </Link>
            <Link href="#contato" className="text-gray-700 hover:text-pink-600 transition-colors">
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#contato" className="btn-primary">
              Agendar Consulta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-gray-100"
            aria-label="Abrir menu de navegação"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="flex flex-col space-y-4 py-4">
              <Link
                href="#inicio"
                className="text-gray-700 hover:text-pink-600 transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="#servicos"
                className="text-gray-700 hover:text-pink-600 transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="#sobre"
                className="text-gray-700 hover:text-pink-600 transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#depoimentos"
                className="text-gray-700 hover:text-pink-600 transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </Link>
              <Link
                href="#contato"
                className="text-gray-700 hover:text-pink-600 transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="px-4 pt-2">
                <Link href="#contato" className="btn-primary w-full text-center block">
                  Agendar Consulta
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
