import '../../styles/Shared/banner.css'

function Banner (props) {
    const bannerImg = props.img
    const bannerText = props.text
    const bannerModifier = props.modif

    return (
        <div className={`banner banner__${bannerModifier}`}>
            <img src={bannerImg} alt="Landscape background" className={`banner__img`}/>
            <h1 className="banner__text">{bannerText}</h1>
        </div>
    )
}

export default Banner