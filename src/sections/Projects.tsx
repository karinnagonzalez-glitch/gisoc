import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Calendar, Building } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  industry: string;
  year: string;
  role: string;
  description: string;
  result: string;
  image: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('Todos');

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
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
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

  const filters = ['Todos', 'Minería', 'Energía', 'Infraestructura'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Evaluación Socioambiental - Proyecto Minero Andes',
      industry: 'Minería',
      year: '2023',
      role: 'Coordinación de estudio socioeconómico y análisis de partes interesadas',
      description:
        'Desarrollamos el levantamiento socioeconómico y cultural del área de influencia, identificando riesgos sociales y oportunidades para el fortalecimiento del relacionamiento comunitario.',
      result:
        'Información clave para la toma de decisiones y el cumplimiento de compromisos socioambientales.',
      image: '/images/project-mining.jpg',
    },
    {
      id: 2,
      title: 'Consulta Indígena - Parque Eólico Patagonia',
      industry: 'Energía',
      year: '2022',
      role: 'Diseño y facilitación de proceso de consulta indígena',
      description:
        'Acompañamos el diálogo entre la empresa y comunidades indígenas del territorio, garantizando el respeto a derechos colectivos y la participación informada.',
      result:
        'Acuerdos de relación mutuamente beneficiosos y licenciamiento social del proyecto.',
      image: '/images/project-energy.jpg',
    },
    {
      id: 3,
      title: 'Due Diligence Social - Terminal Portuario Pacífico',
      industry: 'Infraestructura',
      year: '2023',
      role: 'Evaluación de riesgos sociales para banca internacional',
      description:
        'Realizamos due diligence social alineado a estándares IFC, evaluando el desempeño social del proyecto y proponiendo planes de acción.',
      result:
        'Cierre de financiamiento con condicionalidades sociales claras y alcanzables.',
      image: '/images/project-port.jpg',
    },
  ];

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((p) => p.industry === activeFilter);

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="py-24 bg-[#F8F9FA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-red-100 text-[#E53935] text-sm font-medium rounded-full mb-4">
            Proyectos y Experiencia
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Casos de Éxito
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proyectos que demuestran nuestro compromiso con la excelencia social
            y el desarrollo responsable.
          </p>
          <div className="w-20 h-1 bg-[#E53935] mx-auto rounded-full mt-6" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#E53935] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full">
                    {project.industry}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.year}
                  </div>
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <Building className="w-5 h-5 text-[#E53935] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Rol
                    </p>
                    <p className="text-sm text-gray-700">{project.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="bg-red-50 rounded-lg p-4 mb-4">
                  <p className="text-xs text-[#E53935] font-medium uppercase tracking-wide mb-1">
                    Resultado
                  </p>
                  <p className="text-sm text-gray-700">{project.result}</p>
                </div>

                <button className="inline-flex items-center text-[#E53935] font-medium text-sm group/btn">
                  Ver detalles
                  <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
