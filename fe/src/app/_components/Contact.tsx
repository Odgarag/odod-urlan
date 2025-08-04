import { Card } from '@/components/ui/card'
import { Mail, MapPin, Phone } from 'lucide-react'

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-24">
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
  )
}
