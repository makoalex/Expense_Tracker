import { useState } from 'react'
import ExpenseItem from './components/ExpenseItem'


import React from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <section>
    <ExpenseItem></ExpenseItem>
  </section>
    </>
  )
}

export default App
