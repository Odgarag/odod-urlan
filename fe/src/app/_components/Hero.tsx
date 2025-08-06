import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-r from-[#fef6e4] via-[#fde68a] to-[#fef6e4] text-gray-900 mt-22">
      <div className="absolute inset-0 bg-white/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4 sm:space-y-6 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-800">
            Монголын уламжлалт <br className="hidden sm:block" />
            <span className="text-[#eab308]">хувцас</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md sm:max-w-xl mx-auto lg:mx-0">
            Өв соёлоо орчин үетэй хослуулан чанартай, үзэсгэлэнтэй дээл, цамц,
            чимэглэлийг хийж байна.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
            <Button
              onClick={() => (window.location.href = '/totalOutput')}
              size="lg"
              className="bg-[#eab308] text-white font-semibold shadow-md hover:bg-[#d4a106] cursor-pointer"
            >
              Бүтээгдэхүүн үзэх
            </Button>
            <Button
              onClick={() => (window.location.href = '/custom')}
              size="lg"
              variant="outline"
              className="border-gray-700 text-gray-800 hover:bg-gray-100 cursor-pointer"
            >
              Захиалга өгөх
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-sm sm:max-w-md mx-auto lg:mx-0"
        >
          <img
            src="https://res.cloudinary.com/docvcxodh/image/upload/v1753934166/IMG_2572_i7w0o9.jpg"
            alt="Монгол дээл"
            width={500}
            height={600}
            className="rounded-2xl shadow-xl border border-gray-200 w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
