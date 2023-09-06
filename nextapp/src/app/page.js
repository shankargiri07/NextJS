'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

/* export default function Home() {
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
} */

export default function Page(){

  const router = useRouter();

  const navigate = (name) => {
    router.push(name)
  }
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Basic Routing | Make New Page</h1>
      <Link href="/login">Go To Login Page</Link> || <Link href="/about"> Go To About Page</Link>
      <br/>
      <button onClick={()=> navigate("/login")}>Go To Login Page</button> || <button onClick={()=> navigate("/about")}>Go To About Page</button>
    </main>
  )
}