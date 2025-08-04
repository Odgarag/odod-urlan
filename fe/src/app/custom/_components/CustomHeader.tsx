'use client'

import Link from 'next/link'

export const CustomHeader = () => {
  return (
    <header className="bg-white shadow-md -m-2">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#eab308] rounded-full flex items-center justify-center shadow-md">
              <img
                src={
                  'https://res.cloudinary.com/docvcxodh/image/upload/v1753931682/d1a5d825-4848-40c7-9e49-e448bec0e176_fb5c1t.jpg'
                }
                alt="Logo"
                className="object-cover rounded-full w-12 h-12"
              />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
                Одод Урлан
              </h1>
              <p className="text-sm text-gray-500">
                Монгол дээл хувцасны урлан
              </p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
