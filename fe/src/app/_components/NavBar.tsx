'use client'

import { useState } from 'react'
import { AlignJustify } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <div className="relative">
      <Sheet>
        <SheetTrigger asChild>
          <button className=" top-4 right-4 z-50">
            <AlignJustify className="w-6 h-6 text-gray-800" />
          </button>
        </SheetTrigger>

        {/* ✅ SheetContent ашиглах, side="left" зөвшөөрөгдөнө */}
        <SheetContent side="left" className="w-[250px] p-4">
          <h2 className="text-lg font-semibold mb-4">Цэс</h2>

          <Accordion type="multiple" className="w-full space-y-2">
            <AccordionItem value="men">
              <AccordionTrigger>Эрэгтэй</AccordionTrigger>
              <AccordionContent className="ml-4 space-y-1">
                <Link
                  href="/men/dress"
                  className="block px-2 py-1 rounded hover:bg-gray-100 transition-colors"
                >
                  Дээл
                </Link>
                <Link
                  href="/men/coat"
                  className="block px-2 py-1 rounded hover:bg-gray-100 transition-colors"
                >
                  Хүрэм
                </Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="women">
              <AccordionTrigger>Эмэгтэй</AccordionTrigger>
              <AccordionContent className="ml-4 space-y-1">
                <Link
                  href="/women/dress"
                  className="block px-2 py-1 rounded hover:bg-gray-100 transition-colors"
                >
                  Дээл
                </Link>
                <Link
                  href="/women/jewelry"
                  className="block px-2 py-1 rounded hover:bg-gray-100 transition-colors"
                >
                  Гоёл
                </Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="kids">
              <AccordionTrigger>Хүүхэд</AccordionTrigger>
              <AccordionContent className="ml-4 space-y-1">
                {/* Хүү */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="boys">
                    <AccordionTrigger className="text-sm">Хүү</AccordionTrigger>
                    <AccordionContent className="ml-4 space-y-1">
                      <Link
                        href="/kids/boys/deel"
                        className="block px-2 py-1 rounded hover:bg-gray-100 transition-colors"
                      >
                        Дээл
                      </Link>
                      <Link
                        href="/kids/boys/shirt"
                        className="block px-2 py-1 rounded hover:bg-gray-100 transition-colors"
                      >
                        Цамц
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Охин */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="girls">
                    <AccordionTrigger className="text-sm">
                      Охин
                    </AccordionTrigger>
                    <AccordionContent className="ml-4 space-y-1">
                      <Link
                        href="/kids/girls/deel"
                        className="block px-2 py-1 rounded hover:bg-gray-100 transition-colors"
                      >
                        Дээл
                      </Link>
                      <Link
                        href="/kids/girls/shirt"
                        className="block px-2 py-1 rounded hover:bg-gray-100 transition-colors"
                      >
                        Цамц
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="accessories">
              <AccordionTrigger>Accessories</AccordionTrigger>
              <AccordionContent className="ml-4 space-y-1">
                <Link
                  href="/accessories/belts"
                  className="block px-2 py-1 rounded hover:bg-gray-100 transition-colors"
                >
                  Бүс
                </Link>
                <Link
                  href="/accessories/bags"
                  className="block px-2 py-1 rounded hover:bg-gray-100 transition-colors"
                >
                  Цүнх
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </Sheet>
    </div>
  )
}
