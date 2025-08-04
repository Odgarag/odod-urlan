export const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-gray-900 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Бидний тухай</h2>
        <p className="text-xl mb-8 leading-relaxed">
          "Одод Урлан" нь уламжлалт монгол дээл хувцасны урлан бөгөөд бид
          хэрэглэгчдийнхээ хүсэлтийг биелүүлэн, чанартай, өвөрмөц загваруудыг
          санал болгодог. Бидний мэргэжлийн оёдолчид таны хүссэн хэмжээ,
          загвараар хувцас бэлтгэнэ.
        </p>
        <div className="space-y-4">
          {[
            'Уламжлалт монгол дээл хувцас',
            'Өндөр чанартай материалууд',
            'Хэрэглэгчийн хүсэлтээр захиалга',
            'Мэргэжлийн оёдолчид',
          ].map((text) => (
            <div key={text} className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
