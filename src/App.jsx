// Aca importamos los hooks de react que nos sirven para los estados, efectos y referencias
import { useState, useEffect, useRef } from 'react';

// Todos los iconos que usa la pagina sacados de la libreria lucide-react
import { 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Menu, 
  Compass, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  Heart, 
  Users, 
  Music, 
  Drama, 
  Footprints, 
  Palette, 
  Utensils, 
  BookOpen, 
  Clock, 
  MapPin, 
  Grid, 
  Award, 
  Maximize2, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Mail, 
  Phone, 
  Send, 
  DollarSign, 
  Info, 
  ArrowUp 
} from 'lucide-react';

import { 
  categories, 
  events, 
  artists, 
  gallery, 
  news, 
  calendarEvents, 
  statistics 
} from './data/culturalData';

// Mapa para saber que icono ponerle a cada categoria de evento
const iconMap = {
  Music: Music,
  Drama: Drama,
  Footprints: Footprints,
  Palette: Palette,
  Utensils: Utensils,
  BookOpen: BookOpen
};

// ==========================================
// COMPONENTE: CONTADOR PARA LAS ESTADISTICAS
// ==========================================
// Este componente sirve para animar los numeritos de abajo del banner principal
function Counter({ targetValue, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let actual = 0;
    // Hacemos que la cuenta sea rapida al inicio
    const paso = Math.ceil(targetValue / 40);
    
    const interval = setInterval(() => {
      actual += paso;
      if (actual >= targetValue) {
        setCount(targetValue);
        clearInterval(interval);
      } else {
        setCount(actual);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [targetValue]);

  return (
    <span className="stat-number">
      {prefix}{count}{suffix}
    </span>
  );
}

// ==========================================
// COMPONENTE: MENU DE NAVEGACION (NAVBAR)
// ==========================================
// Barra de navegacion superior. Tiene soporte para celulares con menu hamburguesa
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');

  // Este efecto es para que la barra se ponga oscura al bajar la pagina
  useEffect(() => {
    const alHacerScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Codigo para detectar en que seccion esta el usuario y pintarlo en el menu
      const secciones = ['inicio', 'nosotros', 'eventos', 'artistas', 'galeria', 'calendario', 'contacto'];
      const posicion = window.scrollY + 120;

      for (let i = 0; i < secciones.length; i++) {
        const id = secciones[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (posicion >= top && posicion < top + height) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', alHacerScroll);
    return () => window.removeEventListener('scroll', alHacerScroll);
  }, []);

  // Funcion para que la pantalla baje suave a la seccion elegida
  const irA = (id) => {
    setMobileOpen(false); // Si esta en celu, cierra el menu
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#inicio" className="logo" onClick={(e) => { e.preventDefault(); irA('inicio'); }}>
            <Compass className="logo-icon" size={28} />
            <span>Cultura Viva SV</span>
          </a>

          {/* Menu de la Computadora */}
          <nav>
            <ul className="nav-links">
              <li><a href="#inicio" className={`nav-link ${activeTab === 'inicio' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); irA('inicio'); }}>Inicio</a></li>
              <li><a href="#nosotros" className={`nav-link ${activeTab === 'nosotros' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); irA('nosotros'); }}>Sobre Nosotros</a></li>
              <li><a href="#eventos" className={`nav-link ${activeTab === 'eventos' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); irA('eventos'); }}>Eventos</a></li>
              <li><a href="#artistas" className={`nav-link ${activeTab === 'artistas' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); irA('artistas'); }}>Artistas</a></li>
              <li><a href="#galeria" className={`nav-link ${activeTab === 'galeria' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); irA('galeria'); }}>Galería</a></li>
              <li><a href="#calendario" className={`nav-link ${activeTab === 'calendario' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); irA('calendario'); }}>Calendario</a></li>
              <li><a href="#contacto" className={`nav-link ${activeTab === 'contacto' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); irA('contacto'); }}>Contacto</a></li>
              <li><a href="#eventos" className="nav-cta" onClick={(e) => { e.preventDefault(); irA('eventos'); }}>Ver Eventos</a></li>
            </ul>
          </nav>

          {/* Boton hamburguesa para celulares */}
          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Capa negra transparente que sale atras del menu movil */}
      <div className={`backdrop-overlay ${mobileOpen ? 'active' : ''}`} onClick={() => setMobileOpen(false)} />

      {/* Menu desplegable de Celular */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <a href="#inicio" className="logo" onClick={(e) => { e.preventDefault(); irA('inicio'); }}>
            <Compass className="logo-icon" size={24} />
            <span>Cultura Viva SV</span>
          </a>
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          <li><a href="#inicio" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); irA('inicio'); }}>Inicio</a></li>
          <li><a href="#nosotros" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); irA('nosotros'); }}>Sobre Nosotros</a></li>
          <li><a href="#eventos" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); irA('eventos'); }}>Eventos</a></li>
          <li><a href="#artistas" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); irA('artistas'); }}>Artistas</a></li>
          <li><a href="#galeria" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); irA('galeria'); }}>Galería</a></li>
          <li><a href="#calendario" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); irA('calendario'); }}>Calendario</a></li>
          <li><a href="#contacto" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); irA('contacto'); }}>Contacto</a></li>
        </ul>
      </div>
    </>
  );
}

// ==========================================
// COMPONENTE: BANNER PRINCIPAL (HERO)
// ==========================================
// Seccion inicial con titulo grande, boton de accion y barra de estadisticas animadas
function Hero() {
  const irAEventos = () => {
    const el = document.getElementById('eventos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="inicio" className="hero">
        <div className="hero-bg-overlay" style={{ backgroundImage: "url('/assets/hero_bg.jpg')" }} />
        <div className="hero-gradient" />
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-tag">
              <Sparkles size={16} />
              <span>Orgullo y Tradición Salvadoreña</span>
            </div>
            <h1 className="hero-title">
              Cultura <span>Viva SV</span>
            </h1>
            <p className="hero-desc">
              Explora la riqueza artística, folclórica e histórica de El Salvador. Descubre festivales de música, exposiciones artísticas, danzas típicas, literatura y ferias gastronómicas en todo el territorio nacional.
            </p>
            <div className="hero-buttons">
              <button onClick={irAEventos} className="btn-primary">Ver Eventos</button>
              <a href="#nosotros" className="btn-secondary" onClick={(e) => { e.preventDefault(); const el = document.getElementById('nosotros'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }}>Saber Más</a>
            </div>
          </div>

          <div className="hero-graphic">
            <div className="hero-pattern-circle" />
            <div className="hero-decorative-card">
              <div className="hero-card-header">
                <div className="hero-card-icon"><Calendar size={24} /></div>
                <div>
                  <h4 className="hero-card-title">Próximo Evento</h4>
                  <p className="hero-card-subtitle">¡Muy pronto!</p>
                </div>
              </div>
              <p className="hero-card-text">
                <strong>Festival de Música Folclórica</strong> en el Teatro de Santa Ana. Una noche única con marimba e instrumentos autóctonos.
              </p>
              <div className="hero-card-footer">
                <span className="hero-card-badge">Folklor</span>
                <button onClick={irAEventos} className="btn-card-more" style={{ color: 'var(--color-amber)' }}>
                  Info <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numeros estadisticos de abajo del banner */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {statistics.map((stat) => (
              <div key={stat.id} className="stat-item">
                <Counter targetValue={stat.count} prefix={stat.prefix} suffix={stat.suffix} />
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ==========================================
// COMPONENTE: QUIENES SOMOS (ABOUT)
// ==========================================
// Informacion del portal y pilares del rescate cultural
function About() {
  return (
    <section id="nosotros" className="about">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-image-wrapper">
            <img src="/assets/about_img.jpg" alt="Cultura de El Salvador" className="about-img" />
            <div className="about-floating-card">
              <div className="about-card-icon"><Compass size={24} /></div>
              <div>
                <h5 className="about-card-title">100% Cuzcatleco</h5>
                <p className="about-card-desc">Promoviendo la identidad y raíces de El Salvador.</p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-tag">Sobre Nosotros</span>
            <h2 className="section-title">Nuestra Misión</h2>
            <p className="about-description">
              <strong>Cultura Viva SV</strong> es una plataforma dedicada al rescate, difusión y celebración de la identidad cultural salvadoreña. Facilitamos la conexión entre los artistas, gestores culturales y el público, permitiendo que locales y extranjeros vivan de cerca las tradiciones de nuestra tierra.
            </p>
            <p className="about-description">
              Creemos firmemente que el arte y la cultura son pilares fundamentales para el desarrollo social y humano, actuando como puentes de paz, entendimiento y orgullo nacional.
            </p>
            
            <div className="about-bullets">
              <div className="about-bullet-item">
                <div className="about-bullet-icon"><Heart size={20} /></div>
                <div>
                  <h4 className="about-bullet-title">Rescate de Identidad</h4>
                  <p className="about-bullet-desc">
                    Fomentamos el aprecio por el añil, las artesanías de barro y madera, las leyendas populares y la gastronomía que nos define.
                  </p>
                </div>
              </div>

              <div className="about-bullet-item">
                <div className="about-bullet-icon"><Users size={20} /></div>
                <div>
                  <h4 className="about-bullet-title">Apoyo a Artistas</h4>
                  <p className="about-bullet-desc">
                    Brindamos visibilidad a pintores, escultores, bailarines folclóricos y literatos que dedican su vida a enriquecer el legado nacional.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// COMPONENTE: SECCION DE EVENTOS (EVENTS)
// ==========================================
// Listado de proximos eventos filtrables por categoria
function EventsSection({ abrirModal }) {
  const [categoriaActiva, setCategoriaActiva] = useState('all');

  // Funcion para filtrar segun el boton presionado
  const eventosFiltrados = categoriaActiva === 'all'
    ? events
    : events.filter(e => e.category === categoriaActiva);

  return (
    <section id="eventos" className="events-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Agenda Cultural</span>
          <h2 className="section-title">Próximos Eventos</h2>
          <p className="section-subtitle">
            Descubre las actividades artísticas y culturales programadas para las próximas semanas en El Salvador.
          </p>
        </div>

        {/* Botones de categorias */}
        <div className="categories-container">
          <button 
            className={`category-btn ${categoriaActiva === 'all' ? 'active' : ''}`}
            onClick={() => setCategoriaActiva('all')}
          >
            <Grid className="category-btn-icon" size={24} />
            <span>Todos</span>
          </button>
          
          {categories.map((cat) => {
            const Icono = iconMap[cat.icon] || Grid;
            return (
              <button
                key={cat.id}
                className={`category-btn ${categoriaActiva === cat.id ? 'active' : ''}`}
                onClick={() => setCategoriaActiva(cat.id)}
              >
                <Icono className="category-btn-icon" size={24} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Cuadricula con los eventos */}
        <div className="events-grid">
          {eventosFiltrados.length > 0 ? (
            eventosFiltrados.map((evt) => (
              <article key={evt.id} className="event-card">
                <div className="event-card-img-wrapper">
                  <img src={evt.image} alt={evt.title} className="event-card-img" />
                  <span className={`event-card-badge ${evt.category}`}>{evt.category}</span>
                </div>
                
                <div className="event-card-info">
                  <div className="event-card-meta">
                    <div className="event-meta-item">
                      <Calendar className="event-meta-icon" size={14} />
                      <span>{evt.date}</span>
                    </div>
                    <div className="event-meta-item">
                      <Clock className="event-meta-icon" size={14} />
                      <span>{evt.time} PM</span>
                    </div>
                    <div className="event-meta-item">
                      <MapPin className="event-meta-icon" size={14} />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  <h3 className="event-card-title">{evt.title}</h3>
                  <p className="event-card-desc">{evt.description}</p>
                  
                  <div className="event-card-footer">
                    <span className="event-price">{evt.price}</span>
                    <button onClick={() => abrirModal(evt)} className="btn-card-more">
                      Más Información <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="calendar-no-results" style={{ gridColumn: '1 / -1' }}>
              No hay eventos en esta categoría de momento.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// COMPONENTE: VENTANA MODAL DE DETALLES
// ==========================================
// Se abre al dar click en 'Mas Informacion' de algun evento
function EventModal({ event, isOpen, onClose }) {
  // Cerrar ventana si se toca la tecla ESCAPE del teclado
  useEffect(() => {
    const cerrarConEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', cerrarConEsc);
      document.body.style.overflow = 'hidden'; // Evita scroll de fondo
    }
    return () => {
      window.removeEventListener('keydown', cerrarConEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={(e) => { if (e.target.classList.contains('modal-overlay')) onClose(); }}>
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={20} />
        </button>

        <div className="modal-banner">
          <img src={event.image} alt={event.title} className="modal-banner-img" />
          <div className="modal-banner-overlay" />
          <span className={`modal-banner-badge event-card-badge ${event.category}`}>
            {event.category.toUpperCase()}
          </span>
        </div>

        <div className="modal-body">
          <h3 className="modal-title">{event.title}</h3>

          <div className="modal-meta-grid">
            <div className="modal-meta-item">
              <Calendar className="modal-meta-icon" size={18} />
              <div>
                <p className="modal-meta-label">Fecha</p>
                <p className="modal-meta-val">{event.date}</p>
              </div>
            </div>
            <div className="modal-meta-item">
              <Clock className="modal-meta-icon" size={18} />
              <div>
                <p className="modal-meta-label">Hora</p>
                <p className="modal-meta-val">{event.time} PM</p>
              </div>
            </div>
            <div className="modal-meta-item">
              <MapPin className="modal-meta-icon" size={18} />
              <div>
                <p className="modal-meta-label">Lugar</p>
                <p className="modal-meta-val">{event.location}</p>
              </div>
            </div>
            <div className="modal-meta-item">
              <DollarSign className="modal-meta-icon" size={18} />
              <div>
                <p className="modal-meta-label">Precio</p>
                <p className="modal-meta-val">{event.price}</p>
              </div>
            </div>
            <div className="modal-meta-item">
              <Users className="modal-meta-icon" size={18} />
              <div>
                <p className="modal-meta-label">Capacidad</p>
                <p className="modal-meta-val">{event.capacity}</p>
              </div>
            </div>
          </div>

          <div className="modal-description-section">
            <h4 className="modal-desc-title">
              <Info size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              Detalles del Evento
            </h4>
            <p className="modal-desc">{event.longDescription}</p>
          </div>

          <div className="modal-action">
            <button className="btn-primary" onClick={onClose}>Cerrar Detalles</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// COMPONENTE: ARTISTAS DESTACADOS (ARTISTS)
// ==========================================
// Muestra fotos y datos de artistas famosos salvadoreños
function ArtistsSection() {
  return (
    <section id="artistas" className="artists">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Orgullo Nacional</span>
          <h2 className="section-title">Artistas Destacados</h2>
          <p className="section-subtitle">
            Homenaje a grandes figuras salvadoreñas que han marcado e inspirado nuestra cultura y trascendido fronteras.
          </p>
        </div>

        <div className="artists-grid">
          {artists.map((art) => (
            <div key={art.id} className="artist-card">
              <div className="artist-img-wrapper">
                <img src={art.image} alt={art.name} className="artist-img" />
                <div className="artist-overlay">
                  <h3 className="artist-name">{art.name}</h3>
                  <p className="artist-discipline">{art.discipline}</p>
                  <p className="artist-bio-preview">{art.bio}</p>
                </div>
              </div>
              
              <div className="artist-details-drawer">
                <div className="artist-detail-item">
                  <MapPin className="artist-detail-icon" size={16} />
                  <span><strong>Origen:</strong> {art.birthplace}</span>
                </div>
                <div className="artist-detail-item">
                  <Award className="artist-detail-icon" size={16} />
                  <span><strong>Obra Insigne:</strong> <em>{art.famousWork}</em></span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ==========================================
// COMPONENTE: GALERIA DE FOTOS (GALLERY)
// ==========================================
// Muestra fotos tipicas y abre un lightbox para verlas en grande
function GallerySection() {
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  // Cerrar lightbox si tocas la tecla ESC
  useEffect(() => {
    const cerrarConEsc = (e) => {
      if (e.key === 'Escape') setFotoSeleccionada(null);
    };
    if (fotoSeleccionada) {
      window.addEventListener('keydown', cerrarConEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', cerrarConEsc);
      document.body.style.overflow = 'unset';
    };
  }, [fotoSeleccionada]);

  return (
    <section id="galeria" className="gallery">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Galería Cultural</span>
          <h2 className="section-title">Nuestra Esencia en Imágenes</h2>
          <p className="section-subtitle">
            Un recorrido visual por los monumentos históricos, tradiciones populares, artesanías y sabores típicos de El Salvador.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item) => (
            <div key={item.id} className="gallery-item" onClick={() => setFotoSeleccionada(item)}>
              <img src={item.image} alt={item.title} className="gallery-item-img" />
              <div className="gallery-item-overlay">
                <span className="gallery-zoom-icon"><Maximize2 size={18} /></span>
                <div>
                  <p className="gallery-item-category">{item.category}</p>
                  <h4 className="gallery-item-title">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ventana flotante para ver la foto en pantalla completa */}
      {fotoSeleccionada && (
        <div className="lightbox-overlay open" onClick={(e) => { if (e.target.classList.contains('lightbox-overlay')) setFotoSeleccionada(null); }}>
          <button className="lightbox-close-btn" onClick={() => setFotoSeleccionada(null)} aria-label="Cerrar">
            <X size={24} />
          </button>
          
          <div className="lightbox-img-wrapper">
            <img src={fotoSeleccionada.image} alt={fotoSeleccionada.title} className="lightbox-img" />
          </div>

          <div className="lightbox-caption">
            <p className="lightbox-caption-cat">{fotoSeleccionada.category}</p>
            <h3 className="lightbox-caption-title">{fotoSeleccionada.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
}

// ==========================================
// COMPONENTE: NOTICIAS (NEWS)
// ==========================================
// Muestra las noticias mas recientes
function NewsSection() {
  return (
    <section id="noticias" className="news">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Noticias & Novedades</span>
          <h2 className="section-title">Actualidad Cultural</h2>
          <p className="section-subtitle">
            Entérate de los últimos acontecimientos, descubrimientos arqueológicos y remodelaciones de los espacios históricos de nuestro país.
          </p>
        </div>

        <div className="news-grid">
          {news.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-img-wrapper">
                <img src={item.image} alt={item.title} className="news-img" />
              </div>
              <div className="news-content">
                <p className="news-date">{item.date}</p>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-summary">{item.summary}</p>
                <a href={item.link} className="news-link">
                  Leer Nota Completa <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

// ==========================================
// COMPONENTE: CALENDARIO EN TABLA (CALENDAR)
// ==========================================
// Tabla que tiene un buscador arriba para buscar por palabra clave
function CalendarSection() {
  const [filtro, setFiltro] = useState('');

  // Hacemos el filtrado dinamico de la tabla
  const eventosFiltrados = calendarEvents.filter((item) => {
    const texto = filtro.toLowerCase();
    return (
      item.eventName.toLowerCase().includes(texto) ||
      item.location.toLowerCase().includes(texto) ||
      item.category.toLowerCase().includes(texto)
    );
  });

  return (
    <section id="calendario" className="calendar-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Agenda</span>
          <h2 className="section-title">Calendario de Eventos</h2>
          <p className="section-subtitle">
            Organiza tus salidas consultando la tabla general de eventos culturales. Filtra por nombre, departamento, categoría o lugar.
          </p>
        </div>

        {/* Buscador de la tabla */}
        <div className="calendar-search-bar">
          <Search className="calendar-search-icon" size={20} />
          <input 
            type="text" 
            placeholder="Buscar evento, categoría o lugar (ej. Suchitoto)..." 
            className="calendar-search-input"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </div>

        {/* Tabla como tal */}
        <div className="calendar-table-wrapper">
          <table className="calendar-table">
            <thead>
              <tr>
                <th>Evento</th>
                <th>Fecha & Hora</th>
                <th>Lugar</th>
                <th>Categoría</th>
              </tr>
            </thead>
            <tbody>
              {eventosFiltrados.length > 0 ? (
                eventosFiltrados.map((item) => (
                  <tr key={item.id}>
                    <td><span className="calendar-event-name">{item.eventName}</span></td>
                    <td><span>{item.date} a las {item.time}</span></td>
                    <td><span>{item.location}</span></td>
                    <td><span className="calendar-cat-badge">{item.category}</span></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="calendar-no-results">
                    No se encontraron eventos coincidentes con "{filtro}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}



// ==========================================
// COMPONENTE: FORMULARIO DE CONTACTO
// ==========================================
// Formulario para mandar mensajes. Valida que pongas nombre, correo bien escrito y mensaje largo
function ContactSection({ agregarToast }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const [errorNombre, setErrorNombre] = useState('');
  const [errorCorreo, setErrorCorreo] = useState('');
  const [errorMensaje, setErrorMensaje] = useState('');

  const [enviando, setEnviando] = useState(false);

  // Funcion que se activa al enviar el formulario
  const enviarForm = (e) => {
    e.preventDefault();

    let hayError = false;

    if (!nombre.trim()) {
      setErrorNombre('El nombre es obligatorio');
      hayError = true;
    } else {
      setErrorNombre('');
    }

    if (!correo.trim()) {
      setErrorCorreo('El correo es obligatorio');
      hayError = true;
    } else if (!correo.includes('@') || !correo.includes('.')) {
      setErrorCorreo('El formato del correo es inválido');
      hayError = true;
    } else {
      setErrorCorreo('');
    }

    if (!mensaje.trim()) {
      setErrorMensaje('El mensaje no puede estar vacío');
      hayError = true;
    } else if (mensaje.trim().length < 10) {
      setErrorMensaje('El mensaje debe tener por lo menos 10 letras');
      hayError = true;
    } else {
      setErrorMensaje('');
    }

    if (hayError) {
      agregarToast('Por favor, corrige los errores en el formulario', 'error');
      return;
    }

    setEnviando(true);

    // Esperamos 1.5 segundos para simular el envio a un servidor de verdad
    setTimeout(() => {
      setEnviando(false);
      agregarToast('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
      setNombre('');
      setCorreo('');
      setMensaje('');
    }, 1500);
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Contacto</span>
          <h2 className="section-title">Escríbenos</h2>
          <p className="section-subtitle">
            ¿Tienes dudas, deseas publicar un evento o eres un artista salvadoreño buscando difusión? Envíanos un mensaje.
          </p>
        </div>

        <div className="contact-grid">
          
          <div className="contact-info-panel">
            <div>
              <h3 className="contact-info-title">Canales de Atención</h3>
              <p className="contact-info-desc">
                Nuestro equipo está disponible para ayudarte a coordinar y calendarizar tus expresiones artísticas en cualquier casa de la cultura o teatro nacional.
              </p>
            </div>

            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="contact-method-icon"><MapPin size={22} /></div>
                <div>
                  <h4 className="contact-method-title">Dirección Física</h4>
                  <p className="contact-method-desc">Calle Arce, N° 1006, Centro Histórico de San Salvador, El Salvador.</p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon"><Mail size={22} /></div>
                <div>
                  <h4 className="contact-method-title">Correo Electrónico</h4>
                  <p className="contact-method-desc">info@culturavivasv.com</p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon"><Phone size={22} /></div>
                <div>
                  <h4 className="contact-method-title">Teléfono</h4>
                  <p className="contact-method-desc">+503 2240-9000 (Lunes a Viernes de 8:00 AM a 4:00 PM)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={enviarForm} className="contact-form" noValidate>
              
              <div className="form-group">
                <label className="form-label">Nombre Completo</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre..." 
                  className={`form-input ${errorNombre ? 'form-input-error' : ''}`}
                  value={nombre}
                  onChange={(e) => { setNombre(e.target.value); setErrorNombre(''); }}
                  disabled={enviando}
                />
                {errorNombre && (
                  <span className="form-error-msg">
                    <AlertCircle size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    {errorNombre}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Correo Electrónico</label>
                <input 
                  type="email" 
                  placeholder="ejemplo@correo.com..." 
                  className={`form-input ${errorCorreo ? 'form-input-error' : ''}`}
                  value={correo}
                  onChange={(e) => { setCorreo(e.target.value); setErrorCorreo(''); }}
                  disabled={enviando}
                />
                {errorCorreo && (
                  <span className="form-error-msg">
                    <AlertCircle size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    {errorCorreo}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Mensaje</label>
                <textarea 
                  placeholder="Escribe tu consulta aquí..." 
                  className={`form-textarea ${errorMensaje ? 'form-input-error' : ''}`}
                  value={mensaje}
                  onChange={(e) => { setMensaje(e.target.value); setErrorMensaje(''); }}
                  disabled={enviando}
                />
                {errorMensaje && (
                  <span className="form-error-msg">
                    <AlertCircle size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    {errorMensaje}
                  </span>
                )}
              </div>

              <button type="submit" className="btn-submit" disabled={enviando}>
                {enviando ? (
                  <>
                    <span className="spinner" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// COMPONENTE: PIE DE PAGINA (FOOTER)
// ==========================================
// Contiene un mapa de Google Maps y enlaces rapidos
function Footer() {
  const anio = new Date().getFullYear();

  const subirSeccion = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        

        <div className="footer-grid">
          
          <div className="footer-brand">
            <a href="#inicio" className="footer-logo" onClick={(e) => { e.preventDefault(); subirSeccion('inicio'); }}>
              <Compass className="footer-logo-icon" size={28} />
              <span>Cultura Viva SV</span>
            </a>
            <p className="footer-brand-desc">
              Portal digital líder en la promoción y visibilidad del patrimonio, tradiciones, arte y eventos culturales en El Salvador. Conectando al público con el alma de nuestra tierra.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-col-title">Enlaces Rápidos</h4>
            <ul className="footer-menu">
              <li className="footer-menu-item"><a href="#inicio" onClick={(e) => { e.preventDefault(); subirSeccion('inicio'); }}>Inicio</a></li>
              <li className="footer-menu-item"><a href="#nosotros" onClick={(e) => { e.preventDefault(); subirSeccion('nosotros'); }}>Sobre Nosotros</a></li>
              <li className="footer-menu-item"><a href="#eventos" onClick={(e) => { e.preventDefault(); subirSeccion('eventos'); }}>Eventos</a></li>
              <li className="footer-menu-item"><a href="#artistas" onClick={(e) => { e.preventDefault(); subirSeccion('artistas'); }}>Artistas Destacados</a></li>
              <li className="footer-menu-item"><a href="#galeria" onClick={(e) => { e.preventDefault(); subirSeccion('galeria'); }}>Galería Cultural</a></li>
              <li className="footer-menu-item"><a href="#calendario" onClick={(e) => { e.preventDefault(); subirSeccion('calendario'); }}>Calendario</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-col-title">Contacto & Soporte</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item"><MapPin className="footer-contact-icon" size={16} /><span>San Salvador, El Salvador</span></li>
              <li className="footer-contact-item"><Phone className="footer-contact-icon" size={16} /><span>+503 2240-9000</span></li>
              <li className="footer-contact-item"><Mail className="footer-contact-icon" size={16} /><span>contacto@culturavivasv.com</span></li>
              <li className="footer-contact-item"><Clock className="footer-contact-icon" size={16} /><span>Lun - Vie: 8:00 AM - 4:00 PM</span></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {anio} Cultura Viva SV. Todos los derechos reservados.</p>
          <p>Hecho con orgullo por el arte salvadoreño.</p>
        </div>

      </div>
    </footer>
  );
}

// ==========================================
// COMPONENTE: BOTON VOLVER ARRIBA (BACK TO TOP)
// ==========================================
// Sale abajo a la derecha de la pantalla al bajar mas de 300px
function BackToTop() {
  const [verBoton, setVerBoton] = useState(false);

  useEffect(() => {
    const toggleVer = () => {
      if (window.scrollY > 300) {
        setVerBoton(true);
      } else {
        setVerBoton(false);
      }
    };
    window.addEventListener('scroll', toggleVer);
    return () => window.removeEventListener('scroll', toggleVer);
  }, []);

  const irArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={irArriba} className={`back-to-top ${verBoton ? 'visible' : ''}`} aria-label="Subir">
      <ArrowUp size={20} />
    </button>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL DE LA APLICACIÓN (APP)
// ==========================================
export default function App() {
  // Estado para la lista de notificaciones flotantes (toasts)
  const [toasts, setToasts] = useState([]);

  // Estados para abrir el modal del evento seleccionado
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funcion para abrir el modal con la info del evento
  const abrirModal = (evento) => {
    setSelectedEvent(evento);
    setIsModalOpen(true);
  };

  // Funcion para cerrar el modal de evento
  const cerrarModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  // Funcion para agregar una notificacion toast a la pantalla
  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    // Quitar la notificacion a los 4 segundos sola
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Este efecto sirve para activar las animaciones de los elementos que van apareciendo
  useEffect(() => {
    const elementos = document.querySelectorAll('.reveal');
    
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        }
      });
    }, {
      threshold: 0.1
    });

    elementos.forEach((el) => observador.observe(el));

    return () => {
      elementos.forEach((el) => {
        try {
          observador.unobserve(el);
        } catch (e) {}
      });
      observador.disconnect();
    };
  }, []);

  return (
    <>
      {/* Barra superior de navegacion */}
      <Navbar />

      {/* Secciones de la pagina */}
      <main style={{ marginTop: '0px' }}>
        <Hero />
        <About />
        <EventsSection abrirModal={abrirModal} />
        <ArtistsSection />
        <GallerySection />
        <NewsSection />
        <CalendarSection />
        <ContactSection agregarToast={addToast} />
      </main>

      {/* Pie de pagina */}
      <Footer />

      {/* Boton flotante de subir */}
      <BackToTop />

      {/* Ventana modal de detalles */}
      <EventModal 
        event={selectedEvent} 
        isOpen={isModalOpen} 
        onClose={cerrarModal} 
      />

      {/* Notificaciones flotantes en pantalla */}
      <div className="toast-container" role="status" aria-live="polite">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type}`}>
            {toast.type === 'success' ? (
              <CheckCircle2 size={18} style={{ color: '#10b981' }} />
            ) : (
              <AlertCircle size={18} style={{ color: '#ef4444' }} />
            )}
            <span className="toast-message">{toast.message}</span>
            <button 
              className="toast-close-btn" 
              onClick={() => removeToast(toast.id)}
              aria-label="Cerrar notificación"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
