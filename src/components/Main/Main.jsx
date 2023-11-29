import './Main.css'
import banner from '../../assets/banner.png'

//NOTA: la imágen del banner esta en baja calidad porque no es la definitiva, es el concepto de estilo que quiero aplicar en la página

const Main = () => {
    return (
        <main>
            <div className='banner_title'>
                <h1>IT'S ALL <br/> ABOUT THE <br/> MUSIC</h1>
            </div>
            <img className='banner' src={banner} alt="" />
        </main>
    )
} 

export default Main