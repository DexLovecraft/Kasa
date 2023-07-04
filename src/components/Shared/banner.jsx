import '../../styles/Shared/banner.css'

function Banner (props) {
    const {img, text, modif} = props

    return (
        <div className={`banner banner__${modif}`}>
            <img src={img} alt="Landscape background" className={`banner__img`}/>
            <h1 className="banner__text">{text}</h1>
        </div>
    )
}

export default Banner