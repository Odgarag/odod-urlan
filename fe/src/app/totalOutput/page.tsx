import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Header } from '../_components/Header'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Page = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <section
        id="products"
        className="py-20 bg-gradient-to-b from-gray-50 to-white mt-22"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Бидний бүтээгдэхүүн
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Уламжлалт монгол хувцас, орчин үеийн загвар хоёрыг хослуулсан
              өвөрмөц бүтээгдэхүүн
            </p>
          </div>

          {/* Traditional Deels */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Уламжлалт дээл
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=320&width=400"
                    alt="Цэнхэр дээл"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-amber-500">
                    Шинэ
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    Цэнхэр торгон дээл
                  </CardTitle>
                  <CardDescription>
                    Уламжлалт монгол дээл, торгон даавуугаар хийсэн
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-900">
                      ₮450,000
                    </span>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Захиалах
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=320&width=400"
                    alt="Улаан дээл"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    Улаан хатгамал дээл
                  </CardTitle>
                  <CardDescription>
                    Хатгамал хээтэй, баялаг монгол дээл
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-900">
                      ₮520,000
                    </span>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Захиалах
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=320&width=400"
                    alt="Ногоон дээл"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    Ногоон ёслолын дээл
                  </CardTitle>
                  <CardDescription>
                    Ёслолын арга хэмжээнд зориулсан тансаг дээл
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-900">
                      ₮380,000
                    </span>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Захиалах
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mongolian Shirts */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Монгол цамц
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=320&width=400"
                    alt="Цагаан цамц"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    Цагаан хээтэй цамц
                  </CardTitle>
                  <CardDescription>
                    Уламжлалт хээ угалзтай цагаан цамц
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-900">
                      ₮85,000
                    </span>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Захиалах
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=320&width=400"
                    alt="Цэнхэр цамц"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    Цэнхэр торгон цамц
                  </CardTitle>
                  <CardDescription>
                    Торгон даавуугаар хийсэн тансаг цамц
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-900">
                      ₮120,000
                    </span>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Захиалах
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=320&width=400"
                    alt="Бор цамц"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    Бор арьсан цамц
                  </CardTitle>
                  <CardDescription>
                    Арьсан нэмэлттэй уламжлалт цамц
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-900">
                      ₮95,000
                    </span>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Захиалах
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Accessories */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Гоёл чимэглэл
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=192&width=300"
                    alt="Монгол малгай"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-900">
                    Үслэг малгай
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-xl font-bold text-blue-900">
                    ₮65,000
                  </span>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=192&width=300"
                    alt="Монгол бүс"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-900">
                    Мөнгөн бүс
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-xl font-bold text-blue-900">
                    ₮180,000
                  </span>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=192&width=300"
                    alt="Монгол гутал"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-900">
                    Уламжлалт гутал
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-xl font-bold text-blue-900">
                    ₮220,000
                  </span>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=192&width=300"
                    alt="Монгол гоёл чимэглэл"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-900">
                    Мөнгөн чимэглэл
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-xl font-bold text-blue-900">
                    ₮150,000
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Page
