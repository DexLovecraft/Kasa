import '../styles/thumbnail.css'

function Thumbnail(props) {
    const thumbImg = props.img
    const thumbName = props.name
    const thumbId = props.id

    return (
        <div className="thumbnail">
            <img src={thumbImg} alt={`house with the id ${thumbId}`} className="thumbnail__img"/>
            <h2 className="thumbnail__name">{thumbName}</h2>
        </div>
    )
}

export default Thumbnail

