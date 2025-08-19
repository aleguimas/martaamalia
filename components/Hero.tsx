import Link from 'next/link'

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5581989636483'
    const message = 'Olá! Gostaria de saber mais sobre os tratamentos de estética.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="inicio" className="section-padding bg-[#F8E1E7] pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#000000] leading-snug">
              Marta Amália
              <span className="block text-2xl md:text-3xl font-serif text-[#E89AA8]">
                Estética e Bem-estar
              </span>
            </h1>
            <p className="text-lg text-gray-700 max-w-md">
              Protocolos avançados de estética facial e corporal em Recife-PE.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5581989636483?text=Olá! Gostaria de saber mais sobre os tratamentos de estética."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
              >
                Falar com a gente
              </a>
              <a
                href="#servicos"
                className="px-6 py-3 border-2 border-[#E89AA8] text-[#E89AA8] rounded-lg hover:bg-[#E89AA8]/10 transition"
              >
                Conhecer Serviços
              </a>
            </div>
            <div className="flex gap-8 mt-8">
              {[
                { num: '500+', label: 'Clientes Satisfeitas' },
                { num: '10+', label: 'Anos de Experiência' },
                { num: '15+', label: 'Tratamentos' }
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <span className="text-2xl font-bold text-[#E89AA8]">{item.num}</span>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-96 lg:h-[500px] bg-pink-100 rounded-2xl flex items-center justify-center shadow-lg">
                {/* Espaço para foto da Marta Amália */}
                <div className="text-center text-gray-600">
                  <svg className="w-24 h-24 mx-auto mb-4 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg font-medium">Imagem da Profissional</p>
                  <p className="text-sm">Espaço para foto da Marta Amália</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-100 rounded-full" aria-hidden="true"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-rose-100 rounded-full" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
