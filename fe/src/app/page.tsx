'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Phone,
  Mail,
  MapPin,
  Star,
  ShoppingBag,
  Scissors,
  Users,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from './_components/Header'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffdf7] to-[#fef4ea] font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-r from-[#fff8e1] via-[#fae9bd] to-[#fff8e1] text-gray-900">
        <div className="absolute inset-0 bg-white/20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-800">
              Монголын уламжлалт <br />
              <span className="text-[#eab308]">хувцас</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Өв соёлоо орчин үетэй хослуулан чанартай, үзэсгэлэнтэй дээл, цамц,
              чимэглэлийг хийж байна.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-[#eab308] text-white font-semibold shadow-md hover:bg-[#d4a106]"
              >
                Бүтээгдэхүүн үзэх
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-gray-300 text-gray-700 hover:bg-gray-100 shadow-sm"
              >
                Захиалга өгөх
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Монгол дээл"
              width={500}
              height={600}
              className="rounded-3xl shadow-xl border border-gray-200"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900">500+</h3>
              <p className="text-gray-600">Сэтгэл хангалуун үйлчлүүлэгч</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900">1000+</h3>
              <p className="text-gray-600">Бэлэн бүтээгдэхүүн</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900">15+</h3>
              <p className="text-gray-600">Жилийн туршлага</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
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

      {/* Custom Orders Section */}
      <section
        id="custom"
        className="relative overflow-hidden py-20 bg-gradient-to-r from-[#fef6e4] via-[#fde68a] to-[#fef6e4] text-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Захиалгат хувцас</h2>
              <p className="text-xl mb-8 leading-relaxed">
                Таны хүссэн загвар, хэмжээ, өнгөөр тусгай захиалгат хувцас
                бэлтгэж байна. Мэргэжлийн оёдолчид таны бүх хүсэлтийг биелүүлнэ.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 text-sm font-bold">✓</span>
                  </div>
                  <span>Хувийн хэмжээгээр тохируулга</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 text-sm font-bold">✓</span>
                  </div>
                  <span>Өөрийн сонголтын даавуу, өнгө</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 text-sm font-bold">✓</span>
                  </div>
                  <span>Уламжлалт болон орчин үеийн загвар</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 text-sm font-bold">✓</span>
                  </div>
                  <span>15-30 хоногийн хугацаанд бэлэн</span>
                </div>
              </div>
            </div>
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">
                  Захиалга өгөх
                </CardTitle>
                <CardDescription>
                  Та доорх маягтыг бөглөж захиалга өгнө үү
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Нэр</Label>
                    <Input id="firstName" placeholder="Таны нэр" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Овог</Label>
                    <Input id="lastName" placeholder="Таны овог" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Утасны дугаар</Label>
                  <Input id="phone" placeholder="99123456" />
                </div>
                <div>
                  <Label htmlFor="email">И-мэйл хаяг</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="productType">Бүтээгдэхүүний төрөл</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Дээл</option>
                    <option>Цамц</option>
                    <option>Малгай</option>
                    <option>Гутал</option>
                    <option>Бусад</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="description">Дэлгэрэнгүй тайлбар</Label>
                  <Textarea
                    id="description"
                    placeholder="Таны хүссэн загвар, өнгө, хэмжээ, бусад шаардлагыг бичнэ үү..."
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  Захиалга илгээх
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Одод Урлан цех"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Бидний тухай
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                "Одод Урлан" нь 2008 онд байгуулагдсан монголын уламжлалт
                хувцас, гоёл чимэглэлийн цех юм. Бид өвөг дээдсийн уламжлалыг
                хадгалж, орчин үеийн хэрэгцээнд нийцүүлэн өвөрмөц бүтээгдэхүүн
                бүтээж байна.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Манай багт мэргэжлийн оёдолчид, загвар зохион бүтээгчид ажиллаж,
                чанартай материал ашиглан гар урлалын өндөр түвшинд хүрсэн
                бүтээгдэхүүн үйлдвэрлэж байна.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-900">15+</h3>
                  <p className="text-gray-600">Жилийн туршлага</p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-900">500+</h3>
                  <p className="text-gray-600">Сэтгэл хангалуун үйлчлүүлэгч</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Холбоо барих
            </h2>
            <p className="text-xl text-gray-600">
              Бидэнтэй холбогдож, танд тохирох хувцсаа захиалаарай
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Утас</h3>
              <p className="text-gray-600">+976 11 123456</p>
              <p className="text-gray-600">+976 99 123456</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">И-мэйл</h3>
              <p className="text-gray-600">info@ododurlan.mn</p>
              <p className="text-gray-600">order@ododurlan.mn</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Хаяг</h3>
              <p className="text-gray-600">Улаанбаatar хот</p>
              <p className="text-gray-600">Сүхбаатар дүүрэг</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden py-14 bg-gradient-to-r from-[#fef6e4] via-[#fde68a] to-[#fef6e4] text-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-blue-900" />
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
                  <Link href="#" className="hover:text-white">
                    Захиалгат хувцас
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Үйлчилгээ</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    Захиалгат оёдол
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Засвар үйлчилгээ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Зөвлөгөө өгөх
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Хүргэлт
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Холбоо барих</h4>
              <div className="space-y-2">
                <p>+976 11 123456</p>
                <p>info@ododurlan.mn</p>
                <p>Улаанбаатар хот</p>
                <p>Сүхбаатар дүүрэг</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 Одод Урлан. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
