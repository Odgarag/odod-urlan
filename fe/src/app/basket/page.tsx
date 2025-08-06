'use client'

import { CustomHeader } from '../custom/_components/CustomHeader'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const BasketPage = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Хантааз - Торго',
      price: 120000,
      image: '/sample-item.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Дээл - Үндэсний загвар',
      price: 180000,
      image: '/sample-item-2.jpg',
      quantity: 2,
    },
  ]

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <CustomHeader />

      <main className="max-w-4xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          🧺 Таны сагс
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Сагс хоосон байна.
          </p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover border"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-semibold text-base sm:text-lg">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Тоо: {item.quantity}
                  </p>
                </div>
                <p className="text-lg font-medium text-center sm:text-right min-w-[100px]">
                  {item.price.toLocaleString()}₮
                </p>
              </div>
            ))}

            <Separator className="my-6 bg-gray-300 dark:bg-gray-700" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-lg sm:text-xl font-semibold">
                Нийт:
                <span className="ml-2 text-xl sm:text-2xl font-bold text-black dark:text-white">
                  {total.toLocaleString()}₮
                </span>
              </div>

              <Button className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
                🛒 Захиалга хийх
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default BasketPage
