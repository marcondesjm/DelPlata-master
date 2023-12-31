import './footer.css'
import logo from '../../assets/logo-com-fundo.jpeg'
import pagamento from '../../assets/formas-pagamento.png'
import {BsInstagram, BsWhatsapp} from 'react-icons/bs/index.esm.js'
import { Link } from 'react-router-dom'

export default function Footer () {

    const toHome = () =>{
        window.scrollTo(0, 0)
    }

    return(
        <>
        <footer>

            <div className='card'>
                <h3>Início</h3>
                <Link to='/' onClick={toHome}>Home</Link>
                <Link to='/sobre'>Sobre Nós</Link>
                <Link to='https://wa.link/j9ul5g' target='_blank'>Contato</Link>
            </div>

            <div className='card' id='payments'>
                <h3>Formas de Pagamento</h3>
                <p>Aceitamos pagamentos por cartão de crédito,
                    débito e pix.
                </p>
                <img src={pagamento} className='img-payments'/>
            </div>

            <div className='card'>
                <h3>Suporte</h3>
                <Link to='https://www.instagram.com/delplata._/' target='_blank'>Instagram</Link>
                <Link to='https://wa.link/j9ul5g' target='_blank'>Whatsapp</Link>
            </div>

            <div className='card'>
                <h3>Informações</h3>
                <p>Somos uma empresa especializada em bijuterias. 
                    Nosso material tem  durabilidade, resistência e elegância.</p>
            </div>
        </footer>
        <div className='icons-socials'>
            <img src={logo} className='logo-img'/> 

                <p>Paty Biju &copy; 2023
                    <p>Feito por <Link to="https://marcondesjm.github.io/portfolio/">Marcondes Machado</Link></p>
                </p>

                <div>
                <Link to='https://www.instagram.com/delplata._/' target='_blank'> <BsInstagram/> </Link>
                <Link to='https://wa.link/j9ul5g' target='_blank'> <BsWhatsapp/> </Link>
               </div>
        </div>
        </>
    )
}