import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import TechSection from './components/TechSection';

// Aquí editas tus 6 secciones: cambia las rutas de las dos imágenes principales (imageSrc1 y imageSrc2), el texto principal, y en moreInfo añade texto extra y una imagen opcional para el contenido expandido
const sectionData = [
  {
    imageSrc1: 'https://www.profesionalreview.com/wp-content/uploads/2022/06/Tachyum-anuncia-una-CPU-de-128-nucleos-con-57-GHz-y-950-W-TDP_2.jpg', // Primera imagen principal - cambia por tu URL o path
    imageSrc2: 'https://www.yarquitectura.com/wp-content/uploads/2023/06/que-es-arquitectura-de-computadoras-1024x497.jpg', // Segunda imagen principal - pon tu segunda foto aquí
    text: 'Arquitectura de Computadoras', // Texto principal visible siempre
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
    imageSrc1: 'https://1.bp.blogspot.com/-492R4ho8Lkc/VwMFSQWQwNI/AAAAAAAAAAo/yXtRESGTNjsrb2AwACw4wRJOtZ-t-vCRg/w1200-h630-p-k-no-nu/unidad-central-de-proceso.jpg', // Tu primera imagen del segundo bloque
    imageSrc2: 'https://thumbnails.genially.com/5f64c3777076fa0f334e8e70/screenshots/e7b0cecb-c5a0-4faf-8cc1-c01f23f07502.jpg', // Segunda imagen
    text: 'Estructuras y funcionamiento del CPU', // Texto principal
    moreInfo: {
      text: `Organización Interna y Funcionamiento de la CPU
El estudio de la Arquitectura del Procesador comienza con la Organización del Procesador (2.1), que describe la disposición interna de sus unidades funcionales, como la Unidad Aritmética Lógica (ALU), la Unidad de Control y el conjunto de registros.
Esta organización depende directamente de la Estructura de Registros (2.2). Los registros son la memoria más rápida dentro de la CPU y se clasifican en tres tipos principales: Registros visibles para el usuario (2.2.1), que pueden ser manipulados por el programador (como los acumuladores y registros de propósito general); Registros de control (2.2.2), utilizados por la Unidad de Control para gobernar el funcionamiento del procesador y del sistema (como el Contador de Programa o el Registro de Instrucción); y Registros de estados (2.2.3), que contienen información sobre el resultado de la última operación realizada por la ALU, como flags de desbordamiento, cero o signo.
El funcionamiento básico de la CPU se define por el Ciclo de la Instrucción (2.3), cuyo modelo fundamental es el Ciclo Fetch - Decode - Execute (FDE) (2.3.1). En este ciclo, la CPU primero Fetch (busca) la instrucción de la memoria, luego la Decode (decodifica) para determinar qué operación realizar, y finalmente la Execute (ejecuta). La eficiencia de este ciclo se mejora drásticamente con la Segmentación (Pipelining) (2.3.2), una técnica que divide el ciclo FDE en etapas superpuestas para procesar múltiples instrucciones simultáneamente. El estudio de las Características y funciones (2.3.3) del ciclo de instrucción abarca la temporización, el control de las unidades y el manejo de interrupciones.
Un aspecto crucial en la ejecución de instrucciones son los Modos de Direccionamiento (2.4), que definen cómo la CPU interpreta la parte de dirección de una instrucción para localizar el dato (operando). El modo de direccionamiento particular depende del procesador (2.4.1). Finalmente, el Estudio de la CPU (2.5) profundiza en todos estos elementos, analizando en detalle el diseño y el desempeño del núcleo del procesador.`, // Texto extra
      imageExtra: 'https://concepto.de/wp-content/uploads/2014/08/CPU-e1551228076500.jpg' // Imagen extra opcional
    }
  },
  {
    imageSrc1: 'https://tse2.mm.bing.net/th/id/OIP.NoqOeqAQpkEQQ6nbWgl0NgHaEK?pid=Api&P=0&h=180', // Tercera sección imagen 1
    imageSrc2: 'https://tse1.mm.bing.net/th/id/OIP.pX76-Xzq1Sce9bMCrx8iKQHaD4?pid=Api&P=0&h=180', // Imagen 2
    text: 'Ensamble y Componentes del Equipo', // Texto visible
    moreInfo: {
      text: `La Selección de Componentes para el Ensamble de Equipo (3.0) requiere comprender las funciones de varios subsistemas clave. El Chip Set (3.1.1) es un conjunto de circuitos integrados en la placa madre que actúa como el "centro de control", gestionando el flujo de datos entre la CPU (3.1.2), la memoria y los periféricos. Su diseño incluye el Controlador de bus (3.1.2), que regula las transferencias de datos en los buses del sistema.
La gestión de Entrada/Salida (E/S) (3.1.3) se complementa con las Interrupciones (3.1.4), que son señales asíncronas que permiten a los periféricos solicitar la atención de la CPU. El Controlador de Acceso Directo a Memoria (DMA) (3.1.5) es esencial para transferir grandes bloques de datos entre los periféricos y la memoria principal sin la intervención constante de la CPU. Los Circuitos de temporización (3.1.6), incluyendo el reloj del sistema, son cruciales para sincronizar todas las operaciones de la computadora. Finalmente, los Controladores de video (3.1.7) (tarjetas gráficas o chips integrados) gestionan la salida de gráficos hacia el monitor.
Otros componentes fundamentales para la configuración incluyen el Almacenamiento (3.2), que abarca dispositivos como discos duros (HDD) o unidades de estado sólido (SSD) donde se guardan permanentemente los datos, y las Fuentes de alimentación (3.3), responsables de convertir la corriente alterna (AC) de la red eléctrica en la corriente continua (DC) requerida por los componentes internos del equipo.
Finalmente, la elección y el diseño del equipo se adaptan a diversos Ambientes de Servicio (3.4). Esto incluye entornos de Negocios, que requieren fiabilidad y seguridad; la Industria, donde los equipos pueden necesitar ser robustos y capaces de controlar procesos; y el Comercio electrónico, que demanda alta disponibilidad y capacidad de procesamiento de transacciones en línea.`, // Edita el expandido
      imageExtra: 'https://tse1.mm.bing.net/th/id/OIP.WcHfIhNqBeJyBxmVwd9gygHaE8?pid=Api&P=0&h=180'
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