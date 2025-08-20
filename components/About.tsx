import Image from 'next/image'

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-start order-1 lg:order-1">
            {/* Main Image Container */}
            <div className="relative z-20">
              {/* Sophisticated Frame */}
              <div className="relative">
                {/* Outer Frame with Shadow */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl lg:rounded-[2rem] shadow-lg lg:shadow-2xl p-3 sm:p-4 lg:p-8 transform -rotate-1 lg:-rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105">
                  {/* Inner Frame with Border */}
                  <div className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 rounded-lg lg:rounded-[1.5rem] p-2 sm:p-3 lg:p-6 border border-pink-100">
                    {/* Image Container */}
                    <div className="relative w-48 h-60 sm:w-56 sm:h-70 lg:w-80 lg:h-96 xl:w-96 xl:h-[480px] overflow-hidden rounded-lg lg:rounded-2xl">
                      <Image
                        src="/Marta-Amália-Estética-1.webp"
                        alt="Marta Amália - Esteticista Integrativa em Recife"
                        width={480}
                        height={600}
                        className="object-contain w-full h-full drop-shadow-xl"
                        style={{
                          borderRadius: '0.5rem',
                          transform: 'scale(1.1)'
                        }}
                        priority={false}
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

          {/* Content Section */}
          <div className="order-2 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-6">
              Sobre Marta Amália
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 lg:mb-6 leading-relaxed">
              Olá! Sou Marta Amália, esteticista integrativa apaixonada por transformar vidas através do cuidado com a pele. 
              Com formação em Estética e Cosmetologia, dedico-me a proporcionar tratamentos personalizados que resgatem a 
              autoestima e a beleza natural de cada cliente.
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 lg:mb-6 leading-relaxed">
              Minha experiência de mais de 10 anos na área me permite oferecer um atendimento acolhedor e profissional, 
              sempre priorizando o bem-estar e a satisfação das minhas clientes. Acredito que cada pessoa é única, 
              por isso desenvolvo protocolos personalizados para atender às necessidades específicas de cada uma.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 lg:mb-8 leading-relaxed">
              Continuo me especializando constantemente para oferecer as técnicas mais modernas e eficazes do mercado, 
              garantindo que você receba o melhor tratamento possível em um ambiente seguro e confortável.
            </p>

            {/* Certifications */}
            <div className="mb-4 lg:mb-8">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-4">Formação e Especializações</h3>
              <div className="space-y-2 lg:space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-pink-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Esteticista Cosmetóloga</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-pink-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Especialista em Drenagem Linfática</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-pink-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Terapias Manuais e Pós-cirúrgicos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-pink-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700">Design de Sobrancelhas</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="https://wa.me/5581984636483?text=Olá Marta! Gostaria de agendar uma consulta para conhecer melhor os tratamentos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 sm:py-3 px-3 sm:px-4 lg:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Agendar Consulta
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-8">
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-pink-600 mb-1 lg:mb-2">500+</div>
            <div className="text-xs sm:text-sm text-gray-600">Clientes Atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-pink-600 mb-1 lg:mb-2">10+</div>
            <div className="text-xs sm:text-sm text-gray-600">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-pink-600 mb-1 lg:mb-2">8+</div>
            <div className="text-xs sm:text-sm text-gray-600">Tratamentos Especializados</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-pink-600 mb-1 lg:mb-2">100%</div>
            <div className="text-xs sm:text-sm text-gray-600">Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
