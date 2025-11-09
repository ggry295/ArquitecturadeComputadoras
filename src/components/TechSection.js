import React from 'react';
import { motion } from 'framer-motion';

const TechSection = ({ imageSrc1, imageSrc2, text, moreInfo, index, isExpanded, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 mb-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
    >
      {/* Sección principal */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ scale: 0.8, rotate: -5 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="relative">
            <img
              src={imageSrc1}
              alt="Imagen principal"
              className="w-full h-48 object-cover rounded-2xl shadow-lg border border-cyan-500/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
          <div className="relative">
            <img
              src={imageSrc2}
              alt="Imagen secundaria"
              className="w-full h-48 object-cover rounded-2xl shadow-lg border border-blue-500/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          className="text-white space-y-4"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sección {index + 1}
          </h3>
          <p className="text-gray-200 leading-relaxed text-lg">
            {text}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggle}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 mt-4 flex items-center gap-2"
          >
            {isExpanded ? 'Cerrar' : 'Explorar Más'}
          </motion.button>
        </motion.div>
      </div>

      {/* Contenido expandido */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="overflow-hidden mt-6 pt-6 border-t border-white/10"
      >
        {isExpanded && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-cyan-300">
                Más Detalles
              </h4>
              <p className="text-gray-200 leading-relaxed">
                {moreInfo.text || 'Aquí va tu información extra detallada, edita esto en el código.'}
              </p>
            </div>
            {moreInfo.imageExtra && (
              <div className="relative">
                <img
                  src={moreInfo.imageExtra}
                  alt="Imagen extra"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg border border-green-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </div>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TechSection;