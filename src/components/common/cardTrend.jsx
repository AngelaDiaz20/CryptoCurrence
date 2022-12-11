import './cardTrend.css'
import Logo from '../../assets/brands/LogoBrayan.svg'

const CardTrend = () => {
    return(
        <article className='card-trend'>
            <img src={Logo} alt="Logo moneda"/>
            <h3>Nombre</h3>
        </article>
    );
}

export default CardTrend;