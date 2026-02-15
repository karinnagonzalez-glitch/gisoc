import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    'Gestión Comunitaria',
    'Estudios Sociales',
    'Asesoría Estratégica',
    'Due Diligence',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/images/gisoc-logo.png"
              alt="GISOC Logo"
              className="h-14 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Consultora especializada en gestión comunitaria, estudios sociales
              y asesoría estratégica para proyectos complejos.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E53935] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navegación</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#servicios"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#servicios');
                    }}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-[#E53935] mr-3 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contacto@gisoc.cl"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  contacto@gisoc.cl
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-[#E53935] mr-3 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+562XXXXXXXX"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +56 2 XXXX XXXX
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#E53935] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Santiago, Chile</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} GISOC. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Términos de uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
