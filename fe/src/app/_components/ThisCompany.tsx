import Image from 'next/image'

export const ThisCompany = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div className="relative w-full max-w-md sm:max-w-lg mx-auto lg:mx-0">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Одод Урлан цех"
              width={600}
              height={500}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
              Бидний тухай
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
              "Одод Урлан" нь 2008 онд байгуулагдсан монголын уламжлалт хувцас,
              гоёл чимэглэлийн цех юм. Бид өвөг дээдсийн уламжлалыг хадгалж,
              орчин үеийн хэрэгцээнд нийцүүлэн өвөрмөц бүтээгдэхүүн бүтээж
              байна.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Манай багт мэргэжлийн оёдолчид, загвар зохион бүтээгчид ажиллаж,
              чанартай материал ашиглан гар урлалын өндөр түвшинд хүрсэн
              бүтээгдэхүүн үйлдвэрлэж байна.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                  15+
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {' '}
                  Жилийн туршлага
                </p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-amber-50 rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                  500+
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Сэтгэл хангалуун үйлчлүүлэгч
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
