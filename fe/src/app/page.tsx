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
import { Hero } from './_components/Hero'
import { Footer } from './_components/Footer'
import { Contact } from './_components/Contact'
import { ThisCompany } from './_components/ThisCompany'
import { About } from './_components/About'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffdf7] to-[#fef4ea] font-sans">
      <Header />
      <Hero />
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

      <About />
      <ThisCompany />
      <Contact />
      <Footer />
    </div>
  )
}
