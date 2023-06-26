import Tag from './tag'
import '../../styles/House/info.css'
import Host from './host'

function Info (props) {

    const house = props.house

    return (
        <div className='info__container'>
            <div className='main'>
                <h1 className='title'>{house.title}</h1>
                <p className='location'>{house.location}</p>
                <div className='tags'>
                    {house.tags.map((tag) => (
                        <Tag tagText={tag}/>
                    ))}
                </div>
            </div>
            <div className='secondary'>
                <Host host={house.host}/>
            </div>
        </div>
    )
}

export default Info