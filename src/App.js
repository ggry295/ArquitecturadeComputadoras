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
    imageSrc1: 'https://www.profesionalreview.com/wp-content/uploads/2020/04/Procesador-paralelo.jpg', // Cuarta imagen 1
    imageSrc2: 'https://ordenadores-y-portatiles.com/wp-content/uploads/2020/05/procesamiento-paralelo2.gif', // Imagen 2
    text: 'Procesamiento Paralelo', // Texto principal
    moreInfo: {
      text: `El Procesamiento Paralelo (4.0) se enfoca en la ejecución simultánea de múltiples tareas o instrucciones para aumentar la velocidad y eficiencia de la computación. Los Aspectos básicos de la computación paralela (4.1) incluyen conceptos como la concurrencia, la sincronización y la comunicación entre los diferentes procesadores.
El tema se desarrolla al estudiar los Tipos de computación paralela (4.2). Esto abarca su Clasificación, a menudo basada en la taxonomía de Flynn (SIMD, MIMD, etc.), y la distinción entre Computadoras Secuenciales (el modelo tradicional de un solo procesador) y las estructuras paralelas. También se analiza la Organización de direcciones de memoria para asegurar que los múltiples procesadores puedan acceder a los datos de manera correcta.
Los sistemas paralelos se dividen en dos grandes categorías, dependiendo de cómo manejan la memoria:
Sistemas de Memoria Compartida (4.3)
En estos sistemas, todos los procesadores comparten un espacio de direcciones de memoria único.
Multiprocesadores: Son el tipo más común, donde varias CPUs acceden a la misma memoria.
Redes de interconexión dinámica: Utilizan una topología de conmutación que puede cambiar activamente la ruta de comunicación entre procesadores y memoria, permitiendo flexibilidad.
Medio compartido: Se refiere a un bus común que todos los procesadores usan para comunicarse y acceder a la memoria (similar a una arquitectura de Von Neumann extendida al paralelismo).
Conmutadas: Se refiere a sistemas que utilizan switches o conmutadores para establecer las conexiones de comunicación, permitiendo múltiples rutas concurrentes sin depender de un único bus.
Sistemas de Memoria Distribuida (4.4)
En estos sistemas, cada procesador tiene su propia memoria local y los procesadores se comunican mediante el envío de mensajes a través de una red.
Multicomputadoras: Son sistemas compuestos por múltiples computadoras interconectadas, donde cada una funciona independientemente.
Redes de interconexión estáticas: Utilizan una topología fija (como mallas, anillos o hipercubos) para conectar los procesadores. Las rutas de comunicación no cambian dinámicamente.
Finalmente, el estudio de Casos de estudio (4.5) permite aplicar estos conceptos a ejemplos reales y analizar cómo se implementan los principios de procesamiento paralelo en arquitecturas comerciales o de supercomputación.`, // Texto extra
      imageExtra: 'https://adictec.com/wp-content/uploads/2024/04/Funcionamiento-procesamiento-paralelo.png'
    }
  },
  {
    imageSrc1: 'https://img.pccomponentes.com/pcblog/3893/tipos-de-memorias-ram-y-cual-elegir-5.jpg', // Quinta imagen 1
    imageSrc2: 'https://tse3.mm.bing.net/th/id/OIP.BLlCbF8tFyIAGiOuXC0g6AHaEK?pid=Api&P=0&h=180', // Imagen 2
    text: 'Unidad 5: Procesadores y Tipos de Memoria', // Texto visible
    moreInfo: {
      text: `Procesadores (5.1)Los procesadores se clasifican en gamas según su diseño, costo y rendimiento.Los Procesadores de Gama Baja 1 están diseñados para tareas cotidianas y básicas, priorizando la eficiencia energética y el bajo costo sobre el rendimiento bruto2. Se usan comúnmente en computadoras de oficina, portátiles estudiantiles y equipos domésticos para navegación web o reproducción multimedia3. Se caracterizan por tener menos núcleos e hilos, frecuencias de reloj modestas y caché más pequeña, lo que restringe su desempeño en tareas intensivas como edición de video o modelado 3D4. Ejemplos incluyen el Intel Celeron G5905 y el AMD Athlon 3000G. El Intel Celeron G5905, ideal para computación básica, tiene 2 núcleos y 2 hilos con una velocidad base de $3.5 \text{GHz}$5555. El Intel Pentium Gold G5400 es una opción más potente con 2 núcleos y 4 hilos (Hyper-Threading) a $3.70 \text{GHz}$6666. El Intel Core i3-12100 (4 núcleos, 8 hilos) ofrece un mejor equilibrio y es capaz de ejecutar juegos ligeros7777. El AMD Athlon 3000G (2 núcleos, 4 hilos) destaca en la multitarea efectiva dentro de su gama8888.Los Procesadores de Gama Media 9 buscan el equilibrio entre rendimiento, precio y eficiencia10. Están dirigidos a usuarios que necesitan más potencia que los modelos básicos para tareas de productividad, gaming en $1080 \text{p}$ y edición ligera11111111. Estos CPUs suelen tener entre 6 y 8 núcleos y de 12 a 16 hilos, con frecuencias que pueden aumentar mediante tecnologías como Turbo Boost12. Ofrecen la mejor relación potencia-precio del mercado13. Ejemplos notables incluyen el Intel Core i5-13400 (
        arquitectura híbrida con 10 núcleos/16 hilos, turbo de hasta $4.6 \text{GHz}$) 14141414y el AMD Ryzen 5 5600 (6 núcleos/12 hilos, $3.5 \text
          {GHz}$ base)15151515.Los Procesadores de Gama Alta 16 son el nivel más avanzado, diseñados para ofrecer el máximo rendimiento uti
          lizando las tecnologías más recientes17171717. Tienen la mayor cantidad de núcleos e hilos, frecuencias elevadas y gran memoria caché18
          . Son optimizados para tareas muy exigentes como videojuegos de última generación, edición de video en alta resolución, modelado 3D e 
          inteligencia artificial19. Ejemplos incluyen el Intel Core i9-14900K (24 núcleos/32 hilos, hasta $6.0 \text{GHz}$ turbo) 20202020y el A
          MD Ryzen 9-7950X3D (16 núcleos/32 hilos, hasta $5.7 \text{GHz}$ turbo) 21212121, que utiliza la tecnología 3D V-Cache para un rendimiento superior en gaming22222222.Tipos de Memorias (5.2)Las memorias del sistema se distinguen por su volatilidad, velocidad y función:Memoria RAM (Random Access Memory) 23: Es la memoria principal donde se almacenan temporalmente los datos y programas en uso24. Es extremadamente rápida, pero volátil; todos los datos se pierden al apagar o reiniciar el equipo25. El acceso a un dato específico se hace mediante una dirección única dentro de su matriz de celdas26. La cantidad de RAM afecta directamente el rendimiento, determinando cuántas aplicaciones pueden ejecutarse simultáneamente27.Memoria ROM (Read-Only Memory) 28: Es un tipo de almacenamiento que solo permite la lectura de datos y no su modificación regular29. Su contenido está grabado de forma permanente o semipermanente, lo que la hace no volátil; la información permanece intacta incluso sin energía30. Su función es esencial en todos los dispositivos electrónicos para su correcto arranque31313131.Memoria Caché 32: Es una memoria de acceso rápido integrada dentro o cerca del procesador33. Actúa como un intermediario entre la CPU y la RAM, almacenando temporalmente los datos e instrucciones más utilizados para reducir el tiempo de espera del procesador y mejorar el rendimiento del sistema34343434. La caché se organiza en niveles jerárquicos de tamaño, velocidad y proximidad al núcleo35:Caché L1 (Nivel 1): La más rápida y pequeña, integrada en cada núcleo y dividida para instrucciones y datos36.Caché L2 (Nivel 2): Más grande que la L1, puede ser dedicada o compartida y almacena datos que no caben en la L137373737.Caché L3 (Nivel 3): La más grande y lenta de las tres, normalmente compartida entre todos los núcleos para mejorar la comunicación y reducir accesos a la RAM38.Memoria Virtual 39: Es una técnica 
          creada por el sistema operativo para ampliar la capacidad de la RAM física40. Utiliza una parte del disco duro (archivo de paginación) como si fuera memoria RAM adicional41414141. Esto permite ejecutar más aplicaciones o manejar programas grandes cuando la memoria física es limitada, mejorando la estabilidad del sistema, aunque introduce una ligera disminución del rendimiento debido a la lentitud del disco en comparación con la RAM42424242.
      `, // Expandido
      imageExtra: 'https://mike.miracomosehace.com/uploads/images/content/image_1588941059.jpg'
    }
  },
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