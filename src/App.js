import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import TechSection from './components/TechSection';

// Aquí editas tus 6 secciones: cambia las rutas de las dos imágenes principales (imageSrc1 y imageSrc2), el texto principal, y en moreInfo añade texto extra y una imagen opcional para el contenido expandido
const sectionData = [
  {
    imageSrc1: 'https://www.profesionalreview.com/wp-content/uploads/2022/06/Tachyum-anuncia-una-CPU-de-128-nucleos-con-57-GHz-y-950-W-TDP_2.jpg', // Primera imagen principal - cambia por tu URL o path
    imageSrc2: 'https://www.yarquitectura.com/wp-content/uploads/2023/06/que-es-arquitectura-de-computadoras-1024x497.jpg', // Segunda imagen principal - pon tu segunda foto aquí
    text: 'ARQUITECTURAS DE COMPUTO', // Texto principal visible siempre
    moreInfo: {
      text: `
La Arquitectura de Cómputo se organiza en modelos estructurales y componentes clave. Los principales Modelos de Arquitectura incluyen las Clásicas, dominadas por la Arquitectura de Von Neumann, que utiliza un único bus compartido para datos e instrucciones, lo que a menudo genera un "cuello de botella". Para superar esta limitación, se desarrollaron las arquitecturas Segmentadas (Pipelining), que dividen la ejecución de instrucciones en etapas concurrentes, y el Multiprocesamiento, que emplea múltiples CPUs para ejecutar tareas en estricto paralelo.
El Análisis de Componentes se centra en el hardware fundamental, comenzando por la Unidad Central de Procesamiento (CPU). Esta unidad alberga la Unidad Aritmética Lógica (ALU), encargada de las operaciones aritméticas y lógicas, y los Registros, que son memorias internas de alta velocidad para almacenar datos temporales. La Memoria se divide en la Principal (RAM), que es la memoria de trabajo volátil del sistema, y la Memoria Cache, una pequeña y rápida memoria intermedia (organizada en niveles L1, L2, L3) que reduce el tiempo de acceso a los datos más usados por la CPU.
Finalmente, el Sistema E/S (Entrada/Salida) gestiona la comunicación con periféricos. Las técnicas para esta gestión incluyen la E/S Programada, donde la CPU se ocupa de todo el proceso; la E/S mediante Interrupciones, donde el periférico avisa a la CPU cuando está listo; y el Acceso Directo a Memoria (DMA), que permite la transferencia de grandes bloques de datos entre memoria y periférico sin la intervención constante de la CPU. Sistemas más avanzados utilizan Canales y Procesadores E/S dedicados. Toda esta comunicación se realiza a través de Buses (conjuntos de líneas) que se clasifican en Bus de Datos, Bus de Direcciones y Bus de Control, y se organizan en una Jerarquía para optimizar el rendimiento y la velocidad de las transferencias.
`, 
// Texto expandido - añade lo que quieras
      imageExtra: 'https://proyectotictac.com/wp-content/uploads/2025/04/arquitectura-del-computador-personal-elementos-internos-componentes-y-externos-perifericos.png' // Imagen opcional para el expandido - pon tu tercera foto si quieres
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