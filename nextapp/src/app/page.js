'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState("Shankar");
  const apple = (item) => {
    setName("Pirate")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Events, Function and State {name}</h2>
      <button onClick={() => apple()}>Click Me</button>
    </main>
  )
}

