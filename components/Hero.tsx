import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5581989636483'
    const message = 'Olá! Gostaria de saber mais sobre os tratamentos de estética.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="inicio" className="section-padding bg-[#F8E1E7] pt-24 lg:pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-[#000000] leading-tight">
              Marta Amália
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-[#E89AA8]">
                Estética e Bem-estar
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-md">
              Protocolos avançados de estética facial e corporal em Recife-PE.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <a
                href="https://wa.me/5581989636483?text=Olá! Gostaria de saber mais sobre os tratamentos de estética."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition text-center text-sm sm:text-base"
              >
                Falar com a gente
              </a>
              <a
                href="#servicos"
                className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 border-2 border-[#E89AA8] text-[#E89AA8] rounded-lg hover:bg-[#E89AA8]/10 transition text-center text-sm sm:text-base"
              >
                Conhecer Serviços
              </a>
            </div>
            <div className="flex gap-3 sm:gap-4 lg:gap-8 mt-4 lg:mt-8">
              {[
                { num: '500+', label: 'Clientes Satisfeitas' },
                { num: '10+', label: 'Anos de Experiência' },
                { num: '8+', label: 'Tratamentos' }
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#E89AA8]">{item.num}</span>
                  <p className="text-xs sm:text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            {/* Main Image Container */}
            <div className="relative z-20">
              {/* Sophisticated Frame */}
              <div className="relative">
                {/* Outer Frame with Shadow */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl lg:rounded-[2rem] shadow-lg lg:shadow-2xl p-3 sm:p-4 lg:p-8 transform rotate-1 lg:rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
                  {/* Inner Frame with Border */}
                  <div className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 rounded-lg lg:rounded-[1.5rem] p-2 sm:p-3 lg:p-6 border border-pink-100">
                    {/* Image Container */}
                    <div className="relative w-48 h-60 sm:w-56 sm:h-70 lg:w-80 lg:h-96 xl:w-96 xl:h-[480px] overflow-hidden rounded-lg lg:rounded-2xl">
                      <Image
                        src="/Marta-Amália-Estética-2.webp"
                        alt="Marta Amália - Esteticista em Recife"
                        width={480}
                        height={600}
                        className="object-cover w-full h-full drop-shadow-xl"
                        style={{
                          objectPosition: 'center top',
                          borderRadius: '0.5rem',
                          transform: 'scale(1.05)'
                        }}
                        priority={true}
                        quality={95}
                      />
                    </div>
                    
                    {/* Elegant Corner Decorations - Hidden on mobile */}
                    <div className="hidden lg:block absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-90 shadow-lg"></div>
                    <div className="hidden lg:block absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-90 shadow-lg"></div>
                    
                    {/* Subtle Inner Decorations - Hidden on mobile */}
                    <div className="hidden lg:block absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full opacity-60"></div>
                    <div className="hidden lg:block absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full opacity-60"></div>
                  </div>
                </div>
                
                {/* Floating Accent Elements - Hidden on mobile */}
                <div className="hidden lg:block absolute -top-4 -right-4 w-6 h-6 bg-pink-300 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="hidden lg:block absolute -bottom-4 -left-4 w-4 h-4 bg-rose-300 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
            
            {/* Background Decorative Elements - Hidden on mobile */}
            <div className="hidden lg:block absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-30 blur-2xl" aria-hidden="true"></div>
            <div className="hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-30 blur-2xl" aria-hidden="true"></div>
            
            {/* Subtle Floating Particles - Hidden on mobile */}
            <div className="hidden lg:block absolute top-16 -right-6 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>
            <div className="hidden lg:block absolute bottom-20 -left-4 w-2 h-2 bg-rose-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="hidden lg:block absolute top-32 -right-2 w-2 h-2 bg-pink-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
