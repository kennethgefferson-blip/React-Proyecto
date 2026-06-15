export const categories = [
  { id: 'musica', name: 'Música', icon: 'Music' },
  { id: 'teatro', name: 'Teatro', icon: 'Drama' },
  { id: 'danza', name: 'Danza', icon: 'Footprints' },
  { id: 'arte', name: 'Arte', icon: 'Palette' },
  { id: 'gastronomia', name: 'Gastronomía', icon: 'Utensils' },
  { id: 'literatura', name: 'Literatura', icon: 'BookOpen' }
];

export const events = [
  {
    id: 1,
    title: 'Festival de Música Folclórica',
    category: 'musica',
    date: '2026-06-15',
    time: '17:00',
    location: 'Teatro Nacional de Santa Ana',
    description: 'Una noche mágica llena de melodías interpretadas con marimbas, flautas de carrizo y guitarras tradicionales. Disfruta de agrupaciones nacionales interpretando melodías emblemáticas de nuestra tierra.',
    longDescription: 'El Festival de Música Folclórica de Santa Ana reúne a los mejores exponentes de la música autóctona salvadoreña. En esta edición contaremos con agrupaciones que rescatan el uso de instrumentos prehispánicos y coloniales, ofreciendo un viaje sonoro desde las raíces ancestrales hasta la música popular de El Salvador. Un evento diseñado para toda la familia en el majestuoso Teatro de Santa Ana.',
    image: '/assets/event_musica.jpg',
    price: 'Gratis (con reservación)',
    capacity: '800 personas'
  },
  {
    id: 2,
    title: 'Exposición de Arte Contemporáneo',
    category: 'arte',
    date: '2026-06-20',
    time: '10:00',
    location: 'Museo de Arte de El Salvador (MARTE)',
    description: 'Muestra colectiva de nuevos talentos de la plástica salvadoreña que exploran la identidad, los paisajes y los retos sociales de El Salvador a través de técnicas mixtas.',
    longDescription: 'Esta exposición reúne a más de 15 artistas emergentes salvadoreños bajo la temática "Identidad en el Lienzo". Los visitantes podrán apreciar esculturas, pinturas al óleo, instalaciones interactivas y arte digital que abordan la realidad contemporánea y las tradiciones populares de nuestro país desde visiones frescas y vanguardistas.',
    image: '/assets/event_arte.jpg',
    price: '$1.50 (Estudiantes gratis)',
    capacity: 'Entrada libre bajo aforo'
  },
  {
    id: 3,
    title: 'Feria Cultural de San Salvador',
    category: 'literatura',
    date: '2026-07-04',
    time: '09:00',
    location: 'Plaza Gerardo Barrios, Centro Histórico',
    description: 'El corazón de la capital se llena de vida con lecturas de poesía, feria de libros de autores salvadoreños, talleres creativos y muestras de artesanías.',
    longDescription: 'La Feria Cultural de San Salvador es un evento anual que toma los espacios más emblemáticos del Centro Histórico. Cuenta con la participación de editoriales independientes, conversatorios con escritores destacados del país, recitales de poesía al aire libre, y talleres de pintura para niños. Además, habrá presentaciones espontáneas de estatuas vivientes y teatro callejero.',
    image: '/assets/event_feria.jpg',
    price: 'Gratis',
    capacity: 'Área pública'
  },
  {
    id: 4,
    title: 'Presentación de Danza Folclórica',
    category: 'danza',
    date: '2026-07-12',
    time: '16:00',
    location: 'Teatro Nacional de San Salvador',
    description: 'El Ballet Folclórico Nacional presenta un espectáculo lleno de color, historia y tradición, interpretando danzas icónicas como "El Carbonero" y "Los Historiantes".',
    longDescription: 'Ven a vivir el folclore en su máxima expresión con la presentación de gala del Ballet Folclórico Nacional. A través del movimiento, trajes multicolores de satén y encajes, e interpretaciones coreográficas detalladas, se narran los mitos, leyendas y oficios del pueblo salvadoreño. Disfruta de la danza del "Toro de Lidia", "El Xuc" y muchas piezas tradicionales más.',
    image: '/assets/event_danza.jpg',
    price: '$3.00 (Nacionales) / $5.00 (Extranjeros)',
    capacity: '650 personas'
  },
  {
    id: 5,
    title: 'Festival Gastronómico y Artesanal',
    category: 'gastronomia',
    date: '2026-07-19',
    time: '11:00',
    location: 'Parque Central de Suchitoto',
    description: 'Deléitate con la cocina típica salvadoreña: pupusas de maíz y arroz, atoles tradicionales, tamales, chicha y una amplia exhibición de artesanías en añil.',
    longDescription: 'Suchitoto se viste de fiesta culinaria. Reuniendo a cocineros tradicionales de todo el departamento de Cuscatlán, el festival ofrece una degustación culinaria inigualable de nuestros platillos ancestrales y variaciones modernas de la pupusa. Paralelamente, artesanos locales exhibirán técnicas tradicionales de teñido en añil, alfarería y madera pintada al estilo de La Palma.',
    image: '/assets/event_gastronomia.jpg',
    price: 'Entrada libre',
    capacity: 'Área abierta'
  },
  {
    id: 6,
    title: 'Obra de Teatro Nacional',
    category: 'teatro',
    date: '2026-07-25',
    time: '18:30',
    location: 'Teatro de Francisco Gavidia, San Miguel',
    description: 'Una puesta en escena espectacular que adapta leyendas salvadoreñas en un drama moderno lleno de misticismo, efectos de luz y sonido.',
    longDescription: 'La Compañía Nacional de Teatro presenta su nueva producción "Voces del Volcán", una obra dramática que entrelaza leyendas tradicionales como la Siguanaba y el Cipitío con problemáticas ecológicas actuales. Un montaje vanguardista con música en vivo y una escenografía impresionante que resalta la belleza arquitectónica del Teatro de San Miguel.',
    image: '/assets/event_teatro.jpg',
    price: '$2.00 estudiantes / $3.00 público general',
    capacity: '450 personas'
  }
];

export const artists = [
  {
    id: 1,
    name: 'Fernando Llort',
    discipline: 'Artista Plástico y Artesano',
    bio: 'Pionero que transformó el pueblo de La Palma en un taller artesanal dinámico. Creó el estilo artístico identitario salvadoreño caracterizado por dibujos bidimensionales ingenuos y coloridos en madera, cerámica y semillas de copinol.',
    image: '/assets/artist_llort.jpg',
    birthplace: 'San Salvador (1949 - 2018)',
    famousWork: 'Mural de la Catedral Metropolitana'
  },
  {
    id: 2,
    name: 'Morena Celarié',
    discipline: 'Bailarina y Coreógrafa de Danza Folclórica',
    bio: 'Legendaria bailarina salvadoreña que dedicó su vida a investigar, coreografiar y difundir las danzas autóctonas del país. Fundó el grupo pionero de danza folclórica nacional y dejó un legado de rescate identitario invaluable.',
    image: '/assets/artist_celarie.jpg',
    birthplace: 'San Salvador (1922 - 1972)',
    famousWork: 'Coreografías del Xuc y Danza del Toro'
  },
  {
    id: 3,
    name: 'Claudia Lars',
    discipline: 'Poeta y Escritora',
    bio: 'Una de las voces más sobresalientes de la lírica femenina de América Latina en el siglo XX. Su poesía destaca por la dulzura de su lenguaje, su impecable métrica y su profunda sensibilidad al paisaje y folklore cuscatleco.',
    image: '/assets/artist_lars.jpg',
    birthplace: 'Armenia, Sonsonate (1899 - 1974)',
    famousWork: 'Tierra de Infancia'
  }
];

export const gallery = [
  {
    id: 1,
    title: 'Catedral Metropolitana y Centro Histórico',
    category: 'Monumentos',
    image: '/assets/gallery_catedral.jpg'
  },

  {
    id: 3,
    title: 'Danzantes del Ballet Folclórico Nacional',
    category: 'Tradición',
    image: '/assets/gallery_danza.png'
  },
  {
    id: 4,
    title: 'Preparación de Pupusas tradicionales en comal de barro',
    category: 'Gastronomía',
    image: '/assets/gallery_pupusas.jpg'
  },
  {
    id: 5,
    title: 'Artesanías coloridas de madera en La Palma, Chalatenango',
    category: 'Artesanías',
    image: '/assets/gallery_lapalma.png'
  },
  {
    id: 6,
    title: 'El Majestuoso Teatro Nacional de San Salvador',
    category: 'Monumentos',
    image: '/assets/gallery_teatro.jpg'
  }
];

export const news = [
  {
    id: 1,
    title: 'El Teatro Nacional de San Salvador celebra su centenario',
    date: '1 de Junio, 2026',
    summary: 'La joya arquitectónica del Centro Histórico festeja con una cartelera especial gratuita que incluye ópera, ballet folclórico y obras teatrales contemporáneas.',
    image: '/assets/news_teatro.jpg',
    link: '#'
  },
  {
    id: 2,
    title: 'Suchitoto es declarado Patrimonio Histórico de Interés Nacional',
    date: '18 de Mayo, 2026',
    summary: 'La asamblea aprueba medidas de protección para conservar el empedrado de sus calles y la arquitectura colonial de la cuna del arte salvadoreño.',
    image: '/assets/news_suchitoto.jpg',
    link: '#'
  },
  {
    id: 3,
    title: 'Inauguran el Museo Comunitario del Añil en Cihuatán',
    date: '5 de Mayo, 2026',
    summary: 'Un espacio dedicado a rescatar la historia del teñido natural azul maya, su exportación en la época colonial y su renacer de la mano de artesanos locales.',
    image: '/assets/news_anil.jpg',
    link: '#'
  }
];


export const calendarEvents = [
  { id: 1, eventName: 'Festival de Música Folclórica', date: '15 de Junio, 2026', time: '05:00 PM', location: 'Teatro Nacional de Santa Ana', category: 'Música' },
  { id: 2, eventName: 'Muestra Internacional de Cine Centroamericano', date: '18 de Junio, 2026', time: '07:00 PM', location: 'Teatro Nacional de San Salvador', category: 'Cine' },
  { id: 3, eventName: 'Exposición de Arte Contemporáneo "Identidad"', date: '20 de Junio, 2026', time: '10:00 AM', location: 'Museo de Arte MARTE', category: 'Arte' },
  { id: 4, eventName: 'Taller de Teñido Artesanal en Añil', date: '27 de Junio, 2026', time: '02:00 PM', location: 'Casa de la Cultura, Suchitoto', category: 'Taller' },
  { id: 5, eventName: 'Feria Cultural de San Salvador', date: '04 de Julio, 2026', time: '09:00 AM', location: 'Plaza Gerardo Barrios, Centro Histórico', category: 'Feria' },
  { id: 6, eventName: 'Presentación de Danza Folclórica de Gala', date: '12 de Julio, 2026', time: '04:00 PM', location: 'Teatro Nacional de San Salvador', category: 'Danza' },
  { id: 7, eventName: 'Festival Gastronómico y de Tradiciones', date: '19 de Julio, 2026', time: '11:00 AM', location: 'Parque Central de Suchitoto', category: 'Gastronomía' },
  { id: 8, eventName: 'Obra de Teatro "Voces del Volcán"', date: '25 de Julio, 2026', time: '06:30 PM', location: 'Teatro Francisco Gavidia, San Miguel', category: 'Teatro' }
];

export const statistics = [
  { id: 1, count: 58, label: 'Eventos Publicados', prefix: '' },
  { id: 2, count: 24, label: 'Artistas Destacados', prefix: '' },
  { id: 3, count: 14, label: 'Departamentos del País', prefix: '' },
  { id: 4, count: 12, label: 'Asistentes Registrados', suffix: 'K+' }
];
