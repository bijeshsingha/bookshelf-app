'use client'
import Image from 'next/image'
import Admin from './Admin'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 lg:p-12">
      <Admin />
    </main>
  )
}
