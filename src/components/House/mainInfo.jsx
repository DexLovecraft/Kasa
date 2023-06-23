import Tag from './tag'
import '../../styles/House/mainInfo.css'

function MainInfo (props) {
    const title = props.title
    const location = props.location
    const tagText = props.tagText

    return (
        <div className='container'>
            <h1 className='title'>{title}</h1>
            <p className='location'>{location}</p>
            <div className='tags'>
                {tagText.map((tag) => (
                    <Tag tagText={tag}/>
                ))}
            </div>
        </div>
    )
}

export default MainInfo