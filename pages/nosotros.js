import Image from "next/image"
import Layout from "@/components/layout"
import styles from '../styles/nosotros.module.css'

export default  function Nosotros() {
  return (
    
    <Layout
     title={'Nosotros'}
     description='Sobre Nosotros, GuitarLA, tienda de musica '>

       <main className="contenedor">
        <h1 className="heading">Nosotros</h1> 

        <div className={styles.contenido} > 
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen Sobre Nosotros"/>
        <div> 
           <p>
           Vestibulum ligula lectus, mollis nec aliquam id, molestie sit amet quam. Vivamus aliquet elit nec nisi pretium tempus. Donec nibh mi, elementum vel auctor vitae, convallis commodo lorem. Quisque vulputate fringilla gravida. Aliquam erat volutpat. Proin ut elementum ante, at auctor ante. Pellentesque varius ac sem nec mollis. Proin tincidunt viverra arcu, vitae iaculis metus sagittis a.
           </p>
           <p>
           Vestibulum ligula lectus, mollis nec aliquam id, molestie sit amet quam. Vivamus aliquet elit nec nisi pretium tempus. Donec nibh mi, elementum vel auctor vitae, convallis commodo lorem. Quisque vulputate fringilla gravida. Aliquam erat volutpat. Proin ut elementum ante, at auctor ante. Pellentesque varius ac sem nec mollis. Proin tincidunt viverra arcu, vitae iaculis metus sagittis a.
           </p>
          </div>
        </div>
        </main> 

   
    </Layout>
  )
}

