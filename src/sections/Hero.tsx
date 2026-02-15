import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Check, ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const servicesRef = useRef<HTMLUListElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          subheadlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          servicesRef.current?.children || [],
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.2'
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.9 },
          '-=0.8'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const services = [
    'Estudios Sociales y Socioambientales',
    'Relacionamiento Comunitario',
    'Due Diligence Social (IFC / Banca Internacional)',
    'Procesos Participativos y Consulta Indígena',
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen bg-white pt-20 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-red-50 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="relative z-10">
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Gestión Comunitaria y{' '}
              <span className="text-[#E53935]">Análisis Social</span> para
              Proyectos Complejos
            </h1>

            <p
              ref={subheadlineRef}
              className="text-xl text-gray-600 font-medium mb-6"
            >
              Acompañamos a empresas e instituciones en la relación con
              comunidades y partes interesadas, integrando evidencia social,
              estrategia y enfoque socioambiental.
            </p>

            <p ref={textRef} className="text-gray-600 leading-relaxed mb-8">
              Somos una consultora especializada en investigación social,
              evaluación socioambiental y gestión comunitaria. Desde 2005
              apoyamos a proyectos mineros, energéticos, de infraestructura y
              diversas industrias en la construcción de relaciones responsables,
              informadas y sostenibles.
            </p>

            <ul ref={servicesRef} className="space-y-3 mb-10">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-[#E53935]" />
                  </span>
                  {service}
                </li>
              ))}
            </ul>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E53935] text-white font-semibold rounded-lg hover:bg-[#C62828] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                Conversemos tu proyecto
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#servicios"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#E53935] hover:text-[#E53935] transition-all duration-300"
              >
                Conoce nuestros servicios
                <ChevronRight className="ml-1 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-team.jpg"
                alt="Equipo GISOC colaborando"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#E53935]">19+</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Años de</p>
                  <p className="font-semibold text-gray-900">Experiencia</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#E53935] text-white rounded-xl shadow-xl p-4 hidden lg:block">
              <div className="text-center">
                <p className="text-3xl font-bold">200+</p>
                <p className="text-sm opacity-90">Proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
