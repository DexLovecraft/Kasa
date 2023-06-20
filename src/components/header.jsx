import logo__global from '../img/logo__global.svg'
import '../styles/header.css'

function Header () {
    return (
        <div className="header">
            <img src={logo__global} alt='Logo of Kasa' className='header__logo'/>
            <ul className='header__menu'>
                <li className='header__menu__button'>Accueil</li>
                <li className='header__menu__button'>A propos</li>
            </ul>
        </div>
    )
}

export default Header