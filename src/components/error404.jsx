import '../styles/error404.css'

function Error404 () {
    return (
        <div className="error">
            <h1 className="error__title">404</h1>
            <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
            <p className="error__link">Retourner sur la page d'accueil</p>
        </div>
    )
}

export default Error404