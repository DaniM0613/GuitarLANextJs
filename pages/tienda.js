import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import styles from '../styles/grid.module.css'


export default  function Tienda({guitarras}) {

  console.log(guitarras)
  return (
    
    <Layout
     title={'Tienda Virtual'}
     description='Tienda Virtual, venta de guitarras, instrumentos, GuitarLA'>
        
    <main className="contenedor"> 
      <h1 className="heading">Nuestra Coleccion</h1>
       
       <div className={styles.grid} > 
      {guitarras.map(guitarra => (
        <Guitarra
          key={guitarra.id}
          guitarra={guitarra.attributes}
        />

      ))}
      </div>
    </main>
    </Layout>
  )
}

//CONSULTAR UNA API 
// export async function getStaticProps() {
//   const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guitarras?populate=imagen`)
//   const {data: guitarras} = await respuesta.json()
//   return {
//    props: {
//       guitarras
//    }
//  }
//  }


  export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guitarras?populate=imagen`)
    const {data: guitarras} = await respuesta.json()
     return {
     props: {
         guitarras
     }
    }
   }

  

