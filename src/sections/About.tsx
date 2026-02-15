import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Lightbulb, Users, MapPin, MessageCircle, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];
    
    const ctx = gsap.context(() => {
      // Heading animation
      const headingTrigger = ScrollTrigger.create({
        trigger: headingRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(headingTrigger);

      // Content animation
      const contentTrigger = ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
          );
        },
        once: true,
      });
      triggers.push(contentTrigger);

      // Cards animation
      const cardsTrigger = ScrollTrigger.create({
        trigger: cardsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            cardsRef.current?.children || [],
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(cardsTrigger);

      // Image animation
      const imageTrigger = ScrollTrigger.create({
        trigger: imageRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(imageTrigger);
    }, sectionRef);

    return () => {
      triggers.forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, []);

  const values = [
    { icon: TrendingUp, text: 'Rigor metodológico' },
    { icon: Lightbulb, text: 'Transparencia' },
    { icon: MapPin, text: 'Enfoque territorial' },
    { icon: MessageCircle, text: 'Diálogo y participación' },
    { icon: Users, text: 'Innovación en análisis social' },
  ];

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="py-24 bg-[#F8F9FA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-100 text-[#E53935] text-sm font-medium rounded-full mb-4">
            Sobre Nosotros
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Quiénes Somos
          </h2>
          <div className="w-20 h-1 bg-[#E53935] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Content */}
          <div ref={contentRef}>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Somos un equipo multidisciplinario dedicado a integrar la dimensión
              social en el desarrollo de proyectos. Nuestro enfoque combina
              rigurosidad metodológica, análisis profundo y experiencia en terreno,
              permitiendo diseñar estrategias efectivas para gestionar riesgos,
              fortalecer vínculos y promover decisiones informadas.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* Mission */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#E53935]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Misión
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Contribuir al desarrollo responsable de proyectos mediante
                  soluciones sociales y socioambientales basadas en evidencia,
                  diálogo y una gestión transparente.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-[#E53935]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Visión
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ser un referente nacional en investigación social aplicada y
                  gestión comunitaria estratégica para industrias que buscan operar
                  con excelencia social.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/about-team.jpg"
                alt="Equipo GISOC"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#E53935]/10 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Nuestros Valores
          </h3>
          <div
            ref={cardsRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <value.icon className="w-6 h-6 text-[#E53935]" />
                </div>
                <p className="text-sm font-medium text-gray-700">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
