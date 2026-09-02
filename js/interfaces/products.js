const products = [
  {
    id: "aparador-uspallata",
    name: "Aparador Uspallata",
    image: "assets/images/aparador-uspallata.png",
    description:
      "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    details: [
      { title: "Medidas", description: "180 x 45 x 75 cm" },
      {
        title: "Materiales",
        description: "Nogal macizo FSC®, herrajes de latón",
      },
      { title: "Acabado", description: "Aceite natural ecológico" },
      { title: "Peso", description: "68 kg" },
      { title: "Capacidad", description: "6 compartimentos interiores" },
    ],
  },
  {
    id: "biblioteca-recoleta",
    name: "Biblioteca Recoleta",
    image: "assets/images/biblioteca-recoleta.png",
    description:
      "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
    details: [
      { title: "Medidas", description: "100 x 35 x 200 cm" },
      {
        title: "Materiales",
        description: "Estructura de acero, estantes de roble",
      },
      { title: "Acabado", description: "Laca mate ecológica" },
      { title: "Capacidad", description: "45 kg por estante" },
      { title: "Módulos", description: "5 estantes ajustables" },
    ],
  },
  {
    id: "butaca-mendoza",
    name: "Butaca Mendoza",
    image: "assets/images/butaca-mendoza.png",
    description:
      "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
    details: [
      { title: "Medidas", description: "80 x 75 x 85 cm" },
      { title: "Materiales", description: "Guatambú macizo, tela bouclé" },
      { title: "Acabado", description: "Cera vegetal, tapizado premium" },
      { title: "Tapizado", description: "Repelente al agua y manchas" },
      { title: "Confort", description: "Espuma alta densidad" },
    ],
  },
  {
    id: "sillon-copacabana",
    name: "Sillón Copacabana",
    image: "assets/images/sillon-copacabana.png",
    description:
      "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
    details: [
      { title: "Medidas", description: "90 x 85 x 95 cm" },
      {
        title: "Materiales",
        description: "Cuero curtido vegetal, acero pintado",
      },
      { title: "Acabado", description: "Cuero anilina premium" },
      { title: "Rotación", description: "360° silenciosa y suave" },
      { title: "Garantía", description: "10 años en estructura" },
    ],
  },
  {
    id: "mesa-de-centro-araucaria",
    name: "Mesa de Centro Araucaria",
    image: "assets/images/mesa-de-centro-araucaria.png",
    description:
      "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
    details: [
      { title: "Medidas", description: "90 x 90 x 45 cm" },
      {
        title: "Materiales",
        description: "Sobre de mármol Patagonia, patas de nogal",
      },
      {
        title: "Acabado",
        description: "Mármol pulido, aceite natural en madera",
      },
      { title: "Peso", description: "42 kg" },
      { title: "Carga máxima", description: "25 kg distribuidos" },
    ],
  },
  {
    id: "mesa-de-noche-aconcagua",
    name: "Mesa de Noche Aconcagua",
    image: "assets/images/mesa-de-noche-aconcagua.png",
    description:
      "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
    details: [
      { title: "Medidas", description: "45 x 35 x 60 cm" },
      {
        title: "Materiales",
        description: "Roble macizo FSC®, herrajes soft-close",
      },
      { title: "Acabado", description: "Barniz mate de poliuretano" },
      { title: "Almacenamiento", description: "1 cajón + repisa inferior" },
      { title: "Características", description: "Cajón con cierre suave" },
    ],
  },
  {
    id: "sofa-patagonia",
    name: "Sofá Patagonia",
    image: "assets/images/sofa-patagonia.png",
    description:
      "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
    details: [
      { title: "Medidas", description: "220 x 90 x 80 cm" },
      {
        title: "Estructura",
        description: "Madera de eucalipto certificada FSC®",
      },
      { title: "Tapizado", description: "Lino 100% natural premium" },
      { title: "Relleno", description: "Espuma HR + plumón reciclado" },
      { title: "Sostenibilidad", description: "Materiales 100% reciclables" },
    ],
  },
  {
    id: "mesa-comedor-pampa",
    name: "Mesa Comedor Pampa",
    image: "assets/images/mesa-comedor-pampa.png",
    description:
      "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
    details: [
      { title: "Medidas", description: "160-240 x 90 x 75 cm" },
      {
        title: "Materiales",
        description: "Roble macizo FSC®, mecanismo alemán",
      },
      { title: "Acabado", description: "Aceite-cera natural" },
      { title: "Capacidad", description: "6-10 comensales" },
      { title: "Extensión", description: "Sistema de mariposa central" },
    ],
  },
  {
    id: "sillas-cordoba",
    name: "Sillas Córdoba",
    image: "assets/images/sillas-cordoba.png",
    description:
      "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materials de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
    details: [
      { title: "Medidas", description: "45 x 52 x 80 cm (cada una)" },
      {
        title: "Materiales",
        description: "Contrachapado nogal, tubo de acero",
      },
      { title: "Acabado", description: "Laca mate, pintura epoxi" },
      { title: "Apilado", description: "Hasta 6 sillas" },
      { title: "Incluye", description: "Set de 4 sillas" },
    ],
  },
  {
    id: "escritorio-costa",
    name: "Escritorio Costa",
    image: "assets/images/escritorio-costa.png",
    description:
      "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
    details: [
      { title: "Medidas", description: "120 x 60 x 75 cm" },
      { title: "Materiales", description: "Bambú laminado, herrajes ocultos" },
      { title: "Acabado", description: "Laca mate resistente" },
      { title: "Almacenamiento", description: "1 cajón con organizador" },
      { title: "Cables", description: "Pasacables integrado" },
    ],
  },
  {
    id: "silla-de-trabajo-belgrano",
    name: "Silla de Trabajo Belgrano",
    image: "assets/images/silla-de-trabajo-belgrano.png",
    description:
      "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
    details: [
      { title: "Medidas", description: "60 x 60 x 90-100 cm" },
      { title: "Materiales", description: "Malla técnica, tejido reciclado" },
      { title: "Acabado", description: "Base cromada, tapizado premium" },
      { title: "Regulación", description: "Altura + inclinación respaldo" },
      { title: "Certificación", description: "Ergonomía europea EN 1335" },
    ],
  },
];

/**
 * Obtiene todos los productos
 * @returns {array[]}
 */
export function getProducts() {
  return products;
}

/**
 * Obtiene todos los productos por nombre
 * @param {string} name - nombre del producto
 * @returns {array[]}
 */
export function getProductsByName(name) {
  return products.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase()),
  );
}

/**
 * Obtiene un producto por su id
 * @param {string} id - id del producto
 * @returns {array[]}
 */
export function getProductById(id) {
  return products.filter((p) => p.id === id);
}