import { useEffect, useState } from 'react'
import styled from 'styled-components'

// import Form from '../components/Form'
// import Grid from '../components/Grid/Grid'
import axios from 'axios'
import "react-toastify/dist/ReactToastify.css"
import Menu from '@/components/Menu/Menu'
// import { Provider } from 'react-redux'
// import store from '../store'
// import Menu from '@/components/Menu/Menu'

export default function Home() {

  return (
    // <Provider store={store}>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Menu />
      <div>PETSHOP</div>
      <a href="/users">Usuarios</a>
    </main>
    // </Provider>
  )
}


// export const Thead = styled.thead`

// `;
 