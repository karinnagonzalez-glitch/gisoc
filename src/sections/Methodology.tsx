import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Database, Lightbulb, Rocket, BarChart3, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Methodology = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

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

      // Line animation
      const lineTrigger = ScrollTrigger.create({
        trigger: stepsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            lineRef.current,
            { scaleX: 0 },
            { scaleX: 1, duration: 1.2, ease: 'power3.out', transformOrigin: 'left center' }
          );
        },
        once: true,
      });
      triggers.push(lineTrigger);

      // Steps animation
      const stepsTrigger = ScrollTrigger.create({
        trigger: stepsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            stepsRef.current?.querySelectorAll('.step-card') || [],
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.2,
              ease: 'power3.out',
              delay: 0.3,
            }
          );
        },
        once: true,
      });
      triggers.push(stepsTrigger);

      // Benefits animation
      const benefitsTrigger = ScrollTrigger.create({
        trigger: benefitsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            benefitsRef.current?.querySelectorAll('.benefit-item') || [],
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power3.out',
            }
          );
        },
        once: true,
      });
      triggers.push(benefitsTrigger);
    }, sectionRef);

    return () => {
      triggers.forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, []);

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Diagnóstico territorial',
      description: 'Comprendemos el contexto social, cultural y económico del territorio.',
    },
    {
      number: '02',
      icon: Database,
      title: 'Levantamiento de información',
      description: 'Recopilamos datos cualitativos y cuantitativos rigurosos.',
    },
    {
      number: '03',
      icon: Lightbulb,
      title: 'Diseño de estrategia',
      description: 'Desarrollamos soluciones adaptadas a cada contexto y proyecto.',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Implementación',
      description: 'Ejecutamos y supervisamos la puesta en marcha de las estrategias.',
    },
    {
      number: '05',
      icon: BarChart3,
      title: 'Evaluación continua',
      description: 'Medimos resultados y ajustamos para optimizar el impacto.',
    },
  ];

  const benefits = [
    'Basada en evidencia',
    'Enfoque participativo',
    'Adaptable a distintas industrias',
    'Alineada a estándares internacionales',
  ];

  return (
    <section
      id="metodologia"
      ref={sectionRef}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-100 text-[#E53935] text-sm font-medium rounded-full mb-4">
            Metodología
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nuestro Enfoque de Trabajo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestra metodología combina investigación social aplicada, análisis
            de datos y experiencias en terreno. Trabajamos en etapas claras que
            permiten comprender el contexto, anticipar riesgos y diseñar
            soluciones efectivas.
          </p>
          <div className="w-20 h-1 bg-[#E53935] mx-auto rounded-full mt-6" />
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative mb-20">
          {/* Connection line - desktop only */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-red-200 via-[#E53935] to-red-200"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step-card relative bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#E53935] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4 mt-4 group-hover:bg-[#E53935] transition-colors">
                  <step.icon className="w-8 h-8 text-[#E53935]" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div
          ref={benefitsRef}
          className="bg-[#F8F9FA] rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            ¿Por qué nuestra metodología funciona?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-item flex items-center bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="w-5 h-5 text-[#E53935]" />
                </div>
                <p className="font-medium text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
