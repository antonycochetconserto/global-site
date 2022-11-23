import Navbar from '../components/home/navbar';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-white w-full h-screen relative overflow-hidden">
      <Navbar />
      <div className="container-lg">
        <div className="text-center absolute bottom-20 left-0 right-0">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ y: -80, opacity: 1 }}
              transition={{ duration: 1, type: 'tween' }}
              className="text-8xl font-bold bg-gradient-to-r from-blue-700 to-fuchsia-700 inline-block text-transparent bg-clip-text tracking-tighter p-2"
            >
              Concept Ecommerce.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ y: -80, opacity: 1 }}
              transition={{ duration: 1, type: 'tween' }}
              className="text-slate-900 font-medium text-4xl tracking-tight w-5/12 mx-auto"
            >
              Maecenas interdum, tortor ultrices vulputate, nibh turpis molestie
              nulla, id consectetur est.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, type: 'tween' }}
              className="bg-gradient-to-r from-blue-700 to-fuchsia-700 rounded-xl px-8 py-3 text-3xl font-semibold text-white tracking-tight hover:ring-offset-2 hover:ring-4 hover:ring-blue-200 hover:from-blue-600 hover:to-fuchsia-600 hover:ease-linear transition ease-in duration-300"
            >
              Explorer
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}
