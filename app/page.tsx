import '@/styles/globals.css';

import { Counter } from '@/components/Counter'
import { Accordion } from '@/components/Accordion'
import { Input } from '@/components/Input'

export default function Home() {
  return (
    <main>
        <div>
          <h1>React Exercise 1 - Comic Grid</h1>
        </div>
        <div className="App">
          <Input/>
          <Counter/>
          <Accordion/>
      </div>
   </main>
  )
}
