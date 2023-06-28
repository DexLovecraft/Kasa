import '../styles/error404.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Error404 (props) {
    const changeSelection = props.changeSelection

    useEffect(() => {
        changeSelection('')
    }, [changeSelection])

    useEffect(() => {
        document.title = `Kasa - Erreur 404`
    }, [])

    return (
        <div className="error">
            <h1 className="error__title">404</h1>
            <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' onClick={()=>{changeSelection('accueil')}} className="error__link link">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error404