import Navbar from '../components/home/navbar';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <main className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-600 via-teal-500 to-pink-700 w-full h-screen relative">
        <Navbar />
        <div className="container-lg">
          <div className="text-center mt-96">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ y: -80, opacity: 1 }}
                transition={{ duration: 1, type: 'tween' }}
                className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-purple-200 via-white to-cyan-300 text-8xl font-bold inline-block text-transparent bg-clip-text tracking-tighter p-2"
              >
                Concept Ecommerce.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ y: -80, opacity: 1 }}
                transition={{ duration: 1, type: 'tween' }}
                className="text-white font-medium text-4xl tracking-tight w-5/12 mx-auto"
              >
                Maecenas interdum, tortor ultrices vulputate, nibh turpis
                molestie nulla, id consectetur est.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, type: 'tween' }}
                className="bg-white rounded-xl px-8 py-3 text-3xl font-semibold text-gray-700 tracking-tight hover:ring-offset-2 hover:ring-4 hover:ring-blue-200 hover:from-blue-600 hover:to-fuchsia-600 hover:ease-linear transition ease-in duration-300"
              >
                Explorer
              </motion.button>
            </div>
          </div>
          <div className="space-x-12 flex flex-row justify-center mt-12 opacity-20">
            <div className="h-96 w-3/12 bg-gray-900 rounded-2xl"></div>
            <div className="h-96 w-3/12 bg-gray-900 rounded-2xl"></div>
            <div className="h-96 w-3/12 bg-gray-900 rounded-2xl"></div>
          </div>
        </div>
      </main>
    </>
  );
}
