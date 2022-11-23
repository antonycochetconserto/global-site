import { motion } from 'framer-motion';

export default function Header() {
  return (
    <div className="container-lg px-6 bg-red-400">
      <div className="space-x-6 flex flex-row">
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: -1832 }}
          transition={{ repeat: Infinity, repeatDelay: 0, duration: 30 }}
          className="space-y-6 w-2/12 opacity-10"
        >
          <div className="bg-blue-300 h-96 rounded-2xl"></div>
          <div className="bg-green-300 h-96 rounded-2xl"></div>
          <div className="bg-yellow-300 h-96 rounded-2xl"></div>
          <div className="bg-red-300 h-96 rounded-2xl"></div>
          <div className="bg-blue-300 h-96 rounded-2xl"></div>
          <div className="bg-green-300 h-96 rounded-2xl"></div>
          <div className="bg-yellow-300 h-96 rounded-2xl"></div>
          <div className="bg-red-300 h-96 rounded-2xl"></div>
        </motion.div>

        <motion.div
          initial={{ y: -1832 }}
          animate={{ y: -200 }}
          transition={{ repeat: Infinity, repeatDelay: 0, duration: 29 }}
          className="space-y-6 w-2/12 opacity-10"
        >
          <div className="bg-blue-300 h-96 rounded-2xl"></div>
          <div className="bg-green-300 h-96 rounded-2xl"></div>
          <div className="bg-yellow-300 h-96 rounded-2xl"></div>
          <div className="bg-red-300 h-96 rounded-2xl"></div>
          <div className="bg-blue-300 h-96 rounded-2xl"></div>
          <div className="bg-green-300 h-96 rounded-2xl"></div>
          <div className="bg-yellow-300 h-96 rounded-2xl"></div>
          <div className="bg-red-300 h-96 rounded-2xl"></div>
        </motion.div>
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: -1832 }}
          transition={{ repeat: Infinity, repeatDelay: 0, duration: 35 }}
          className="space-y-6 w-2/12 opacity-10"
        >
          <div className="bg-blue-300 h-96 rounded-2xl"></div>
          <div className="bg-green-300 h-96 rounded-2xl"></div>
          <div className="bg-yellow-300 h-96 rounded-2xl"></div>
          <div className="bg-red-300 h-96 rounded-2xl"></div>
          <div className="bg-blue-300 h-96 rounded-2xl"></div>
          <div className="bg-green-300 h-96 rounded-2xl"></div>
          <div className="bg-yellow-300 h-96 rounded-2xl"></div>
          <div className="bg-red-300 h-96 rounded-2xl"></div>
        </motion.div>

        <motion.div
          initial={{ y: -1832 }}
          animate={{ y: -200 }}
          transition={{ repeat: Infinity, repeatDelay: 0, duration: 27 }}
          className="space-y-6 w-2/12 opacity-10"
        >
          <div className="bg-blue-300 h-96 rounded-2xl"></div>
          <div className="bg-green-300 h-96 rounded-2xl"></div>
          <div className="bg-yellow-300 h-96 rounded-2xl"></div>
          <div className="bg-red-300 h-96 rounded-2xl"></div>
          <div className="bg-blue-300 h-96 rounded-2xl"></div>
          <div className="bg-green-300 h-96 rounded-2xl"></div>
          <div className="bg-yellow-300 h-96 rounded-2xl"></div>
          <div className="bg-red-300 h-96 rounded-2xl"></div>
        </motion.div>
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: -1832 }}
          transition={{ repeat: Infinity, repeatDelay: 0, duration: 34 }}
          className="space-y-6 w-2/12 opacity-10"
        >
          <div className="bg-blue-300 h-96 rounded-2xl"></div>
          <div className="bg-green-300 h-96 rounded-2xl"></div>
          <div className="bg-yellow-300 h-96 rounded-2xl"></div>
          <div className="bg-red-300 h-96 rounded-2xl"></div>
          <div className="bg-blue-300 h-96 rounded-2xl"></div>
          <div className="bg-green-300 h-96 rounded-2xl"></div>
          <div className="bg-yellow-300 h-96 rounded-2xl"></div>
          <div className="bg-red-300 h-96 rounded-2xl"></div>
        </motion.div>

        <motion.div
          initial={{ y: -1832 }}
          animate={{ y: -200 }}
          transition={{ repeat: Infinity, repeatDelay: 0, duration: 25 }}
          className="space-y-6 w-2/12 opacity-10"
        >
          <div className="bg-blue-300 h-96 rounded-2xl"></div>
          <div className="bg-green-300 h-96 rounded-2xl"></div>
          <div className="bg-yellow-300 h-96 rounded-2xl"></div>
          <div className="bg-red-300 h-96 rounded-2xl"></div>
          <div className="bg-blue-300 h-96 rounded-2xl"></div>
          <div className="bg-green-300 h-96 rounded-2xl"></div>
          <div className="bg-yellow-300 h-96 rounded-2xl"></div>
          <div className="bg-red-300 h-96 rounded-2xl"></div>
        </motion.div>
      </div>
    </div>
  );
}
