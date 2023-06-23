import '../../styles/House/tag.css'

function Tag (props) {
    const tagText = props.tagText

    return (
            <div className="text__container">
                <p className="text">{tagText}</p>
            </div>
    )
}

export default Tag