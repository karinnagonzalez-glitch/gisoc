import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
}

const Blog = () => {
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
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
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

  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Gestión comunitaria en proyectos de gran escala',
      category: 'Gestión Comunitaria',
      excerpt:
        'Claves para construir relaciones sostenibles entre proyectos industriales y comunidades locales.',
      image: '/images/blog-community.jpg',
      readTime: '5 min',
    },
    {
      id: 2,
      title: 'Buenas prácticas en evaluación socioambiental',
      category: 'Estudios Sociales',
      excerpt:
        'Metodologías efectivas para comprender el impacto social de los proyectos de inversión.',
      image: '/images/blog-analysis.jpg',
      readTime: '7 min',
    },
    {
      id: 3,
      title: 'Tendencias en consulta indígena',
      category: 'Consulta Indígena',
      excerpt:
        'Evolución del marco normativo y prácticas emergentes en el diálogo con pueblos indígenas.',
      image: '/images/blog-indigenous.jpg',
      readTime: '6 min',
    },
  ];

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="py-24 bg-[#F8F9FA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-red-100 text-[#E53935] text-sm font-medium rounded-full mb-4">
              Blog
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Insights y Artículos
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Reflexiones y conocimiento sobre gestión social y comunitaria.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center text-[#E53935] font-medium mt-6 lg:mt-0 group"
          >
            Ver todos los artículos
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Blog Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="inline-block px-3 py-1 bg-red-100 text-[#E53935] text-xs font-medium rounded-full mb-4">
                  {post.category}
                </span>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#E53935] transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime} de lectura
                  </div>
                  <button className="inline-flex items-center text-[#E53935] font-medium text-sm group/btn">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
