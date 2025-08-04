import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-14 bg-gradient-to-r from-[#fef6e4] via-[#fde68a] to-[#fef6e4] text-gray-900 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img
                  src={
                    'https://res.cloudinary.com/docvcxodh/image/upload/v1753931682/d1a5d825-4848-40c7-9e49-e448bec0e176_fb5c1t.jpg'
                  }
                  alt="Logo"
                  className="object-cover rounded-full w-12 h-12"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Одод Урлан</h3>
              </div>
            </div>
            <p>Монголын уламжлалт хувцас, орчин үеийн загвар</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Бүтээгдэхүүн</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Уламжлалт дээл
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Монгол цамц
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Гоёл чимэглэл
                </Link>
              </li>
              <li>
                <Link href="/custom" className="hover:text-white">
                  Захиалгат хувцас
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Үйлчилгээ</h4>
            <ul className="space-y-2">
              <li>Захиалгат оёдол</li>
              <li>Засвар үйлчилгээ</li>
              <li>Зөвлөгөө өгөх</li>
              <li>Хүргэлт</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Холбоо барих</h4>
            <div className="space-y-2">
              <p>+976 94755551</p>
              <p>info@ododurlan.mn</p>
              <p>Улаанбаатар хот</p>
              <p>Баянзүрх дүүрэг</p>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p>&copy; 2025 Одод Урлан. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  )
}
