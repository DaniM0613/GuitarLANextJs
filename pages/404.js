import Layout from '@/components/layout'
import React from 'react'
import Link from 'next/link'


function Pagina404() {
  return (
    <Layout
       title="Pagina No Encontrada"
    >
    <p className='error'>Pagina No Encontrada</p>
    <Link className="error-enlace" href='/'>
       Ir a Inicio
    </Link>
    </Layout>
  )
}

export default Pagina404
