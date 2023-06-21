import '../styles/banner.css'

function Banner (props) {
    const bannerImg = props.img
    const bannerText = props.text

    return (
        <div className="banner">
            <img src={bannerImg} alt="Landscape background" className="banner__img" />
            <p className="banner__text">{bannerText}</p>
        </div>
    )
}

export default Banner