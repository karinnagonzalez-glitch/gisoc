import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Users,
  ClipboardList,
  FileText,
  Building2,
  Check,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
  delay: number;
}

const ServiceCard = ({ icon: Icon, title, description, items }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100">
      <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E53935] transition-colors duration-300">
        <Icon className="w-8 h-8 text-[#E53935] group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-sm text-gray-700">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-0.5">
              <Check className="w-3 h-3 text-[#E53935]" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Cards animation
      const cardsTrigger = ScrollTrigger.create({
        trigger: cardsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            cardsRef.current?.children || [],
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.15,
              ease: 'power3.out',
            }
          );
        },
        once: true,
      });
      triggers.push(cardsTrigger);
    }, sectionRef);

    return () => {
      triggers.forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, []);

  const services = [
    {
      icon: Users,
      title: 'Gestión Comunitaria',
      description:
        'Desarrollamos estrategias de relacionamiento y gestión comunitaria que fortalecen la confianza entre proyectos, comunidades y actores relevantes.',
      items: [
        'Estrategias de relacionamiento comunitario',
        'Planes con partes interesadas',
        'Procesos participativos',
        'Consulta indígena',
        'Programas de reasentamiento',
        'Gestión de conflictos',
      ],
    },
    {
      icon: ClipboardList,
      title: 'Estudios Sociales',
      description:
        'Aplicamos metodologías de investigación social para comprender el territorio, sus dinámicas y su tejido social.',
      items: [
        'Estudios socioeconómicos',
        'Levantamiento en terreno',
        'Diagnósticos sociales',
        'Evaluación socioambiental',
        'Mapas de actores',
        'Monitoreo social',
      ],
    },
    {
      icon: FileText,
      title: 'Asesoría Estratégica',
      description:
        'Apoyamos en el diseño y fortalecimiento de políticas, procedimientos y estándares sociales alineados a buenas prácticas.',
      items: [
        'Due diligence social',
        'Normativas y procedimientos',
        'Evaluación de riesgos',
        'Implementación de estándares',
        'Capacitación interna',
      ],
    },
    {
      icon: Building2,
      title: 'Industrias',
      description:
        'Nuestra experiencia abarca industrias que requieren integrar la dimensión social de manera estratégica y rigurosa.',
      items: [
        'Minería',
        'Energías Renovables',
        'Infraestructura',
        'Acuicultura',
        'Proyectos industriales',
        'Otros sectores',
      ],
    },
  ];

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-100 text-[#E53935] text-sm font-medium rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Soluciones Integrales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos servicios especializados para la gestión social y
            comunitaria de proyectos complejos en diversas industrias.
          </p>
          <div className="w-20 h-1 bg-[#E53935] mx-auto rounded-full mt-6" />
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              items={service.items}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
