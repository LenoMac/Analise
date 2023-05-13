import React from 'react'
import { Menu } from './components/Menu'
import { Trands } from './components/Trands'

const App = () => {
  return (
    <div className='App h-[100vh] flex w-full select-none overflow-x-hidden overflow-y-hidden'>
      <Menu />
      <Trands />
    </div>
  )
}

export default App