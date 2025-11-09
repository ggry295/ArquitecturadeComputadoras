import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import TechSection from './components/TechSection';

// Aquí editas tus 6 secciones: cambia las rutas de las dos imágenes principales (imageSrc1 y imageSrc2), el texto principal, y en moreInfo añade texto extra y una imagen opcional para el contenido expandido
const sectionData = [
  {
    imageSrc1: 'https://www.profesionalreview.com/wp-content/uploads/2022/06/Tachyum-anuncia-una-CPU-de-128-nucleos-con-57-GHz-y-950-W-TDP_2.jpg', // Primera imagen principal - cambia por tu URL o path
    imageSrc2: 'https://via.placeholder.com/400x300?text=Imagen+Secundaria+1', // Segunda imagen principal - pon tu segunda foto aquí
    text: 'Este es el primer bloque, pon aquí tu descripción genial sobre tecnología y futuro.', // Texto principal visible siempre
    moreInfo: {
      text: 'Aquí va la info extra que quieres mostrar al expandir: describe más detalles, características o lo que sea. Edita este texto libremente.', // Texto expandido - añade lo que quieras
      imageExtra: 'https://via.placeholder.com/500x400?text=Imagen+Extra+1' // Imagen opcional para el expandido - pon tu tercera foto si quieres
    }
  },
  {
    imageSrc1: 'https://via.placeholder.com/400x300?text=Imagen+Principal+2', // Tu primera imagen del segundo bloque
    imageSrc2: 'https://via.placeholder.com/400x300?text=Imagen+Secundaria+2', // Segunda imagen
    text: 'Segundo bloque listo para tu contenido innovador y dinámico.', // Texto principal
    moreInfo: {
      text: 'Expande para ver más: añade tus detalles técnicos, testimonios o lo que imagines aquí.', // Texto extra
      imageExtra: 'https://via.placeholder.com/500x400?text=Imagen+Extra+2' // Imagen extra opcional
    }
  },
  {
    imageSrc1: 'https://via.placeholder.com/400x300?text=Imagen+Principal+3', // Tercera sección imagen 1
    imageSrc2: 'https://via.placeholder.com/400x300?text=Imagen+Secundaria+3', // Imagen 2
    text: 'Tercera sección: describe lo que quieras, como un pro.', // Texto visible
    moreInfo: {
      text: 'Más info en detalle: usa este espacio para profundizar en el tema de esta sección.', // Edita el expandido
      imageExtra: 'https://via.placeholder.com/500x400?text=Imagen+Extra+3'
    }
  },
  {
    imageSrc1: 'https://via.placeholder.com/400x300?text=Imagen+Principal+4', // Cuarta imagen 1
    imageSrc2: 'https://via.placeholder.com/400x300?text=Imagen+Secundaria+4', // Imagen 2
    text: 'Cuarto bloque con espacio para más ideas tech.', // Texto principal
    moreInfo: {
      text: 'Contenido adicional: pon aquí listas, párrafos o lo que necesites para expandir.', // Texto extra
      imageExtra: 'https://via.placeholder.com/500x400?text=Imagen+Extra+4'
    }
  },
  {
    imageSrc1: 'https://via.placeholder.com/400x300?text=Imagen+Principal+5', // Quinta imagen 1
    imageSrc2: 'https://via.placeholder.com/400x300?text=Imagen+Secundaria+5', // Imagen 2
    text: 'Quinta parte: hazla tuya con tu mensaje.', // Texto visible
    moreInfo: {
      text: 'Detalles extras: edita para incluir specs, beneficios o historias.', // Expandido
      imageExtra: 'https://via.placeholder.com/500x400?text=Imagen+Extra+5'
    }
  },
  {
    imageSrc1: 'https://via.placeholder.com/400x300?text=Imagen+Principal+6', // Sexta imagen 1
    imageSrc2: 'https://via.placeholder.com/400x300?text=Imagen+Secundaria+6', // Imagen 2
    text: 'Último bloque: cierra con broche de oro tu historia.', // Texto principal
    moreInfo: {
      text: 'Cierre épico: añade tu conclusión o call to action en este texto expandido.', // Texto extra
      imageExtra: 'https://via.placeholder.com/500x400?text=Imagen+Extra+6'
    }
  }
];

const App = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Header futurista */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black/20 backdrop-blur-md border-b border-white/10 py-8"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <Rocket className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Arquitectura de Computadoras ciclo 2025 Febrero-agosto
            </h1>
          </motion.div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Curso Arquitectura de Computadoras - Explora conceptos clave y tecnologías emergentes en el diseño y funcionamiento de sistemas computacionales.
          </p>
        </div>
      </motion.div>

      {/* Las 6 secciones */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {sectionData.map((section, index) => (
          <TechSection
            key={index}
            imageSrc1={section.imageSrc1}
            imageSrc2={section.imageSrc2}
            text={section.text}
            moreInfo={section.moreInfo}
            index={index}
            isExpanded={expandedSections[index]}
            onToggle={() => toggleSection(index)}
          />
        ))}
      </div>

      {/* Footer sutil */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-black/30 backdrop-blur-md border-t border-white/10 py-6 text-center text-gray-400"
      >
        <p>&copy; Pagina web Arquitectura de Computadoras 2025</p>
      </motion.footer>
    </div>
  );
};

export default App;