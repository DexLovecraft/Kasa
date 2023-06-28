import { Link } from 'react-router-dom'
import '../../styles/Home/thumbnail.css'

function Thumbnail(props) {
    const thumbImg = props.img
    const thumbName = props.name
    const thumbId = props.id
    const updateWhichHouse = props.updateWhichHouse

    return (
        <Link to='/house' className="thumbnail link" onClick={()=> updateWhichHouse(thumbId)}>
            <img src={thumbImg} alt={`house with the id ${thumbId}`} className="thumbnail__img"/>
            <h2 className="thumbnail__name">{thumbName}</h2>
        </Link>
    )
}

export default Thumbnail

