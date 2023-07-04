import { NavLink } from 'react-router-dom'
import logo__global from '../../img/logo__global.svg'
import '../../styles/Shared/header.css'

function Header () {
        return (
            <div className="header">
                <img src={logo__global} alt='Logo of Kasa' className='header__logo'/>
                <ul className='header__menu'>
                    <NavLink to='/' className={`header__menu__button link`}>Accueil</NavLink>
                    <NavLink to='/about' className={`header__menu__button link`}>A propos</NavLink>
                </ul>
            </div>
        )
}

export default Header