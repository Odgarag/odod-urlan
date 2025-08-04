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
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
import { CustomHeader } from './_components/CustomHeader'
import { motion } from 'framer-motion'

const formSchema = z.object({
  firstName: z.string().min(1, 'Нэр шаардлагатай'),
  lastName: z.string().min(1, 'Овог шаардлагатай'),
  phone: z.string().min(8, 'Утасны дугаар буруу байна'),
  email: z.string().email('Зөв имэйл оруулна уу'),
  productType: z.string().min(1, 'Төрөл сонгоно уу'),
  description: z.string().min(10, 'Дэлгэрэнгүй тайлбар бичнэ үү'),
})
const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: any) => {
    console.log('Submitted:', data)
    alert('Захиалга илгээгдлээ!')
  }

  return (
    <div>
      <CustomHeader />
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-[#fef6e4] via-[#fde68a] to-[#fef6e4] text-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4 sm:space-y-6 text-center lg:text-left"
            >
              <h2 className="text-4xl font-bold mb-6">Захиалгат хувцас</h2>
              <p className="text-xl mb-8 leading-relaxed">
                Таны хүссэн загвар, хэмжээ, өнгөөр тусгай захиалгат хувцас
                бэлтгэж байна. Мэргэжлийн оёдолчид таны бүх хүсэлтийг биелүүлнэ.
              </p>
              <div className="space-y-4">
                {[
                  'Хувийн хэмжээгээр тохируулга',
                  'Өөрийн сонголтын даавуу, өнгө',
                  'Уламжлалт болон орчин үеийн загвар',
                  '15-30 хоногийн хугацаанд бэлэн',
                ].map((text) => (
                  <div key={text} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                      <span className="text-blue-900 text-sm font-bold">✓</span>
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-sm sm:max-w-md mx-auto lg:mx-0"
            >
              {' '}
              <Card className="bg-white text-gray-900">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <Input
                          id="firstName"
                          {...register('firstName')}
                          placeholder="Таны нэр"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Овог</Label>
                        <Input
                          id="lastName"
                          {...register('lastName')}
                          placeholder="Таны овог"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Утасны дугаар</Label>
                      <Input
                        id="phone"
                        {...register('phone')}
                        placeholder="99123456"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">И-мэйл хаяг</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="example@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="productType">Бүтээгдэхүүний төрөл</Label>
                      <select
                        {...register('productType')}
                        className={cn(
                          'w-full p-2 border rounded-md',
                          errors.productType && 'border-red-500'
                        )}
                      >
                        <option value="">Сонгоно уу</option>
                        <option value="deel">Дээл</option>
                        <option value="shirt">Цамц</option>
                        <option value="hat">Малгай</option>
                        <option value="shoe">Гутал</option>
                        <option value="other">Бусад</option>
                      </select>
                      {errors.productType && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.productType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="description">Дэлгэрэнгүй тайлбар</Label>
                      <Textarea
                        id="description"
                        {...register('description')}
                        placeholder="Таны хүссэн загвар, өнгө, хэмжээ, бусад шаардлагыг бичнэ үү..."
                        rows={4}
                      />
                      {errors.description && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.description.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                    >
                      Захиалга илгээх
                    </Button>
                  </CardContent>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Page
