import footerLogo from '../img/logo__footer.svg'
import '../styles/footer.css'

function Footer () {
    return (
        <div className='footer'>
            <img src={footerLogo} alt="logo in white" className='footer__img'/>
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer