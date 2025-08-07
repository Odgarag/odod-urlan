// app/admin/page.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Users, Settings, ShoppingBag } from 'lucide-react'

export default function AdminDashboard() {
  const [tab, setTab] = useState('overview')

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Одод Урлан</h2>
        <nav className="space-y-2">
          <Button
            variant={tab === 'overview' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setTab('overview')}
          >
            <BarChart className="w-5 h-5 mr-2" /> Нүүр
          </Button>
          <Button
            variant={tab === 'products' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setTab('products')}
          >
            <ShoppingBag className="w-5 h-5 mr-2" /> Бүтээгдэхүүн
          </Button>
          <Button
            variant={tab === 'users' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setTab('users')}
          >
            <Users className="w-5 h-5 mr-2" /> Хэрэглэгчид
          </Button>
          <Button
            variant={tab === 'settings' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setTab('settings')}
          >
            <Settings className="w-5 h-5 mr-2" /> Тохиргоо
          </Button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        {tab === 'overview' && (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Хяналтын самбар</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Захиалгууд</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold">56</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Шинэ хэрэглэгч</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold">12</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Орлого</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold">₮1,200,000</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {tab === 'products' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Бүтээгдэхүүн</h1>
            <p>Энд бүтээгдэхүүнүүдийн жагсаалт, нэмэх, устгах функцүүд орно.</p>
          </div>
        )}

        {tab === 'users' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Хэрэглэгчид</h1>
            <p>Бүртгэлтэй хэрэглэгчдийн жагсаалт, хандалт гэх мэт.</p>
          </div>
        )}

        {tab === 'settings' && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Тохиргоо</h1>
            <p>Ерөнхий тохиргоонууд энд орно.</p>
          </div>
        )}
      </main>
    </div>
  )
}
