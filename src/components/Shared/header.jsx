import { Link } from 'react-router-dom'
import logo__global from '../../img/logo__global.svg'
import '../../styles/Shared/header.css'

function Header (props) {
        const selection = props.selection
        const changeSelection = props.changeSelection

        if (selection === 'accueil'){
            return (
                <div className="header">
                    <img src={logo__global} alt='Logo of Kasa' className='header__logo'/>
                    <ul className='header__menu'>
                        <Link to='/' className='header__menu__button selected link'>Accueil</Link>
                        <Link to='/about'className='header__menu__button link' onClick={() => {changeSelection('about')}}>A propos</Link>
                    </ul>
                </div>
            )
        }
        else if (selection === "about") {
            return (
                <div className="header">
                    <img src={logo__global} alt='Logo of Kasa' className='header__logo'/>
                    <ul className='header__menu'>
                        <Link to='/' className='header__menu__button link' onClick={() => {changeSelection('accueil')}}>Accueil</Link>
                        <Link to='/about'className='header__menu__button selected link'>A propos</Link>
                    </ul>
                </div>
            )
        } 
        else {
            return (
                <div className="header">
                    <img src={logo__global} alt='Logo of Kasa' className='header__logo'/>
                    <ul className='header__menu'>
                        <Link to='/' className='header__menu__button link' onClick={() => {changeSelection('accueil')}}>Accueil</Link>
                        <Link to='/about'className='header__menu__button link' onClick={() => {changeSelection('about')}}>A propos</Link>
                    </ul>
                </div>
            )
        }   
}

export default Header