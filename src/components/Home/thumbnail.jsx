import { Link } from 'react-router-dom'
import '../../styles/Home/thumbnail.css'

function Thumbnail(props) {
    const {img, name, id} = props

    return (
        <Link to={`/house/${id}`} className="thumbnail link">
            <img src={img} alt={`house with the id ${id}`} className="thumbnail__img"/>
            <h2 className="thumbnail__name">{name}</h2>
        </Link>
    )
}

export default Thumbnail

